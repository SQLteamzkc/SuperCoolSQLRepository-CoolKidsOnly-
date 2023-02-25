const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "jrmcctc4",
    host: "192.169.144.133",
    password: "mcctcrocks",
    database: "jr_team_4",
})

app.post("/create", (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phonenum = req.body.phonenum
    const discordid = req.body.discordid
    const esportsgame = req.body.esportsgame

    db.query('INSERT INTO PLAYERS (FIRST_NAME, LAST_NAME, PHONE_NUMBER, DISCORD_ID, ESPORT_GAME) VALUES (?,?,?,?,?)', 
    [firstname, lastname, phonenum, discordid, esportsgame], 
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send('Values Inserted into Table')
        }
    })
})

app.post("/read-1", (req, res) => {
    const playerid = req.body.playerid

    db.query("SELECT * FROM `PLAYERS` WHERE PLAYER_ID = (?)", 
    [playerid], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/read-2", (req, res) => {
    db.query("SELECT * FROM PLAYERS", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post("/delete", (req, res) => {
    const playerid = req.body.playerid

    db.query("DELETE FROM `PLAYERS` WHERE PLAYER_ID = (?)", 
    [playerid], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Express server running on port 3001")
})