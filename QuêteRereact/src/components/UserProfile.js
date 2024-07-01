import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  return (
    <>
      <div>{isOnline ? 'En ligne' : 'Hors ligne'}</div>
      <button onClick={() => setIsOnline(!isOnline)}>
        {isOnline ? 'Passer hors ligne' : 'Passer en ligne'}
      </button>
    </>
  );
}

export default UserProfile;