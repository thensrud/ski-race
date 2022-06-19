import React, { useState, useEffect } from 'react';

export default function ParticipantItem({
  rank,
  name,
  country,
  duration,
  timeDifference,
  locationChoice,
  shirtNumber,
  totWCupPoints,
  totNatCupPoints,
}) {
  const [flag, setFlag] = useState('');
  const [clicked, setClicked] = useState(false);

  // const handleClicked = () => {
  //   setClicked(true);
  // };

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
    <div
      className={`participant-item ${clicked ? 'item-open' : ''}`}
      onClick={() => setClicked((prevCheck) => !prevCheck)}
    >
      <div className='participant-info-container'>
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
      {clicked && (
        <div>
          <p className='participant-extra-info'>Land: {country}</p>
          <p className='participant-extra-info'>Skjortenummer: {shirtNumber}</p>
          <p className='participant-extra-info'>
            Totale verdenscuppoeng: {totWCupPoints ? totWCupPoints : '0'}
          </p>
          <p className='participant-extra-info'>
            Totale nasjonscuppoeng: {totNatCupPoints ? totNatCupPoints : '0'}
          </p>
        </div>
      )}
    </div>
  );
}
