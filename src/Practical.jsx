
function CompanyName({label, handleChange, value}) {
    return (
        <label>
          {label}
          {''}
          <input type="text" 
          value={value}
          onChange={handleChange}
          required
          />
         
        </label>
      )
}


function PositionTitle({label, handleChange, value}) {
    return (
        <label>
          {label}
          {''}
          <input type="text" 
          value={value}
          onChange={handleChange}
          required
          />
         
        </label>
      )
}


function MainResponsibillities({label, handleChange, value}) {
    return (
        <label>
          {label}
          {''}
          <textarea
          value={value}
          rows={4}
          required
          onChange={handleChange}
          />
         
        </label>
      )
}


function DateFrom({label, handleChange, value}) {
    return (
        <label>
          {label}
          {''}
          <input type="date" 
          value={value}
          onChange={handleChange}
          required
          />
         
        </label>
      )
}


function DateUntil({label, handleChange, value}) {
    return (
        <label>
          {label}
          {''}
          <input type="date" 
          value={value}
          onChange={handleChange}
          required
          />
         
        </label>
      )
}

export {CompanyName, PositionTitle, MainResponsibillities, DateFrom, DateUntil}