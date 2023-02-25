import React, {useState} from 'react'
import axios from "axios"

function Signup() {
    const [firstNameReg, setFirstNameReg] = useState("")
    const [lastNameReg, setLastNameReg] = useState("")
    const [phoneNumberReg, setPhoneNumberReg] = useState("")
    const [discordIDReg, setDiscordIDReg] = useState("")
    const [esportsGameReg, setEsportsGameReg] = useState("")

    const register = () =>{ 
        axios.post('http://localhost:3001/create', {
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
        <body className='bg-gray-100 flex-col'>
            <form className='justify-center px-4 my-32 max-w-3xl mx-auto space-x-3'>
                <h1 className=''>Registeration</h1>
                <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="First Name" onChange={(e) => setFirstNameReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Last Name" onChange={(e) => setLastNameReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Phone #" onChange={(e) => setPhoneNumberReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Discord ID" onChange={(e) => setDiscordIDReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Esports Game" onChange={(e) => setEsportsGameReg(e.target.value)}/>
                <button onClick={register}>Register</button>
            </form>
        </body>
    )
  }

export default Signup