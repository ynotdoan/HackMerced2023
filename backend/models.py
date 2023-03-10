from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import backref, relationship
from sqlalchemy.ext.hybrid import hybrid_property
import hashlib

SALT = ''
SQL_URI = 'sqlite:///database.sqlite'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQL_URI
app.config['SQLALCHEMY_POOL_RECYCLE'] = 299
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'SUPERSECRETKEY'
db = SQLAlchemy(app)
app.app_context().push()

class Users(db.Model):
    __tablename__ = "users"
    # id = Column(Integer, primary_key=True)
    username = Column(String(128), unique=True, nullable=False, primary_key=True)
    hashed_password = Column(String(128), nullable=False)
    profile_pic = Column(String(512), nullable=False) # SET DEFAULT
    first_name = Column(String(128), nullable=False)
    last_name = Column(String(128), nullable=False)

    def __repr__(self):
        return f'<Users(username={self.username})>'

    @hybrid_property
    def password(self):
        return self.hashed_password
    
    @password.setter
    def password(self, p):
        p += SALT
        self.hashed_password = hashlib.sha256(p.encode()).hexdigest()

    def check_password(self, p):
        p += SALT
        return self.hashed_password == hashlib.sha256(p.encode()).hexdigest()


class CheckIn(db.Model):
    __tablename__ = "checkins"
    c_id = Column(Integer, primary_key=True, unique = True)
    user = Column(String(128), ForeignKey('users.username')) 
    username = relationship('Users', backref=backref('checkins', lazy=True), lazy=True)
    date = Column(String(128), nullable=False)
    mood = Column(Integer, nullable=False)
    desc = Column(String(512), nullable=False)
    sup_arg = Column(String(512))
    opp_arg = Column(String(512))
    bal_arg = Column(String(512))

    def __repr__(self):
        return f'<CheckIn(c_id={self.c_id}), username={self.username}, mood={self.mood}>'
    
    def get_user(self):
        return self.username.username

class Friends(db.Model):
    __tablename__ = "friends"
    f_id = Column(Integer, primary_key=True, unique = True)
    id_user = Column(String(128), ForeignKey('users.username'))
    id_following = Column(String(128), ForeignKey('users.username'))

    def __repr__(self):
        return f'<Friends(id_user={self.id_user}, id_following={self.id_following})>'