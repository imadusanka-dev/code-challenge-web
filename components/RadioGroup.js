const RadioGroup = ({ handleRadio }) => {

  const handleRadioRange = (e) => {
    handleRadio(e.target.value);
  }

  return(
    <div className="mb-2">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="organizations" defaultChecked onClick={handleRadioRange}/>
        <label className="form-check-label" htmlFor="inlineRadio1">Organizations</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="tickets" onClick={handleRadioRange}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Tickets</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="users" onClick={handleRadioRange}/>
        <label className="form-check-label" htmlFor="inlineRadio3">Users</label>
      </div>
    </div>
  )
}

export default RadioGroup;