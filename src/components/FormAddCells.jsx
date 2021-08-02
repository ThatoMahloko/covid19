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
        addEntry(id, name, lastName, day, contactNumber, email, temperature, internationalTravel, symptoms);
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
                    <input type="text" class="form-control w-50" required onChange={(e) => setName(e.target.value)} />

                    <h4><label >Enter LastName</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setLastName(e.target.value)} />

                    <h4><label >Enter Day</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setDay(e.target.value)} />

                    <h4><label >Enter Contact details</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setContactNumber(e.target.value)} />

                    <h4><label >Enter Email Address</label></h4>
                    <input type="email" class="form-control w-50" required onChange={(e) => setEmail(e.target.value)} />

                    <h4><label >Enter Temperature</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setTemperature(e.target.value)} />

                    <h4><label >Have you traveled internationaly in the past 30 days?</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setInternationalTravel(e.target.value)} />

                    <h4><label >Do you have any flulike syptoms e.g sore throat etc..?</label></h4>
                    <input type="text" class="form-control w-50" required onChange={(e) => setSymptoms(e.target.value)} />

                    <button type="submit" class="btn btn-dark mt-5 w-50 h-10">Submit</button>

                </div>
            </form>
        </div>
    )
}
export default FormAddCells