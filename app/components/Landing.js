import React from 'react';
import './css/landing.css';


export default class Landing extends React.Component {
  render() {
    return (
      <div className="box">
        <h1> <a target="_blank" href="https://www.freecodecamp.com/challenges/timestamp-microservice">Free Code Camp</a></h1>
        <h2>API project : Timestamp microservice </h2>
        <h3>Example usage:</h3>
        <p><a target="_blank" href="https://shrouded-refuge-52626.herokuapp.com/21323123123">21323123123</a></p>
        <p><a target="_blank" href="https://shrouded-refuge-52626.herokuapp.com/August%2021,%201993">August%2021,%201993</a></p>
        <p><a target="_blank" href="https://shrouded-refuge-52626.herokuapp.com/TestingRandomTextToGetNullJSON">TestingRandomTextToGetNullJSON</a></p>
      </div>
    )
  }
}
