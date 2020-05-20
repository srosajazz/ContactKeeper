import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './conatctReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Mike joe',
        email: 'mjoe@gmail.com',
        phone: '111-111-1111',
        type: 'E.Bass',
      },
      {
        id: 2,
        name: 'Maie smith',
        email: 'maie@gmail.com',
        phone: '222-222-2222',
        type: 'Voice',
      },
      {
        id: 3,
        name: 'Hello kitie',
        email: 'hellokitie@gmail.com',
        phone: '333-333-3333',
        type: 'Guitar',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact


  // Delete Contact


  // Set current  Contact

  // Clear Contact

  //filter Contacts

  // Clear  filter

  return(
    <ContactContext.Provider 
    value={{
      contacts: state.contacts
    }}>
    { props.children}
    <ContactContext />
  )

}
export default ContactState;