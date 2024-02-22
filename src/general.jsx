
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

  export {FullName, Email, PhoneNumber
}