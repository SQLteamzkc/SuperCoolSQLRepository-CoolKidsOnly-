
import mysql.connector

class MyServer:

    # This creates and or connects to the server specified
    def __init__(self):

        self.connection = None

        try:
            self.connection = mysql.connector.connect(host = '192.169.144.133', user = 'jrmcctc4', password = 'mcctcrocks', database = 'jr_team_4')
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

mycursor.execute(makeTable)
mydb.connection.commit()

def createPlayer():
    print("\nLets make a new player!")
    #Gets
    newPlayerFirstName = input("Please enter players first name: ")
    newPlayerLastName = input("Please enter players last name: ")
    newPlayerPhoneNumber = input("Please enter players phone number: ")
    newPlayerDiscordID = input("Please enter players Discord ID: ")
    newPlayerVideoGame = input("Please enter players esports game: ")

    createPlayer = f""" INSERT INTO PLAYERS (FIRST_NAME, LAST_NAME, PHONE_NUMBER, DISCORD_ID, ESPORT_GAME) VALUES
    (\'{newPlayerFirstName}\', \'{newPlayerLastName}\', \'{newPlayerPhoneNumber}\', \'{newPlayerDiscordID}\', \'{newPlayerVideoGame}\');
    """
    
    mycursor.execute(createPlayer)
    mydb.connection.commit()

createPlayer()