import React, { useState, useEffect } from 'react';

function ObscureMarvelCharacters() {
  const [characters, setMarvelCharacters] = useState(null);

  useEffect(() => {
    if (localStorage) {
      const characters = JSON.parse(localStorage.getItem('characters'));
      if (characters) {
        setMarvelCharacters(characters);
      }
    }
  }, []);

  function resetCharacters() {
    const seedCharacterData = [
      {
        characterName: 'Hellcow',
        superPower: 'Cow with vampiric powers',
        appearances: 'Howard the Duck and Deadpool',
      },
      {
        characterName: 'Arkon The Magnificent',
        superPower: 'Similar to Conan The Barbarian',
        appearances: 'The Avengers',
      },
      {
        characterName: 'Armadillo',
        superPower: 'Armadillo DNA with claws super strength and durability',
        appearances: 'West Coast Avengers, Hydra, and Sinister 16',
      },
      {
        characterName: 'Bi-Beast',
        superPower: 'Giant android with two heads stacked on top of each other',
        appearances: 'The Hulk',
      },
      {
        characterName: 'Mr. Smile',
        superPower: ' Resembles a cross between Slenderman, The Babadook, and an Alice In Wonderland character',
        appearances: 'Dr. Strange',
      },
      {
        characterName: '3-D Man',
        superPower: "2D man imprinted on his brother's glasses",
        appearances: 'Grandmaster and Triple-Evil',
      },
      {
        characterName: 'Baron Karza',
        superPower: 'Extremely intelligent, scientific prodigy and creator of body banks',
        appearances: 'X-Men, Captain Marvel, and Iron Man',
      },
      {
        characterName: 'Mean Cuisine',
        superPower: 'Massive load of sentient vegetables',
        appearances: 'Sheeza-Hulk',
      },
      {
        characterName: 'Mortigan Goth',
        superPower: 'Immortality',
        appearances: 'Dr. Strange and Wolverine',
      },
      {
        characterName: 'Oort The Living Comet ',
        superPower: 'Literally a living comet',
        appearances: 'Solar Squadron',
      },
    ];
    setMarvelCharacters(seedCharacterData);
    if (localStorage) {
      localStorage.setItem('characters', JSON.stringify(seedCharacterData));
      console.log('seed data saved to local storage');
    }
  }

  return (
    <div className="container rounded-3">
      <h1 className="my-3">Obscure Marvel Characters</h1>
      <div className="row">
        {!characters && (
          <button className="btn btn-lg btn-primary" onClick={resetCharacters}>
            Reset and Save to Local Storage
          </button>
        )}
        {characters &&
          characters.map((character, index) => {
            return (
              <div className="col-md-12 mb-4">
                <div className="card mb-2 h-100">
                  <div className="card-body rounded-3">
                    <div className="card-title fs-2 mb-1">
                      <div className="display-6 mb-3 charName">Character Name: {character.characterName}</div>
                      <div className="mb-3">Superpower: {character.superPower}</div> Appearances:{' '}
                      {character.appearances}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ObscureMarvelCharacters;
