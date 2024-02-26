import { useState } from 'react'
import { FullName, Email, PhoneNumber } from './general'
import { SchoolName, TitleOfStudy, DateOfStudy } from './Educational'
import { CompanyName, PositionTitle, MainResponsibillities, DateFrom, DateUntil } from './Practical'
import './App.css'
import personLogo from './icons/person.svg'
import emailLogo from './icons/at-sign.svg'
import editLogo from './icons/edit.svg'
import phoneLogo from './icons/phone.svg'
import schoolLogo from './icons/school.svg'
import studyLogo from './icons/study.svg'
import dateLogo from './icons/date.svg'
import companyLogo from './icons/company.svg'
import roleLogo from './icons/role.svg'
import titleLogo from './icons/title.svg'

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

const [companyName, setCompanyName] = useState('')
const [positionTitle, setPositionTitle] = useState('')
const [mainResponsibillities, setMainResponsibillities] = useState('')
const [dateFrom, setDateFrom] = useState('')
const [dateUntil, setDateUntil] = useState('')
const [practicalExp, setPracticalExp] = useState({companyName: '', positionTitle: '', mainResponsibillities: '', dateFrom: '', 
                                                         dateUntil: ''})

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

function handlePracticalSubmit(e) {
  e.preventDefault();
  setPracticalExp({...practicalExp, companyName: companyName, positionTitle: positionTitle, mainResponsibillities: mainResponsibillities,
                                       dateFrom: dateFrom, dateUntil: dateUntil})
  setCompanyName('') 
  setPositionTitle('')
  setMainResponsibillities('')
  setDateFrom('')
  setDateUntil('')                                    
}

function handlePracticalEdit() {
  setCompanyName(practicalExp.companyName) 
  setPositionTitle(practicalExp.positionTitle)
  setMainResponsibillities(practicalExp.mainResponsibillities)
  setDateFrom(practicalExp.dateFrom)
  setDateUntil(practicalExp.dateUntil)      
}

  return (
   <div id='container'>
<section className='General-section'>
<h1>General Information</h1>
<form className='General-inputs' onSubmit={handleGeneralSubmit}>
  <div>
    <FullName label="First-Name:" handleChange={(e) => setFirstName(e.target.value)} value={firstName}/>
    <FullName label="Last-Name:" handleChange={(e) => setLastName(e.target.value)} value={lastName}/>
  </div>
  <div>
    <Email label="E-mail:" handleChange={(e) => setMail(e.target.value)} value={mail}/>
  </div>
  <div>
    <PhoneNumber label="Phone-number:" handleChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
  </div>
  <button>Submit</button>
</form>

</section>
<div className='General-info'>
<div>
  <img src={personLogo} alt="" />
  <p>Full-Name: {generalInfo.firstName + ' ' + generalInfo.lastName}</p>
</div>
<div>
  <img src={emailLogo} alt="" />
  <p>E-mail: {generalInfo.mail}</p>
</div>
<div>
  <img src={phoneLogo} alt="" />
  <p>Phone: {generalInfo.phoneNumber} </p>
</div>
<button onClick={handleGeneralEdit}><img src={editLogo} alt="" /></button>
</div>
<section className='Educational-section'>

<h1>Educational expirience</h1>

<form className='General-inputs' onSubmit={handleEducationalSubmit}>
  <div>
    <SchoolName label="School-Name:" handleChange={(e) => setSchoolName(e.target.value)} value={schoolName}/>
  </div>
  <div>
    <TitleOfStudy label="Title-Of-Study:" handleChange={(e) => settitleOfStudy(e.target.value)} value={titleOfStudy}/>
  </div>
  <div>
    <DateOfStudy label="Date-Of-Study:" handleChange={(e) => setdateOfStudy(e.target.value)} value={dateOfStudy}/>
  </div>
  <button type='submit'>Submit</button>
</form>

</section>
<div className='Educational-info'>
  <div>
    <img src={schoolLogo} alt="" />
    <p>School-Name: {educationInfo.name}</p>
  </div>
  <div>
    <img src={studyLogo} alt="" />
    <p>Title-Of-Study: {educationInfo.title}</p>
  </div>
  <div>
    <img src={dateLogo} alt="" />
    <p>Date-Of-Study: {educationInfo.date} </p>
  </div>
<button onClick={handleEducationalEdit}><img src={editLogo} alt="" /></button>
</div>

<section className='Practical-section'>
<h1>Practical Information</h1>
<form className='General-inputs' onSubmit={handlePracticalSubmit}>
  <div>
    <CompanyName label="Company-Name:" handleChange={(e) => setCompanyName(e.target.value)} value={companyName}/>
  </div>
  <div>
    <PositionTitle label="Position-Title:" handleChange={(e) => setPositionTitle(e.target.value)} value={positionTitle}/>
  </div>
  <div>
    <MainResponsibillities label="Main-Responsibillities:" handleChange={(e) => setMainResponsibillities(e.target.value)} value={mainResponsibillities}/>
  </div>
  <div>
    <DateFrom label="Date-From:" handleChange={(e) => setDateFrom(e.target.value)} value={dateFrom}/>
  </div>
  <div>
    <DateUntil label="Date-Until:" handleChange={(e) => setDateUntil(e.target.value)} value={dateUntil}/>
  </div>
  <button>Submit</button>
</form>

</section>
<div className='Practical-info'>
  <div>
    <img src={companyLogo} alt="" />
    <p>Company-Name: {practicalExp.companyName}</p>
  </div>
  <div>
    <img src={titleLogo} alt="" />
    <p>Position-Title: {practicalExp.positionTitle}</p>
  </div>
  <div>
    <img src={roleLogo} alt="" />
    <p>Main-Responsibillities: {practicalExp.mainResponsibillities} </p>
  </div>
  <div>
    <img src={dateLogo} alt="" />
    <p>Date-From: {practicalExp.dateFrom}</p>
  </div>
<div>
  <img src={dateLogo} alt="" />
  <p>Date-Until: {practicalExp.dateUntil}</p>
</div>
<button onClick={handlePracticalEdit}><img src={editLogo} alt="" /></button>
</div>
<h1 className='Header'>CV-APP</h1>
   </div>

  )
}



export default App
