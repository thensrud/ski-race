import React, { useState } from 'react';
import ParticipantList from './ParticipantList';
import skiData from '../../data/data.json';

export default function SkiRace() {
  const [locationChoice, setLocationChoice] = useState('10km');
  const [onlyNorwegians, setOnlyNorwegians] = useState(false);

  let dateParts = skiData.racedata.date.split('-');

  return (
    <section className='ski-race-main-container'>
      <div className='container-header'>
        <h1 className='main-title'>
          {skiData.racedata.competitionName} {skiData.racedata.name}
        </h1>
        <p className='race-date'>
          {`Sesong ${skiData.racedata.season} • ${
            // To customize to more common Norwegian date format:
            dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0]
          }`}
        </p>
      </div>
      <div className='distance-button-container'>
        <button
          className={`distance-button ${
            locationChoice === '10km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('10km')}
        >
          Resultat
        </button>
        <button
          className={`distance-button ${
            locationChoice === '8.1km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('8.1km')}
        >
          8.1 km
        </button>
        <button
          className={`distance-button ${
            locationChoice === '6.1km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('6.1km')}
        >
          6.1 km
        </button>
        <button
          className={`distance-button ${
            locationChoice === '5.0km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('5.0km')}
        >
          5.0 km
        </button>
        <button
          className={`distance-button ${
            locationChoice === '3.1km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('3.1km')}
        >
          3.1 km
        </button>
        <button
          className={`distance-button ${
            locationChoice === '1.1km' ? 'button-active' : ''
          }`}
          onClick={() => setLocationChoice('1.1km')}
        >
          1.1 km
        </button>
      </div>
      <div className='filter-slider-container'>
        <label className='switch'>
          <input
            onClick={() => setOnlyNorwegians((prevCheck) => !prevCheck)}
            type='checkbox'
          />
          <span className='slider'></span>
        </label>
        <p>{onlyNorwegians ? 'Viser norske' : 'Viser alle'}</p>
      </div>
      {locationChoice === '10km' ? (
        <p className='list-explainer-text'>Endelige resultater:</p>
      ) : (
        <p className='list-explainer-text'>
          Resultat etter {locationChoice.replace(/.{2}$/, ' $&')}:
        </p>
      )}
      <div className='participant-list-container'>
        <ParticipantList
          locationChoice={locationChoice}
          onlyNorwegians={onlyNorwegians}
        />
      </div>
    </section>
  );
}
