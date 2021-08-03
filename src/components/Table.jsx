import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import FormAddCells from './FormAddCells';
import '../App.css'

const Table = () => {
    const [cells, setCells] = useState([

    ]);
    const addEntry = (name, lastName, day, contactNumber, Email, temperature, internationalTravel, symptoms, id) => {
        setCells([...cells, { name, lastName, day, contactNumber, Email, temperature, internationalTravel, symptoms, id: uuid() }])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <FormAddCells addEntry={addEntry} />
            {cells.length == 0 ? <div> </div> : <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Day</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Temerature</th>
                        <th>International Travel</th>
                        <th>Symptoms</th>
                    </tr>
                    {cells.map(entry => {
                        return (
                            <tr key={entry.id}>
                                <td>{entry.name}</td>
                                <td>{entry.lastName}</td>
                                <td>{entry.day}</td>
                                <td>{entry.contactNumber}</td>
                                <td>{entry.Email}</td>
                                <td>{entry.temperature}</td>
                                <td>{entry.internationalTravel}</td>
                                <td>{entry.symptoms}</td>
                            </tr>
                        );
                    })}
                </thead>
            </table>}
        </div>
    )
}
export default Table
