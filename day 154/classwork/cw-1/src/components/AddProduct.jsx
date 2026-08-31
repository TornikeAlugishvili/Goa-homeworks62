import { useNavigate } from "react-router-dom"
import { useState } from 'react'


function AddPrdouct() {
  const navigate = useNavigate()

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate("/")

      }}>
        <input type="text" className="border" name='username' required /><br /><br />
        <input type="number" className="border" name='number' required /><br /><br />
        <input type="url" className="border" name='pas' required /><br />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default AddPrdouct