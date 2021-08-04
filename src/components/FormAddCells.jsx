import React, { useState } from 'react'

const FormAddCells = ({ addEntry }) => {


    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [day, setDay] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [temperature, setTemperature] = useState('');
    const [internationalTravel, setInternationalTravel] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [soreThroat, setSoreThroat] = useState('');
    const [cough, setCough] = useState('');
    const [shortnesOfBreath, setShortnessOfBreath] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(name, lastName, day, contactNumber, email, temperature, internationalTravel, symptoms, soreThroat, cough, shortnesOfBreath, id);
        setId('');
        setName('');
        setLastName('');
        setDay('');
        setContactNumber('');
        setEmail('');
        setTemperature('');
        setInternationalTravel('');
        setSymptoms('');
        setSoreThroat('');
        setCough('');
        setShortnessOfBreath('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div >
                    <h4><label >Enter Name</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />

                    <h4><label >Enter LastName</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Enter LastName" required onChange={(e) => setLastName(e.target.value)} />

                    <h4><label >Enter Day</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Enter Day" required onChange={(e) => setDay(e.target.value)} />

                    <h4><label >Enter Contact details</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Enter Contact details" required onChange={(e) => setContactNumber(e.target.value)} />

                    <h4><label >Enter Email Address</label></h4>
                    <input type="email" className="form-control w-50" placeholder="Enter Email Address" required onChange={(e) => setEmail(e.target.value)} />

                    <h4><label >Enter Temperature</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Enter Temperature" required onChange={(e) => setTemperature(e.target.value)} />

                    <h4><label >Have you traveled internationaly in the past 30 days?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Have you traveled internationaly in the past 30 days?" required onChange={(e) => setInternationalTravel(e.target.value)} />

                    <h4><label >Do you have any flulike symptoms?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Do you have any flulike symptoms?" required onChange={(e) => setSymptoms(e.target.checked)} />

                    <div className="container mt-5" style={{textAlign:"left", marginLeft:"40%"}}>
                    <div className="form-check">
                        <input className="form-check-input" value="yes" type="checkbox" name="soreThroatY" checked={soreThroat} onChange={(e)=> setSoreThroat(e.target.checked)}/>
                        <label className="form-check-label">
                            <h4>Do you have a sore throat?</h4>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" value="yes" type="checkbox" name="cough" checked={cough} onChange={(e)=> setCough(e.target.checked)}/>
                        <label className="form-check-label">
                            <h4>Do you have a cough?</h4>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" value="yes" type="checkbox" name="shortBreath" checked={shortnesOfBreath} onChange={(e)=> setShortnessOfBreath(e.target.checked)}/>
                        <label className="form-check-label">
                            <h4>Do you have a shortness of breath?</h4>                            
                        </label>
                    </div>
                    </div>

                    <button type="submit" className="btn btn-dark mt-5 w-50 h-10">Submit</button>

                </div>
            </form>
        </div>
    )
}
export default FormAddCells