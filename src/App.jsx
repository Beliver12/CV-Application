import { useState } from 'react'
import { FullName, Email, PhoneNumber } from './general'
import { SchoolName, TitleOfStudy, DateOfStudy } from './Educational'
import './App.css'

function App() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [mail, setMail] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [generalInfo, seGeneralInfo] = useState({firstName: '',lastName: '', mail:'', phoneNumber:''})

const [schoolName, setSchoolName] = useState('')
const [titleOfStudy, settitleOfStudy] = useState('')
const [dateOfStudy, setdateOfStudy] = useState('')
const [educationInfo, setEducationInfo] = useState({name: '', title: '', date: ''})

function handleEducationalSubmit(e) {
  e.preventDefault()
  setEducationInfo({...educationInfo, name: schoolName, title: titleOfStudy, date: dateOfStudy})
  setSchoolName('')
  settitleOfStudy('')
  setdateOfStudy('')
}

function handleEducationalEdit(){
  setSchoolName(educationInfo.name)
  settitleOfStudy(educationInfo.title)
  setdateOfStudy(educationInfo.date)
}

function handleGeneralEdit(){
  setFirstName(generalInfo.firstName)
  setLastName(generalInfo.lastName)
  setMail(generalInfo.mail)
  setPhoneNumber(generalInfo.phoneNumber)
}


function handleGeneralSubmit(e) {
 e.preventDefault();
 seGeneralInfo({...generalInfo, firstName: firstName , lastName: lastName, mail: mail, phoneNumber: phoneNumber})
 setFirstName('')
 setLastName('')
 setMail('')
 setPhoneNumber('')
}

  return (
   <div id='container'>
<section className='General-section'>
<h1>General Information</h1>
<form className='General-inputs' onSubmit={handleGeneralSubmit}>
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
<p>Full-Name: {generalInfo.firstName + ' ' + generalInfo.lastName}</p>
<p>E-mail: {generalInfo.mail}</p>
<p>Phone: {generalInfo.phoneNumber} </p>
<button onClick={handleGeneralEdit}>Edit</button>
</div>
</section>

<section className='Educational-section'>

<h1>Educational expirience</h1>

<form className='General-inputs' onSubmit={handleEducationalSubmit}>
  <div>
    <SchoolName label="School-Name" handleChange={(e) => setSchoolName(e.target.value)} value={schoolName}/>
  </div>
  <div>
    <TitleOfStudy label="Title-Of-Study" handleChange={(e) => settitleOfStudy(e.target.value)} value={titleOfStudy}/>
  </div>
  <div>
    <DateOfStudy label="Date-Of-Study" handleChange={(e) => setdateOfStudy(e.target.value)} value={dateOfStudy}/>
  </div>
  <button type='submit'>Submit</button>
</form>
<div className='General-info'>
<p>School-Name: {educationInfo.name}</p>
<p>Title-Of-Study: {educationInfo.title}</p>
<p>Date-Of-Study: {educationInfo.date} </p>
<button onClick={handleEducationalEdit}>Edit</button>
</div>
</section>
   </div>

  )
}



export default App
