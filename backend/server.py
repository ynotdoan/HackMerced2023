from models import app, db, CheckIn, Users, Friends
from flask import jsonify, request
import datetime
from uuid import uuid4

token_map = {'token': None,
             'info': None}

def generate_key():
    return str(uuid4())

@app.route('/login', methods = ["GET"])
def login():
    username = request.json[]
    password = request.json[]

    user = Users.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return {'code': 401,
                'msg': 'Failed login: Incorrect username or password'
                }

    expire_date = (datetime.today()+datetime.timedelta(1)).strftime('%Y-%m-%d')
    token_map['token'] = generate_key()
    token_map['info'] = (expire_date, username)

    return {'code': 200}.update(token_map)

@app.route('/signup', methods=["POST"])
def signup():
    username = request.json[]
    password = request.json[]
    profilepic = request.json[]
    f_name = request.json[]
    l_name = request.json[]

    user = Users.query.filter_by(username=username).first()
    if user:
        return {'code': 400,
                'msg': 'User already exists.'
                }

    new_user = Users(username = username, 
                     hashed_password=password, 
                     profile_pic=profilepic, 
                     first_name=f_name, 
                     last_name=l_name)
    
    db.session.add(new_user)
    db.session.commit()
    
    return {'code': 200,
            'msg': 'Successful account creation.'}

@app.route('/logout', methods=['GET'])
def logout(token):
    token_map['token'] = None
    return {'code': 200,
            'msg': 'Successful logout'}


@app.route('/check', methods = ["POST"])
def check_in():
    answer_mood = request.json() #the mood, result should 1-4
    answer_description = request.json() # the desc
    answer_for = request.json() # the for, only for when user is sad 
    answer_against = request.json() # the against, only when user is sad
    answer_balance = request.json() # the balance, only when the user is sad, if user neutral result should be NULL
    id = login.user.get_id

    add = CheckIn( user_id = id, date = get_time(), mood = answer_mood, desc = answer_description,
            fors = answer_for, against = answer_against, balance = answer_balance)
    
    db.session.add(add)
    db.session.commit()

@app.route('/profile', methods = ["GET"]) #WIP
def profile():
    check_user = request.json()
    user_info = Users.query.filter_by(id = check_user).first()

    user_check_in = CheckIn.query.filter_by(c_id = check_user).all()


    data = {"First_Name":user_info.first_name ,
                                   "Last_Name": user_info.last_name,
                                   "Username": user_info.username,
                                   "Profile_Pic": user_info.profile_pic}
    
# Driver code
if __name__ == '__main__':
    app.run(debug=True)