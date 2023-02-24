const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    
})

app.listen(3001, () => {
    console.log("Express server running on port 3001")
})