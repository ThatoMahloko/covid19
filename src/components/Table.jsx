import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import FormAddCells from './FormAddCells';
import '../App.css'

const Table = () => {
    const [cells, setCells] = useState([

    ]);
    const addEntry = (name, lastName, day, contactNumber, Email, temperature, internationalTravel, symptoms, soreThroat, cough, shortnesOfBreath, id) => {
        setCells([...cells, { name, lastName, day, contactNumber, Email, temperature, internationalTravel, symptoms, soreThroat, cough, shortnesOfBreath, id: uuid() }])
    }
    
    const handleDelete = val =>{
        setCells(cells.filter(dataEntry => dataEntry.id !== val));        
    }

    return (
        <div style={{ textAlign: "center" }} className="">
            <FormAddCells addEntry={addEntry} />
            {cells.length === 0 ? <div> </div> : <table className="table">
                <thead className="thead-dark mt-5">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Day</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Temerature</th>
                        <th>International Travel</th>
                        <th>Symptoms</th>
                        <th>Throat</th>
                        <th>Cough</th>
                        <th>Short breath</th>
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
                                <td>{entry.soreThroat ? "yes":"no"}</td>
                                <td>{entry.cough  ? "yes":"no"}</td>
                                <td>{entry.shortnesOfBreath  ? "yes":"no"}</td>
                                <td><input type="button" className="btn  bg-dark" value="delete" onClick={()=>handleDelete(entry.id)}/></td>
                            </tr>
                        );
                    })}
                </thead>
            </table>}
        </div>
    )
}
export default Table
