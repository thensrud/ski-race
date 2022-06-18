import React from 'react';
import ParticipantItem from './ParticipantItem';
import skiData from '../../data/data.json';

export default function ParticipantList({ locationChoice, onlyNorwegians }) {
  return skiData.locations[locationChoice].map((participant) => {
    if (onlyNorwegians) {
      return (
        participant.person.country === 'Norway' && (
          <ParticipantItem
            key={participant.uuid}
            uuid={participant.uuid}
            rank={participant.rank}
            name={participant.person.name}
            country={participant.person.country}
            duration={participant.duration}
            timeDifference={participant.timeDifference}
            locationChoice={locationChoice}
          />
        )
      );
    } else {
      return (
        <ParticipantItem
          key={participant.uuid}
          uuid={participant.uuid}
          rank={participant.rank}
          name={participant.person.name}
          country={participant.person.country}
          duration={participant.duration}
          timeDifference={participant.timeDifference}
          locationChoice={locationChoice}
        />
      );
    }
  });
}
