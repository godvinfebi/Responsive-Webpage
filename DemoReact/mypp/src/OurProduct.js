// OurProduct.js
import React from 'react';
import Footer from './Footer';

function OurProduct() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#051a69', // Updated color
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    width: '100%',
  };

  const smallCardStyle = {
    flex: '1',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centering content
  };

  const bigCardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  };

  const bigCardStyle = {
    flex: '1',
    borderRadius: '8px',
    margin: '10px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centering content
  };

  const longListStyle = {
    textAlign: 'left',
    width: '80%',
    marginTop: '10px',
  };

  const headingStyle = {
    color: '#051a69', // Updated color
  };

  return (
    <div>
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Products</h2>
      <p style={{ ...subheadingStyle, color: '#051a69' }}>Discover our featured products</p>

      {/* First Small Card */}
      <div style={cardContainerStyle}>
        <div style={smallCardStyle}>
          <h3 style={headingStyle}>Product A</h3>
          <p>Description for Product A</p>
          <div style={longListStyle}>
            <h4 style={headingStyle}>List of Features:</h4>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
          </div>
        </div>

        {/* Add a gap between Product A and Product B */}
        <div style={{ width: '20px' }}></div>

        {/* Second Small Card */}
        <div style={smallCardStyle}>
          <h3 style={headingStyle}>Product B</h3>
          <p>Description for Product B</p>
          <div style={longListStyle}>
            <h4 style={headingStyle}>List of Features:</h4>
            <ul>
              <li>Feature 1 for Product B</li>
              <li>Feature 2 for Product B</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Horizontal Cards Div */}
      <div style={bigCardContainerStyle}>
        <div style={bigCardStyle}>
          <h3 style={headingStyle}>Featured Product 1</h3>
          <p>Description for Featured Product 1</p>
          <div style={longListStyle}>
            <h4 style={headingStyle}>List of Features:</h4>
            <ul>
              {[...Array(20)].map((_, index) => (
                <li key={index}>Feature {index + 1}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={bigCardStyle}>
          <h3 style={headingStyle}>Featured Product 2</h3>
          <p>Description for Featured Product 2</p>
          <div style={longListStyle}>
            <h4 style={headingStyle}>List of Features:</h4>
            <ul>
              {[...Array(20)].map((_, index) => (
                <li key={index}>Feature {index + 1}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bullet Points */}
      <div style={{ ...longListStyle, marginTop: '20px' }}>
        <h3 style={headingStyle}>Key Features:</h3>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
          <li>Point 4</li>
          {/* Add more points as needed */}
        </ul>
      </div>
     
    </div>
    <Footer />
    </div>
  );
}

export default OurProduct;
