import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  if (!users) return <div> No users. </div>;
  console.log(users);
  return (
    <div>
      {users.map((userDetail, index) => <User userDetail={userDetail} key={index} />)}
    </div>
  );
}

export default UserList;
