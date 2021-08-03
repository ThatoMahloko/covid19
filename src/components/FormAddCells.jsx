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


    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(name, lastName, day, contactNumber, email, temperature, internationalTravel, symptoms, id);
        setId('');
        setName('');
        setLastName('');
        setDay('');
        setContactNumber('');
        setEmail('');
        setTemperature('');
        setInternationalTravel('');
        setSymptoms('');
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

                    <h4><label >Do you have any flulike syptoms e.g sore throat etc..?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Do you have any flulike syptoms e.g sore throat etc..?" required onChange={(e) => setSymptoms(e.target.value)} />

                    <h4><label >Do you have a sore throat ?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Do you have a sore throat ?" required onChange={(e) => setSymptoms(e.target.value)} />

                    <h4><label >Do you have a cough?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Do you have a cough?" required onChange={(e) => setSymptoms(e.target.value)} />

                    <h4><label >Do you have a shortness of breath?</label></h4>
                    <input type="text" className="form-control w-50" placeholder="Do you have a shortness of breath?" required onChange={(e) => setSymptoms(e.target.value)} />

                    <button type="submit" className="btn btn-dark mt-5 w-50 h-10">Submit</button>

                </div>
            </form>
        </div>
    )
}
export default FormAddCells