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

    date = datetime.today().strftime('%Y-%m-%d')
    first_entry = CheckIn.query.filter_by(date=date).first()

    if first_entry and (username == first_entry.get_user()):
        first_login = False

    expire_date = (datetime.today()+datetime.timedelta(1)).strftime('%Y-%m-%d')
    token_map['token'] = generate_key()
    token_map['info'] = (expire_date, username)

    return {'code': 200, 
            'first_login': first_login}.update(token_map)

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


@app.route('/checkin', methods = ["POST"])
def create_check_in(token_map):
    mood = request.json[]
    description = request.json[]
    sup_arg = request.json[]
    opp_arg = request.json[]
    bal_arg = request.json[]
    date = datetime.today().strftime('%Y-%m-%d')

    add = CheckIn(user_id=id, 
                  date=date, 
                  mood=mood, 
                  desc=description,
                  sup_arg=sup_arg, 
                  opp_arg=opp_arg, 
                  bal_arg=bal_arg)
    
    db.session.add(add)
    db.session.commit()

    return {'code': 200,
            'msg': 'new check-in entry added'}


@app.route('/profile', methods = ["GET"]) 
def profile():
    check_user = request.json()
    user_info = Users.query.filter_by(id = check_user).first()

    end_date = datetime.today().strftime('%Y-%m-%d')
    start_date = datetime.datetime.now() - datetime.timedelta(30).strftime('%Y-%m-%d')
    user_check_ins = CheckIn.query.filter_by(CheckIn.date.between((start_date,end_date))).all()

    data = {}
    for i in range(len(user_check_ins)):
        if user_check_ins[i] == 1:
            data[i] = 1
        elif user_check_ins[i] == 2:
            data[i] = 2
        elif user_check_ins[i] == 3:
            data[i] = 3
        else:
            data[i] = 0 

    data1 = {"First_Name":user_info.first_name ,
                                   "Last_Name": user_info.last_name,
                                   "Username": user_info.username,
                                   "Profile_Pic": user_info.profile_pic,
                                   "Calender": data}

    return json.dumps(data1)
    

@app.route('/friend', method = ["GET"])
def getFriends():

    u_id = request.json()

    friends = Friends.query.filter_by(id_user = u_id).all()

    data = []
    for friend in friends:
        friend_info = Users.query.filter_by(id = friend.id_user).first()
        
        for i in range(len(friend)):
            data[i] = {"First_Name":friend_info.first_name ,
                                   "Last_Name": friend_info.last_name,
                                   "Username": friend_info.username,
                                   "Profile_Pic": friend_info.profile_pic,}
    
    return json.dumps(data)


# Driver code
if __name__ == '__main__':
    app.run(debug=True)