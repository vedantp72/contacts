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
            <div className="card">
                <div className="card-title App">
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
                            <tr className="text-center text-danger">
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Message</td>
                                {/* <td>Action</td> */}
                            </tr>
                        </thead>
                        <tbody className="App">
                            {contdata &&
                                contdata.map((item) => (
                                    <tr key={item.Name}>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Message}</td>
                                        {/* <td>
                                            <a
                                                onClick={() => {
                                                    LoadDetails(item.id);
                                                }}
                                                className="btn btn-sm btn-primary bi bi-eye me-2"
                                            ></a>
                                            <a
                                                onClick={() => {
                                                    EditDetails(item.id);
                                                }}
                                                className="btn btn-sm btn-warning bi bi-pen me-2"
                                            ></a>
                                            <a
                                                onClick={() => {
                                                    DeleteDetails(item.id);
                                                }}
                                                className="btn btn-sm btn-danger bi bi-trash "
                                            ></a>
                                        </td> */}
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
