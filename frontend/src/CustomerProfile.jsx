function CustomerProfile() {

    const customer = {
        name: "John Smith",
        email: "john@gmail.com"
    };

    return (
        <div>
            <h2>{customer.name}</h2>
            <p>{customer.email}</p>
        </div>
    );
}

export default CustomerProfile;