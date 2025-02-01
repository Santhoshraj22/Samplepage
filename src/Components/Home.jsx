import React from "react";
import "./Home.css"; 
import playImage from '../assets/play.jpeg';
import file from '../assets/file.jpg';
import office from '../assets/office.jpeg';
import salceforce from '../assets/salceforce.png';
import folder from '../assets/folder.png';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Experience the Best Software for Your Needs – Fast, Secure, and Reliable!</h2>
      
      {/* Display Image */}
      <div className="image-container">
        <img src={playImage} alt="Play" className="playimg" />
      </div>

      {/* Amount section */}
      <div className="amount">
        Just <h2>$200</h2> For <h2>100</h2> Mailboxes
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="free-download">Free Download</button>
        <button className="buy-now">
          Buy Now 75% OFF
        </button>
      </div>

      {/* Additional Images Section */}
      <div className="additional-images">
        <div>
          <img src={file} alt="File" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>

        <div>
          <img src={office} alt="Office" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>

        <div>
          <img src={salceforce} alt="Salesforce" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>

        <div>
          <img src={folder} alt="Folder" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>

        <div>
          <img src={office} alt="Office" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>

        <div>
          <img src={file} alt="File" className="headerimage" />
          <p>scelersque eleifend</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
