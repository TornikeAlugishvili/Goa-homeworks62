import { useNavigate } from "react-router-dom"
import { useState } from 'react'


function LoginForm() {
  const navigate = useNavigate()

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (e.target.pas.value == "12") {
          navigate("/")
        }

        else {
          alert("try other password")
        }
      }}>
        <input type="text" className="border" name='username' required /><br /><br />
        <input type="email" className="border" name='email' required /><br /><br />
        <input type="password" className="border" name='pas' required /><br />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default LoginForm