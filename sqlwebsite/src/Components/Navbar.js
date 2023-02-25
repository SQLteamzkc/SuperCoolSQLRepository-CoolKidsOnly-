import React from 'react'
import {Link} from 'react-router-dom'
import {FiDatabase} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center px-8 text-black bg-slate-100 rounded-l-2xl '>
        <Link to="/">
            <h1 className='flex text-2xl font-bold items-center text-[#f29111]'><FiDatabase className='text-[#00758f] text-4xl'/>Esports DB</h1>
        </Link>
        <ul className='flex item-center'>
            <li className='p-3 mx-1 font-semibold bg-gray-300 rounded-lg'>
                <Link to="/record-create">
                Create
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold bg-gray-300 rounded-lg'>
                <Link to="/record-read">
                Read
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold bg-gray-300 rounded-lg'>
                <Link to="/record-update">
                Update
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold bg-gray-300 rounded-lg'>
                <Link to="/record-delete">
                Delete
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar