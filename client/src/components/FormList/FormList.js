import React, {useState} from 'react';
import './FormList.css';
import Form from '../Form/Form';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

const FormList = (props) => {

    const { user_name, user_email , id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="formList__container">
            {!editToggle ?
                <>  <div className="data-view">
                    <h3 className="username">{user_name}</h3>
                    <h3 className="user-email">{user_email}</h3>
                    <div className="button-container">
                        <EditIcon style={{ color: "blue", fontSize: 20 }} className="formList__edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)} />
                        <DeleteForeverIcon style={{ color: "red", fontSize: 20 }} className="formList__delete-button" onClick={() => props.deleteUser(id)} />  
                    </div>
                    </div>
                    <hr/>
                </>
            :
                <>
                    <CloseIcon className="formList__close-button" onClick={() => setEditToggle(prevToggle => !prevToggle)} />
                    <Form
                        user_name={user_name}
                        user_email={user_email}
                        btnText="Submit Edit"
                        id={id}
                        submit={props.editUser}
                    />
                    <hr />
                </>
            }
        </div>
    )
}

export default FormList
