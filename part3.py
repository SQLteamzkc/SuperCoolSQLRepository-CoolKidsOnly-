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
cursor = ""
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

mycursor.execute(makeTable)
mydb.connection.commit()

createPlayer = """ INSERT INTO PLAYERS (FIRST_NAME, LAST_NAME, PHONE_NUMBER, DISCORD_ID, ESPORT_GAME) VALUES
(\'Karter\', \'Crites\', \'number\', \'TheGreatTurboski\', \'Fortnite\');
"""

# mycursor.execute(createPlayer)
# mydb.connection.commit()

sql = "UPDATE PLAYERS SET PHONE_NUMBER = \'330-333-3333\' WHERE PLAYER_ID = 1"

mycursor.execute(sql)
mydb.connection.commit()

def select(table):
    mycursor.execute(f"select * from {table};")
    
    return mycursor.fetchall()

select("PLAYERS")


def namesearch():
    inputR = input("Please input a Last Name or Player ID : ")
    
    if inputR == "LAST_NAME":
        select("PLAYERS", inputR)
    
    elif inputR == "PLAYER_ID": 

        playerID = input('What is the player\'s ID number? : ') # Put all of this code in for the last name area and change it to fit
        
        mycursor.execute(f"select * from PLAYERS where PLAYER_ID = {playerID};")
        print(mycursor.fetchall())
    
    else: # This can become a function that gets ran after the results of mycursor.fetchall() finds nothing for the playerID
        playerR = input("Player Not Found, do you wish to create a new Player? Yes or No? ")
        if playerR == "Yes": # This needs to ask for all of the information on the player they want to add
            print(createPlayer)
        else:
            print("Understood.")

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
2
deleteRecord()