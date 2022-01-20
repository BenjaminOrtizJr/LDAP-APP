import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {

    const initInputs = { user_name: props.user_name || "", user_email: props.user_email || "" };
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = () => {
        props.submit(inputs, props.user_id)
        setInputs(initInputs)
    }

    return (
        <div className="form__wrapper">
            <form className="form__wrapper-inputs" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    value={inputs.user_name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    value={inputs.user_email}
                    onChange={handleChange}
                />
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default Form