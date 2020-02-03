import TinderCard from 'react-tinder-card';
import React from 'react';

class Swipe extends React.Component {
  render() {
    const onSwipe = direction => {
      console.log('You swiped: ' + direction);
    };

    const onCardLeftScreen = myIdentifier => {
      console.log(myIdentifier + ' left the screen');
    };

    const onCardRightScreen = myIdentifier => {
      console.log(myIdentifier + ' right the screen');
    };

    const characters = [
      {
        name: 'Richard Hendricks',
        url: process.env.PUBLIC_URL + '/images/lechef.jpg'
      },
      {
        name: 'Erlich Bachman',
        url: process.env.PUBLIC_URL + '/images/lechef.jpg'
      },
      {
        name: 'Monica Hall',
        url: process.env.PUBLIC_URL + '/images/lechef.jpg'
      },
      {
        name: 'Jared Dunn',
        url: process.env.PUBLIC_URL + '/images/lechef.jpg'
      },
      {
        name: 'Dinesh Chugtai',
        url: process.env.PUBLIC_URL + '/images/lechef.jpg'
      }
    ];

    return (
      <div className="swipe-card-box">
        <div className="cardContainer">
          {characters.map(character => (
            <TinderCard
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen('fooBar')}
              onCardRightScreen={() => onCardRightScreen('fooBar')}
              className="swipe"
              key={character.name}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className="card-tinder"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Swipe;
