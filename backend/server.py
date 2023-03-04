from flask import Flask, jsonify
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)

@app.route('/login')
def login():
    pass

# Running app
if __name__ == '__main__':
    app.run(debug=True)