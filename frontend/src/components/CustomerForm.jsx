import { useState } from 'react'

function StudentForm() {
    const [customer, setCustomer] = useState({
        name : "",
        email : ""
    });

    const handleChange = (event) => {
        setCustomer({
            ...customer,
            [event.target.name] : event.target.value
        });
    };

    const handleSummit = (event) => {
        event.preventDefault();
        console.log(customer);
    };

    return (
        <form onSubmit={handleSummit}>
            <input
                name="name"
                placeholder="Customer Name"
                value={customer.name}
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Customer Email"
                value={customer.email}
                onChange={handleChange}
            />

            <button type="submit">
                Register Customer
            </button>
        </form>
    )
}

export default StudentForm;