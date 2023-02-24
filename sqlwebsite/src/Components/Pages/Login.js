import React, {useState} from 'react'

function Login() {
  const [emailReg, setEmailReg] = useState("")
  const [passReg, setPassReg] = useState("")
  return (
    <div className=''>
        <h1>Login</h1>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
        <button>Login</button>
    </div>
  )
}

export default Login