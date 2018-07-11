import React from 'react';

import { connect } from 'react-redux';
import history from '../routerHistory';

import { setUserDetail } from '../actions';

import './User.css';

const User = ({ userDetail, dispatch }) => {
	console.log(userDetail);
	if(!userDetail) return <div> No information of the user. </div>;
    const { name, email, picture } = userDetail;
    
    return (
      <li className='userCard' onClick={() => {
        dispatch(setUserDetail(userDetail));
        history.push('/detail');
      }}>
        <img className='img'
          src={picture.thumbnail || picture.medium || picture.large}
          alt="profile of the user"
        />
        <div className='infoWrapper'>
          <p className='name'>{name.first} {name.last}</p>
          <p className='email'>{email}</p>
        </div>
      </li>
    );
};

export default connect()(User);

