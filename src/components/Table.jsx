import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import FormAddCells from './FormAddCells';


const Table = () => {
    const [cells, setCells] = useState([
        { name: '', lastName: '', day: '', contactNumber: '', Email: '',temperature:'',internationalTravel:'', symptoms:''  id: 0 }
    ]);
    const addEntry = (name, lastName, day, contactNumber, Email, id) => {
        setCells([...cells, { name, lastName, day, contactNumber, Email, id: uuid() }])
    }

    return (
        <div>
            <table>
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Day</th>
                        <th scope="col">Contact number</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {cells.map(entry => {
                        return (
                            <tr>
                                <th scope="row">{entry.id}</th>
                                <th>{entry.name}</th>
                                <th>{entry.lastName}</th>
                                <th>{entry.day}</th>
                                <th>{entry.contactNumber}</th>
                                <th>{entry.Email}</th>
                            </tr>

                        )
                    })}

                </tbody>
            </table>

            <FormAddCells addEntry={addEntry}/>
        </div>
    )
}
export default Table
