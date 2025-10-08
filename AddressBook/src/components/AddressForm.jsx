import {useState} from "react";
import Input from "./common/Input.jsx";
import Button from "./common/Button.jsx";

function AddressForm({onAdd}) {
    const [form, setForm] = useState({firstName: "", lastName: "", phone: ""});
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.firstName.trim()) errs.firstName = "The first name is required";
        if (!form.lastName.trim()) errs.lastName = "The last name is required";
        if (!form.phone.trim()) errs.phone = "The phone is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onAdd(form);
            setForm({firstName: "", lastName: "", phone: ""});
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm({...form, firstName: e.target.value})}
                />
                {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}
            </div>
            <div>
                <Input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({...form, lastName: e.target.value})}
                />
                {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
            </div>
            <div>
                <Input
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                />
                {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
            </div>
            <Button type="submit">Add</Button>
        </form>
    );
}

export default AddressForm