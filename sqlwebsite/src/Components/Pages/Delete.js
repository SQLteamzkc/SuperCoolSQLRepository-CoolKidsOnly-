import React, {useState} from 'react'
import axios from 'axios';
import Navbar from '../Navbar';

function Delete() {
  const [playerIDReg, setPlayerIDReg] = useState("")

  const Delete = () => { 
    axios.post('http://localhost:3001/delete', {
          playerid: playerIDReg
      }).then((response) => {
          console.log(response)
      })
  };

  return (
    <div className='w-full h-full'>
      <Navbar />
        <body className='flex-col'>
                <form className='bg-gray-200 text-center relative px-10 py-6 my-52 max-w-3xl mx-auto rounded-3xl'>
                    <h1 className='font-bold text-3xl'>Delete a Record!</h1>
                    <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Player ID" onChange={(e) => setPlayerIDReg(e.target.value)}/>
                    <button type="button" className="bg-sky-500 px-4 py-1 rounded-xl m-2 hover:bg-sky-600 border-2 border-sky-500" onClick={Delete}>Delete</button>
                </form>
            </body>
    </div>
  )
}

export default Delete