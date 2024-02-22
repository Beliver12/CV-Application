import { useState } from 'react'
import { FullName, Email, PhoneNumber } from './general'
import { SchoolName, TitleOfStudy, DateOfStudy } from './Educational'
import './App.css'

function App() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [mail, setMail] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')

const [schoolName, setSchoolName] = useState('')
const [titleOfStudy, settitleOfStudy] = useState('')
const [dateOfStudy, setdateOfStudy] = useState('')
const [educationInfo, setEducationInfo] = useState({name: '', title: '', date: ''})

function handleSubmit(e) {
  e.preventDefault()
  setEducationInfo({...educationInfo, name: schoolName, title: titleOfStudy, date: dateOfStudy})

}

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
<section className='Educational-section'>
<h1>General Info</h1>
<form className='General-inputs' onSubmit={handleSubmit}>
  <div>
    <SchoolName label="School-Name" handleChange={(e) => setSchoolName(e.target.value)}/>
  </div>
  <div>
    <TitleOfStudy label="Title-Of-Study" handleChange={(e) => settitleOfStudy(e.target.value)}/>
  </div>
  <div>
    <DateOfStudy label="Date-Of-Study" handleChange={(e) => setdateOfStudy(e.target.value)}/>
  </div>
  <button type='submit'>Submit</button>
</form>
<div className='General-info'>
<p>School-Name: {educationInfo.name}</p>
<p>Title-Of-Study: {educationInfo.title}</p>
<p>Date-Of-Study: {educationInfo.date} </p>
</div>
</section>
   </div>

  )
}



export default App
