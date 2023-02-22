#MySQL Python App

#Part 1
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv("creds.env")

class MyServer:

    # This creates and or connects to the server specified
    def __init__(self):

        self.connection = None

        try:
            self.connection = mysql.connector.connect(host = os.getenv("HOST"), user = os.getenv("USER"), password = os.getenv("PASS"), database = os.getenv("DB"))
            print("Connection to server successful.")

        except mysql.connector.Error as e:
            print(f"A {e} error was encountered.")

mydb = MyServer()
mycursor = mydb.connection.cursor()

# mycursor.execute('DROP TABLE PLAYERS;')
# mydb.connection.commit()

makeTable = """CREATE TABLE IF NOT EXISTS PLAYERS 
(
    PLAYER_ID int PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME text NOT NULL,
    LAST_NAME text NOT NULL,
    PHONE_NUMBER text,
    DISCORD_ID text,
    ESPORT_GAME text
);
"""

# mycursor.execute(makeTable)
# mydb.connection.commit()

createPlayer = """ INSERT INTO PLAYERS (FIRST_NAME, LAST_NAME, PHONE_NUMBER, DISCORD_ID, ESPORT_GAME) VALUES
(\'Karter\', \'Crites\', \'number\', \'TheGreatTurboski\', \'Fortnite\');
"""

# mycursor.execute(createPlayer)
# mydb.connection.commit()

sql = "UPDATE PLAYERS SET PHONE_NUMBER = \'330-333-3333\' WHERE PLAYER_ID = 2"

mycursor.execute(sql)
mydb.connection.commit()

def select(table):
    mycursor.execute(f"select * from {table};")
    
    print(mycursor.fetchall())

select("PLAYERS")

def nameSearch():
    #Get Input from User
    lastNameOrID = input("Please input a Last Name or Player ID: ")

    #If input is a string, assume its a last name and search for rows with it.
    if (type(lastNameOrID) is str):
        global mycursor
        mycursor.execute(
            f"SELECT * FROM PLAYERS WHERE LAST_NAME = {lastNameOrID}"
        )

        results = mycursor.fetchall()
        rowCount = mycursor.rowcount

        if rowCount == 0:
            print("Record Not Found.")

        elif rowCount == 1:
            print(f"1 Record Found. {results}")

        else:
            print(f"{rowCount} Records Found. {results}")
        
    #If its a integer, assume its a player id
    elif (type(lastNameOrID) is int):
        mycursor.execute(
            f"SELECT * FROM PLAYERS WHERE PLAYER_ID = {lastNameOrID}"
        )

        results = mycursor.fetchall()
        rowCount = mycursor.rowcount

        if rowCount == 0:
            print("Record Not Found.")

        elif rowCount == 1:
            print(f"1 Record Found. {results}")

        else:
            print(f"{rowCount} Records Found. {results}")
        
    else:
        print("Please Enter Last Name or ID")
        lastNameOrID = input("Please input a Last Name or Player ID ")


def deleteRecord():
    #asks Player For ID
    playerId = input("Input Player Id: ")

    #Looks for Record with ID
    mycursor.execute(
        f"SELECT * FROM PLAYERS WHERE PLAYER_ID = {playerId}"
    )

    #Gets Results and Counts true Rows
    results = mycursor.fetchall()
    rowCount = mycursor.rowcount

    if rowCount == 0:
        print("Record Not Found.")
    
    else:
        #Confirms a rsults been found and prints row
        print(f"Record Found. {results}")

        #Confirms Deletion request
        deleteOption = input("Are you sure you would like to delete this record? Y/N: ")

        if deleteOption == "Y" or deleteOption == "y":
            mycursor.execute(
                f"DELETE FROM PLAYERS WHERE PLAYER_ID = {playerId}"
            )
            mydb.connection.commit()
        
        else: 
            #Part 4 is needed first
            pass

nameSearch()
