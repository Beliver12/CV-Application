import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [mail, setMail] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')

  return (
   <div id='container'>
<section className='General-section'>
<h1>General Info</h1>
<form className='General-inputs'>
  <div>
    <FullName label="First-Name" handleChange={(e) => setFirstName(e.target.value)} value={firstName}/>
    <FullName label="Last-Name" handleChange={(e) => setLastName(e.target.value)} value={lastName}/>
  </div>
  <div>
    <Email label="E-mail" handleChange={(e) => setMail(e.target.value)} value={mail}/>
  </div>
  <div>
    <PhoneNumber label="Phone-number" handleChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
  </div>
  <button>Submit</button>
</form>
<div className='General-info'>
<p>First-Name: {firstName}</p>
<p>Last-Name {lastName}</p>
<p>E-mail: {mail}</p>
<p>Phone: {phoneNumber} </p>
</div>
</section>
   </div>

  )
}

function FullName({label, handleChange, value}) {
  return (
    <label>
      {label}
      {''}
      <input type="text" 
      value={value}
      onChange={handleChange}
      />
     
    </label>
  )
}

function Email({label, handleChange, value}) {
  return (
    <label>
      {label}
      {''}
      <input type="email" 
      value={value}
      onChange={handleChange}
      />
     
    </label>
  )
}

function PhoneNumber({label, handleChange, value}) {
  return (
    <label>
      {label}
      {''}
      <input type="tel" 
      value={value}
      onChange={handleChange}
      />
     
    </label>
  )
}

export default App
