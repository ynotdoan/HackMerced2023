from models import app, db, CheckIn, Users, Friends
from flask import jsonify, request
from flask_cors import CORS, cross_origin
import datetime
import json
import sys
from uuid import uuid4

token_map = {'token': None,
             'info': None}

logged_in_today = set()

def generate_key():
    return str(uuid4())
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/login', methods = ["GET"])
@cross_origin()
def login():
    username = request.args.get("username")
    password = request.args.get("password")

    user = Users.query.filter_by(username=username).first()
    print(user, file=sys.stderr)
    if not user or not user.check_password(password):
        return {'code': 401,
                'msg': 'Failed login: Incorrect username or password'
                }

    date = datetime.datetime.now().strftime('%Y-%m-%d')
    first_entry = CheckIn.query.filter_by(date=date).first()

    first_login = True # not username in logged_in_today
    if first_entry and (username == first_entry.get_user()):
        first_login = False

    logged_in_today.add(username)

    expire_date = (datetime.datetime.now()+datetime.timedelta(1)).strftime('%Y-%m-%d')
    token_map['token'] = generate_key()
    token_map['info'] = (expire_date, username)

    return {'code': 200, 
            "fullname": user.first_name +" "+user.last_name,
            'first_login': first_login}

@app.route('/api/signup', methods=["POST"])
@cross_origin()
def signup():
    username = request.json["username"]
    password = request.json["password"]
    profilepic = "url" # request.json[]
    f_name, l_name = request.json["name"].split(' ')[:2]
    print(f_name)
    user = Users.query.filter_by(username=username).first()
    if user:
        return jsonify({'code': 400,
                'msg': 'User already exists.'
                })

    new_user = Users(username = username, 
                     password=password, 
                     profile_pic=profilepic, 
                     first_name=f_name, 
                     last_name=l_name)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'code': 200,
            'msg': 'Successful account creation.'})

@app.route('/logout', methods=['GET'])
def logout(token):
    token_map['token'] = None
    return {'code': 200,
            'msg': 'Successful logout'}


@app.route('/checkin', methods = ["POST"])
def create_check_in(token_map):
    mood = request.json["mood"]
    description = request.json["description"]
    sup_arg = request.json["sup_arg"]
    opp_arg = request.json["opp_arg"]
    bal_arg = request.json["bal_arg"]
    date = datetime.datetime.now().strftime('%Y-%m-%d')

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

    end_date = datetime.datetime.now().strftime('%Y-%m-%d')
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
    

@app.route('/friend', methods = ["GET"])
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
    app.run(port=8000, debug=True)