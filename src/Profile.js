import React from 'react';
import Typical from 'react-typical';
import Button from 'react-bootstrap/Button';
import './Profile.css';

export default function Centertitle() {
    return (
        <div id="text_div center_all">
    <div className="center_all">
    <div className="profile-container"> 
      <div className="profile-parent">      
        <div className="profile-details">
          <div className="colz">
            
          </div>
          

          <div className="profile-details-name">
          
            <span className="primary-text">
              {' '}
              Hello, I am{' '}
              <span className="highlighted-text">Minxi (Michelle) Deng</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Good girl',
                    1200,
                    'Business',
                    1000,
                    'Website',
                    1000,
                    'Analyst',
                    1000,
                    'IT support',
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">I like React very much</span>
            </span>
          </div>
          <div className="profile-options">
            <Button variant="outline-success">Hire Me</Button>{' '}
              <Button variant="outline-warning">Get Resume</Button>{' '}
            
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
          
        </div>
        
      </div>
      
    </div>
  
    </div>
  </div>
    )
}
