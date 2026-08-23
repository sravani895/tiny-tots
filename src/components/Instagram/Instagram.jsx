import React from 'react';
import './Instagram.css';

import img1 from '../../assets/arrivals/girl11.jpg';
import img2 from '../../assets/arrivals/boy1.jpg';
import img3 from '../../assets/arrivals/boy2.jpg';
import monkey from '../../assets/monkey-logo.png';
import img4 from '../../assets/arrivals/girl12.jpg';
import img5 from '../../assets/arrivals/boy3.jpg';
import img6 from '../../assets/arrivals/girl13.jpg';

const Instagram = () => {
  return (
    <section className="instagram-section">
      <div className="instagram-header">
        <h2>Follow Us On Instagram</h2>
        <h3>#TinyTotsKids</h3>
      </div>
      
      <div className="instagram-grid">
        <div className="insta-item">
          <img src={img1} alt="Instagram 1" />
        </div>
        <div className="insta-item">
          <img src={img2} alt="Instagram 2" />
        </div>
        <div className="insta-item">
          <img src={img3} alt="Instagram 3" />
        </div>
        <div className="insta-item monkey-item">
          <img src={monkey} alt="Tiny Tots Monkey" />
        </div>
        <div className="insta-item">
          <img src={img4} alt="Instagram 4" />
        </div>
        <div className="insta-item">
          <img src={img5} alt="Instagram 5" />
        </div>
        <div className="insta-item">
          <img src={img6} alt="Instagram 6" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
