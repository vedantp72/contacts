import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ContactCreate from './ContactCreate';
function ContactListing() {
    const [contdata, setContData] = useState(null);


    useEffect(() => {
        fetch("https://sheet.best/api/sheets/a2e3bed7-e455-4a76-8ff6-8cfdf21db379")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setContData(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="card-title text-center ">
                    <h3>Contact Listing</h3>
                </div>
                <div className="card-body">
                    <div>
                        <Link
                            to="contacts/create"
                            className="btn btn-success bi bi-plus-circle mb-2"
                        >
                            {" "}
                            Add New
                        </Link>
                    </div>
                    <table className="table table-bordered table-hover">
                        <thead className="bg-dark text-white">
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody className="App">
                            {contdata &&
                                contdata.map((item) => (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.msg}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ContactListing;
