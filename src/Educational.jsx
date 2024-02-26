
function SchoolName({label,handleChange, value }){
     
    return(
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

function TitleOfStudy({label,handleChange, value }){
     
    return(
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

function DateOfStudy({label,handleChange, value }){
     
    return(
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

export{SchoolName, TitleOfStudy, DateOfStudy}