import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { id, name, phone, type, email } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      {/* email */}
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'>{email}</i>
          </li>
        )}
        {/* phone */}
        {phone && (
          <li>
            <i className='fas fa-phone'>{phone}</i>
          </li>
        )}
      </ul>
      {/* button */}
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

ContactItem.protoTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
