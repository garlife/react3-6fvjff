import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  const element = (
    <>
      <h3>Date</h3>
      <p>{time}</p>
    </>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(() => {
  tick();
}, 10000);
