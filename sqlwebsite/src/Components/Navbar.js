import React from 'react'
import {Link} from 'react-router-dom'
import {FiDatabase} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center px-8 text-black bg-transparent rounded-b-2xl absolute'>
        <Link to="/">
            <h1 className='flex text-xl font-bold items-center text-[#f29111] min-w-full whitespace-nowrap'><FiDatabase className='text-[#00758f] text-3xl'/>Esports DB</h1>
        </Link>
        <ul className='flex item-center'>
            <li className='p-3 mx-1 font-semibold text-white rounded-lg'>
                <Link to="/record-create">
                Create
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold text-white rounded-lg'>
                <Link to="/record-read">
                Read
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold text-white rounded-lg'>
                <Link to="/record-update">
                Update
                </Link>
            </li>
            <li className='p-3 mx-1 font-semibold text-white rounded-lg'>
                <Link to="/record-delete">
                Delete
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar