import React from 'react';
import history from '../routerHistory';

const UserDetail = ({ userDetail }) => {
  const goBack = <button onClick={() => {
      history.push('/');
    }
  }> Go Back to Users List. </button>;

  if (!userDetail) return <div> <h3>No information of the user.</h3>{goBack}</div>;
  
  const { name, email, picture, gender, location, phone} = userDetail;

  const address = address => {
  	const { street, city, state, postcode } = address;
    return (
      <div>
        <p>Address: </p>
        Street: {street}<br/>
        City: {city}<br/>
        State: {state}<br/>
        Postcode: {postcode}<br/>
      </div>
    );
  };

  return(
    <div>
      <div><img src={picture.large || picture.medium || picture.thumbnail} alt="profile of the user" /></div>
      <h3 style={{textTransform:'capitalize'}}>{name.title} {name.first} {name.last}</h3>
      <p>Gender: {gender}</p>

      <h3>Contact: </h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      {address(location)}

      <br/>
      {goBack}
    </div>
  );
};

export default UserDetail;
