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
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter Name</label>
                    <input type="text" class="form-control" required onChange={(e) => setName(e.target.value)}/>

                    <label for="exampleInputEmail1">Enter LastName</label>
                    <input type="text" class="form-control" required onChange={(e) => setLastName(e.target.value)}/>

                    <label for="exampleInputEmail1">Enter Day</label>
                    <input type="text" class="form-control" required onChange={(e) => setDay(e.target.value)}/>

                    <label for="exampleInputEmail1">Enter Contact details</label>
                    <input type="text" class="form-control" required onChange={(e) => setContactNumber(e.target.value)}/>
                    

                    <label for="exampleInputEmail1">Enter Email Address</label>
                    <input type="text" class="form-control" required onChange={(e) => setEmail(e.target.value)}/>

                    <label for="exampleInputEmail1">Enter Temperature</label>
                    <input type="text" class="form-control" required onChange={(e) => setTemperature(e.target.value)}/>

                    <label for="exampleInputEmail1">Have you traveled internationaly in the past 30 days</label>
                    <input type="text" class="form-control" required onChange={(e) => setInternationalTravel(e.target.value)}/>

                    <label for="exampleInputEmail1">Do you have any flulike syptoms e.g sore throat etc..</label>
                    <input type="text" class="form-control" required onChange={(e) => setSymptoms(e.target.value)}/>

                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormAddCells