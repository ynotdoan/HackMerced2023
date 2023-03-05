from models import app, db, CheckIn, Users, Friends
from flask import jsonify, request
import datetime


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

@app.route('/login', methods = ["GET"])
def login():
    user_check = request.json()
    password_check = request.json()
    check = Users.query.filter_by(username = user_check, user_password = password_check).first()

    if not check:
        #Andrew does some type of pop-up of log in fail
        pass
    else:
        #give token
        pass

@app.route('/signup', methods = ["POST"])
def signup():
    post_username = request.json()
    post_password = request.json()
    post_profilepic = request.json()
    post_fname = request.json()
    post_lname = request.json()

    add = Users(username = post_username, password = post_password,
            profile_pic = post_profilepic, first_name = post_fname, last_name = post_lname)
    
    db.session.add(add)
    db.session.commit()

    #reroute user back to login page

@app.route('/logout')
def logout():
    #reroute user to login page
    #remove token
    pass

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