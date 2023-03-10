import React, {useState, setTimeout} from 'react'
import axios from "axios"
import Navbar from '../Navbar'

function Create() {
    const [firstNameReg, setFirstNameReg] = useState("")
    const [lastNameReg, setLastNameReg] = useState("")
    const [phoneNumberReg, setPhoneNumberReg] = useState("")
    const [discordIDReg, setDiscordIDReg] = useState("")
    const [esportsGameReg, setEsportsGameReg] = useState("")

    const Create = () =>{ 
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
        <div className='flex justify-center w-full h-screen bg-black/75 min-h-0'>
            <form className='fixed top-[10vh] mt-20 max-h-fit max-w-3xl w-full text-center bg-gray-200 p-6 rounded-3xl'>
                <h1 className='font-bold text-3xl'>Create a New Record!</h1>
                <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="First Name" onChange={(e) => setFirstNameReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Last Name" onChange={(e) => setLastNameReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Phone #" onChange={(e) => setPhoneNumberReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Discord ID" onChange={(e) => setDiscordIDReg(e.target.value)}/>
                <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Esports Game" onChange={(e) => setEsportsGameReg(e.target.value)}/>
                <button type="reset" className="bg-sky-500 px-4 py-1 rounded-xl m-2 hover:bg-sky-600 border-2 border-sky-500" onClick={Create}>Create</button>
            </form>
        </div>
    )
  }

export default Create