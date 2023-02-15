
def namesearch():
    input("Please input a Last Name or Player ID ")
    if str(input) == "LAST_NAME":
        print(createPlayer)
    elif str(input) == "PHONE_NUMBER": #phone number is not a player ID
        print(createPlayer)
    else:
        input("Player Not Found, do you wish to create a new Player? Yes or No? ")
        if input == "Yes":
            namesearch()
        else:
            print("Understood.")

            #flip namesearch and the print(createPlayer)
            
#NOTE: NOT COMPLETE BECAUSE I RAN INTO THE LAST_NAME ISSUE
