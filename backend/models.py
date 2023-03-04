import sqlite3
from sqlite3 import Error


def openConnection(_dbFile):
    print("++++++++++++++++++++++++++++++++++")
    print("Open database: ", _dbFile)

    conn = None
    try:
        conn = sqlite3.connect(_dbFile)
        print("success")
    except Error as e:
        print(e)

    print("++++++++++++++++++++++++++++++++++")

    return conn

def closeConnection(_conn, _dbFile):
    print("++++++++++++++++++++++++++++++++++")
    print("Close database: ", _dbFile)

    try:
        _conn.close()
        print("success")
    except Error as e:
        print(e)

    print("++++++++++++++++++++++++++++++++++")

def dropTable(_conn):
    print("++++++++++++++++++++++++++++++++++")
    print("Drop tables")

    _conn.execute("BEGIN")
    try:
        sql = "DROP TABLE users"
        _conn.execute(sql)
        sql = "DROP TABLE check"
        _conn.execute(sql)
        sql = "DROP TABLE friends"
        _conn.execute(sql)

        _conn.execute("COMMIT")
        print("successfully deleted tables")
    except Error as e:
        _conn.execute("ROLLBACK")
        print(e)

    print("++++++++++++++++++++++++++++++++++")

def createTable(_conn):
    print("++++++++++++++++++++++++++++++++++")
    print("Creating tables")


    _conn.execute("BEGIN")
    try:
        sql = """CREATE TABLE users(
                    u_id INTEGER PRIMARY KEY,
                    u_username varchar(128) NOT NULL,
                    u_password varchar(128) NOT NULL,
                    u_profilepic varchar(512) NOT NULL,
                    u_firstname varchar(128) NOT NULL,
                    u_lastname varchar(128) NOT NULL)"""
        _conn.execute(sql)

        sql = """CREATE TABLE checks(
                    c_id INTEGER,
                    c_username varchar(128) NOT NULL,
                    c_date varchar(128) NOT NULL,
                    c_mood INTEGER NOT NULL,
                    c_desc varchar(512) NOT NULL,
                    c_for varchar(512),
                    c_against varchar(512),
                    c_balance varchar(512))"""
        _conn.execute(sql)

        sql = """CREATE TABLE friends(
                    f_id INTEGER,
                    f_following INTEGER NOT NULL)"""
        _conn.execute(sql)

        _conn.execute("COMMIT")
        print("successfully created tables")
    except Error as e:
        _conn.execute("ROLLBACK")
        print(e)

    print("++++++++++++++++++++++++++++++++++")


def main():
    print("passed!")
    database = r"data.sqlite"
    
    # create a database connection
    conn = openConnection(database)

    with conn:
        #Delete the tables, used if any table changes or resets are needed
        #Comment out the dropTable line if not in use

        #dropTable(conn)

        #create the tables
        createTable(conn)
        

    #remove the database connection
    closeConnection(conn, database)

if __name__ == '__main__':
    main()