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

def nameSearch():
    #Get Input from User
    lastNameOrID = input("Please input a Last Name or Player ID: ")

    #If input is a string, assume its a last name and search for rows with it.
    try:
        val = int(lastNameOrID)
        mycursor.execute(
            f"SELECT * FROM PLAYERS WHERE PLAYER_ID = {val}"
        )

        results = mycursor.fetchall()
        rowCount = mycursor.rowcount

        if rowCount == 0:
            newRecord = ("Record Not Found. Would you like to create one? Y/N ")
            if newRecord.upper == "Y":
                pass #New record Function Here
            else:
                print()

        elif rowCount == 1:
            print(f"1 Record Found. {results}")

        else:
            print(f"{rowCount} Records Found. {results}")
        
    except ValueError:
        mycursor.execute(
            f"SELECT * FROM PLAYERS WHERE LAST_NAME = \'{lastNameOrID}\'"
        )

        results = mycursor.fetchall()
        rowCount = mycursor.rowcount

        if rowCount == 0:
            newRecord = ("Record Not Found. Would you like to create one? Y/N ")
            if newRecord.upper == "Y":
                pass #New record Function Here
            else:
                print()

        elif rowCount == 1:
            print(f"1 Record Found. {results}")

        else:
            print(f"{rowCount} Records Found. {results}")
        
    else:
        lastNameOrID = input("Please input a Last Name or Player ID ")

nameSearch()