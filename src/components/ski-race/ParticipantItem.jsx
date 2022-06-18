import React, { useState, useEffect } from 'react';

export default function ParticipantItem({
  rank,
  name,
  country,
  duration,
  timeDifference,
  locationChoice,
}) {
  const [flag, setFlag] = useState('');

  const rankClass = () => {
    switch (rank) {
      case 1:
        return 'rank-1';
      case 2:
        return 'rank-2';
      case 3:
        return 'rank-3';
      default:
        break;
    }
  };

  useEffect(() => {
    if (country === 'Russia') {
      setFlag('https://countryflagsapi.com/svg/russian%20federation');
    } else if (country === 'Czech Republic') {
      setFlag('https://countryflagsapi.com/svg/czechia');
    } else {
      setFlag(`https://countryflagsapi.com/svg/${country}`);
    }
  }, [country]);

  return (
    <div className='participant-item'>
      <div
        className={`participant-rank-container ${
          locationChoice === '10km' ? rankClass() : ''
        }`}
      >
        <p>{rank ? rank : 'DNF'}</p>
      </div>
      <img
        className='participant-country-image'
        src={flag}
        alt={`Flag ${country}`}
        loading='lazy'
      />
      <p className='participant-name'>{name}</p>
      {timeDifference ? (
        <p className='participant-time'>{timeDifference}</p>
      ) : (
        <p className='participant-time finish-time'>{duration}</p>
      )}
    </div>
  );
}
