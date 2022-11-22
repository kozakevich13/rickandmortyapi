import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getRMdetails } from '../../helper/helper';

const CharacterDetails = () => {
  const paramValue = useParams().id;
  const api = 'https://rickandmortyapi.com/api/character/' + paramValue;
  const [characterDetails, setCharacterDetails] = useState(null);
  let locationPath = useLocation().pathname.split('/');

  // async function getCharterDetails() {
  //   const results = await fetch(api);
  //   const data = await results.json();
  //   setCharacterDetails(data);
  // }

  useEffect(() => {
    // getCharterDetails();
    console.log(locationPath[1]);
    const details = getRMdetails(locationPath[1], paramValue);
    details.then((result) => {
      setCharacterDetails(result);
      //console.log(result);
    });
    //console.log(data);
  }, []);

  return (
    <>
      <div>
        {characterDetails && (
          <div>
            <p>{characterDetails.name}</p>
            <p>{characterDetails.gender}</p>
            <p>{characterDetails.species}</p>
            <p>{characterDetails.status}</p>
            <p>
              <img src={characterDetails.image} />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CharacterDetails;
