import React, {useState} from 'react'
import axios from 'axios'

function Signup() {
    const [emailReg, setEmailReg] = useState("")
    const [passReg, setPassReg] = useState("")

    const register = () =>{ 
        axios.post('192.169.144.133:3306/PLAYERS', {
            email: emailReg,
            password: passReg,
        }).then((response) => {
            console.log(response)
        })
    }
    return (
      <div className=''>
          <h1>Registeration</h1>
          <lable>Email</lable>
          <input type='text' onChange={(e) => setEmailReg(e.target.value)}/>
          <lable>Password</lable>
          <input type='text'onChange={(e) => setPassReg(e.target.value)}/>
          <button onClick={register}>Register</button>
      </div>
    )
  }

export default Signup