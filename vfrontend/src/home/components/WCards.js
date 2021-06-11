import React from 'react';
import './WCards.css';
import CardItem from './WCardItem';

function WCards() {
  return (
    <div className='cards'>
      <h1 className="cards-h">Check out our FEATURES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/admin1-img.png'
              text='Admin manages every working of a particular startup and the other roles'
              label='Admin'
              path='/'
            />
            <CardItem
              src='images/HR-img.jpg'
              text='Recruits and Assigns Projects.'
              label='HR'
              path='/hr'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/manager-img.jpg'
              text='The Project Members manage everything realated to the project given to them by the HR'
              label='Project Manager'
              path='/'
            />
            <CardItem
              src='images/member-img.jpg'
              text='The Team Members will complete their works on projects assigned by the HR and managed by the Project Manager'
              label='Team Members'
              path='/'
            />
            <CardItem
              src='images/leader-img.jpg'
              text='Team leaders will oversee and assign task to each team member'
              label='Team Leader'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WCards;
