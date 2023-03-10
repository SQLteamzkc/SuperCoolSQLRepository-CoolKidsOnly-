import React, {useState} from 'react'
import axios from 'axios'
import Navbar from '../Navbar';

function Read() {
    const [playerIDReg, setPlayerIDReg] = useState("")

    const [recordList, setRecordList] = useState([])

    const Read1 = () => { 
      axios.post('http://localhost:3001/read-1', {
            playerid: playerIDReg
        }).then((response) => {
            setRecordList(response.data)
        })
    };
    const Readall = () => { 
      axios.get('http://localhost:3001/read-2').then((response) => {
          setRecordList(response.data)
      });
    };

    return (
      <div className='flex justify-center w-full h-screen bg-black/75'>
        <form className='fixed top-[15vh] mt-20 max-w-3xl max-h-fit w-full text-center bg-gray-200 p-6 rounded-3xl'>
          <h1 className='font-bold text-3xl'>Look For a Record!</h1>
          <input className='border border-gray-400 block py-2 my-2 px-4 w-full rounded focus:outline-none hover:border-blue-300 focus:border-blue-600' type='text' placeholder="Player ID" onChange={(e) => setPlayerIDReg(e.target.value)}/>
           <div className=' grid-rows-2 items-center place-items-center'>
            <button type="reset" className="bg-sky-500 px-4 py-1 rounded-xl m-2 hover:bg-sky-600 border-2 border-sky-500" onClick={Read1}>Find One</button>
             <button type="button" className="bg-sky-500 px-4 py-1 rounded-xl m-2 hover:bg-sky-600 border-2 border-sky-500" onClick={Readall}>Show All Records</button>
          </div>
        </form>
        <div className="fixed top-[30vh] mt-64 bg-gray-200 rounded-3xl max-w-full">
          <div className="">
            <div className="overflow-x-scroll">
              <table className="w-full">
                <thead>
                  <tr className="text-center">
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      Player ID
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      First Name
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      Last Name
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      Phone Number
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      Discord ID
                    </th>
                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                      Esports Game
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recordList.map((val, key) => {
                    return (
                    <tr>
                      <td className="text-dark border-2 border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.PLAYER_ID}
                      </td>
                      <td className="text-dark border-2 border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.FIRST_NAME}
                      </td>
                      <td className="text-dark border-2 border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.LAST_NAME}
                      </td>
                      <td className="text-dark border-2 border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.PHONE_NUMBER}
                      </td>
                      <td className="text-dark border-2 border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.DISCORD_ID}
                      </td>
                      <td className="text-dark border-2 border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        {val.ESPORT_GAME}
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      )
    }
export default Read