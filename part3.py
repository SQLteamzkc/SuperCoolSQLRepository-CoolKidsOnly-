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
        #Confirms a results been found and prints row
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

deleteRecord()