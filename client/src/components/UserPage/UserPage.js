import React from 'react';
import FormList from '../FormList/FormList';

const UserPage = (props) => {

  const {deleteUser, editUser, users} = props
    return <div className="user-page">
        <h1 className="user-page-title">User List</h1>
        {
        users.map(user =>
          <FormList
            {...user}
            key={user.id}
            deleteUser={deleteUser}
            editUser={editUser}
        />)
      }
    </div>;
};

export default UserPage;
