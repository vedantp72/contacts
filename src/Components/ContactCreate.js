import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ContactCreate() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [validate, setValidate] = useState(false);
    const [error, setError] = useState("");
    const [style , setStyle] = useState("");

    const navigate = useNavigate();
    
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        const contdata = { name, email, phone, msg };
        // console.log(name, email, phone, isActive);

        fetch("https://sheet.best/api/sheets/a2e3bed7-e455-4a76-8ff6-8cfdf21db379", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contdata),
        })
            .then((res) => {
                alert("Contact Saved Successfully");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    

    return (
        <div className="container w-50 mt-1">
                <h4 className="text-center">Create New Contact</h4>
            <form action="" onSubmit={HandleSubmit} className="form-control">
                <dl className="">
                    
                    <dt>Name</dt>
                    <dd>
                        <input
                            required
                            className="form-control mt-2"
                            type="text"
                            onBlur={(e) => setValidate(true)}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </dd>
                    {name.length == 0 && validate && (
                        <dd className="text-danger mt-2">Name Required</dd>
                    )}
                    <dt>Email</dt>
                    <dd>
                        <input
                            required
                            className="form-control mt-2"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input
                            required
                            className="form-control mt-2"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </dd> 
                    <dt>Message</dt>
                    <dd>
                        <input
                            required
                            className="form-control mt-2"
                            type="text-area"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                    </dd>
                   
                    <button className="mt-2  btn btn-primary" type="submit">Submit</button>
                    <Link to="/" className="mt-2 mx-2 btn btn-danger">
                        Cancel
                    </Link>
                </dl>
            </form>
        </div>
    );
}

export default ContactCreate;
