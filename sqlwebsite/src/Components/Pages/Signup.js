import React, {useState} from 'react'
import axios from 'axios'

function Signup() {
    const [firstNameReg, setFirstNameReg] = useState("")
    const [lastNameReg, setLastNameReg] = useState("")
    const [phoneNumberReg, setPhoneNumberReg] = useState("")
    const [discordIDReg, setDiscordIDReg] = useState("")
    const [esportsGameReg, setEsportsGameReg] = useState("")

    const register = () =>{ 
        axios.post('192.169.144.133:3306/PLAYERS', {
            firstname: firstNameReg,
            lastname: lastNameReg,
            phonenum: phoneNumberReg,
            discordid: discordIDReg,
            esportsgame: esportsGameReg 
        }).then((response) => {
            console.log(response)
        })
    }
    return (
      <div className=''>
          <h1>Registeration</h1>
          <input type='text' placeholder="First Name" onChange={(e) => setFirstNameReg(e.target.value)}/>
          <input type='text' placeholder="Last Name" onChange={(e) => setLastNameReg(e.target.value)}/>
          <input type='text' placeholder="Phone #" onChange={(e) => setPhoneNumberReg(e.target.value)}/>
          <input type='text' placeholder="Discord ID" onChange={(e) => setDiscordIDReg(e.target.value)}/>
          <input type='text' placeholder="Esports Game" onChange={(e) => setEsportsGameReg(e.target.value)}/>
          <button onClick={register}>Register</button>
      </div>
    )
  }

export default Signup