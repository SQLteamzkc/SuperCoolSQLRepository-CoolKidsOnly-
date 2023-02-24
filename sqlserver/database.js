const {createPool} = require('mysql')

const pool = createPool({
    host: "192.169.144.133",
    user: "jrmcctc4",
    password: "mcctcrocks"
})

pool.query(`SELECT * FROM jr_team_4.PLAYERS`, (err, res) =>{
    return console.log(res)
})