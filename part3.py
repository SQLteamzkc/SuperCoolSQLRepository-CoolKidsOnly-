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
            pass

def updateRecord():
    #asks Player For ID
    playerId = int(input("Input Player Id: "))

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

        updatesRequested = input("How many values do you need to update? Enter as an integer: ")

        try:
            int(updatesRequested) == updatesRequested
            x = "updatesRequested is a number"
        
        except ValueError:
            x = "updatesRequested isnt a number"

        if x == "updatesRequested is a number":
            for i in range(updatesRequested):

                #Asks What To Update request
                updateOptions = input("What would you like to update? ex: Phone Number, Discord ID, etc: ")

                #Updates it
                if updateOptions.lower() == "first name":
                    updatePlayerFirstName = input("Please enter players new first name: ")
                    mycursor.execute(
                        f"UPDATE PLAYERS SET FIRST_NAME = \'{str(updatePlayerFirstName)}\' WHERE PLAYER_ID = {playerId}"
                    )
                    mydb.connection.commit()

                elif updateOptions.lower() == "last name":
                    updatePlayerLastName = input("Please enter players new last name: ")
                    mycursor.execute(
                        f"UPDATE PLAYERS SET LAST_NAME = \'{str(updatePlayerLastName)}\' WHERE PLAYER_ID = {playerId}"
                    )
                    mydb.connection.commit()

                elif updateOptions.lower() == "phone number":
                    updatePlayerPhoneNumber = input("Please enter players new phone number: ")
                    mycursor.execute(
                        f"UPDATE PLAYERS SET PHONE_NUMBER = \'{str(updatePlayerPhoneNumber)}\' WHERE PLAYER_ID = {playerId}"
                    )
                    mydb.connection.commit()
                
                elif updateOptions.lower() == "discord id":
                    updatePlayerDiscordID = input("Please enter players new Discord ID: ")
                    mycursor.execute(
                        f"UPDATE PLAYERS SET DISCORD_ID = \'{str(updatePlayerDiscordID)}\' WHERE PLAYER_ID = {playerId}"
                    )
                    mydb.connection.commit()

                elif updateOptions.lower() == "esports game" or "esport game":
                    updatePlayerEsportsGame = input("Please enter players new esports game: ")
                    mycursor.execute(
                        f"UPDATE PLAYERS SET ESPORT_GAME = \'{str(updatePlayerEsportsGame)}\' WHERE PLAYER_ID = {playerId}"
                    )
                    mydb.connection.commit()

                else:
                    updateOptions = input("Thats not an update option. Try again. Ex: Phone Number, Discord ID, etc: ")
        else:
            updatesRequested = input("Thats not an integer. Try Again ")

updateRecord()