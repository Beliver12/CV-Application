
function SchoolName({label,handleChange, value }){
     
    return(
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

function TitleOfStudy({label,handleChange, value }){
     
    return(
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

function DateOfStudy({label,handleChange, value }){
     
    return(
        <label>
            {label}
            {''}
            <input type="date" 
             value={value}
             onChange={handleChange}
            />
        </label>
    )
}

export{SchoolName, TitleOfStudy, DateOfStudy}