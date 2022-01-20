import React, {useState} from 'react';
import './FormList.css';
import Form from '../Form/Form';

const FormList = (props) => {

    const { user_name, user_email , id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="formList__container">
            {!editToggle ?
                <>
                    <h3>Name: {user_name}</h3>
                    <h3>Email: {user_email}</h3>
                    <button className="formList__delete-button" onClick={() => props.deleteUser(id)}>Delete</button>
                    <button className="formList__edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit </button>
                </>
            :
                <>
                    <Form
                        user_name={user_name}
                        user_email={user_email}
                        btnText="Submit Edit"
                        id={id}
                        submit={props.editUser}
                    />
                    <button className="formList__close-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}

export default FormList
