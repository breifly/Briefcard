import Cards, { Card } from 'react-swipe-card';
import React from 'react';
import '../css/Welcome.css';
const data = ['Alexandre', 'Thomas', 'Lucien'];

const Wrapper = () => {
  return (
    <Cards onEnd={() => console.log('end')} className="master-root">
      {data.map(item => (
        <Card
          key={item}
          className="child-card"
          onSwipeLeft={() => console.log('swipe left')}
          onSwipeRight={() => console.log('swipe right')}
        >
          <h2>{item}</h2>
        </Card>
      ))}
    </Cards>
  );
};

export default Wrapper;
