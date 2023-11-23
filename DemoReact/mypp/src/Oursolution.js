// Oursolution.js
import React from 'react';
import Footer from './Footer';
function Oursolution() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const headingColor = {
    color: '#051a69',
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    flex: '1',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const bottomContentStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div>
    <div style={containerStyle}>
      <h2 style={headingColor}>Our Solutions</h2>
      <p style={{ ...subheadingStyle, color: '#051a69' }}>Explore our innovative solutions below</p>

      <div style={imagesContainerStyle}>
        {/* Image 1 */}
        <div style={cardStyle}>
          <img
            src="https://img.freepik.com/premium-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg?size=626&ext=jpg&uid=R125197363&ga=GA1.1.262808968.1697693035&semt=sph"
            alt="Solution 1"
            style={imageStyle}
          />
        </div>

        {/* Image 2 */}
        <div style={cardStyle}>
          <img
            src="https://img.freepik.com/premium-photo/artificial-intelligence-with-machine-deep-learning-data-mining-other-modern-user-interface-futuristic-innovative-technologies-generative-ai_76964-17821.jpg?size=626&ext=jpg&uid=R125197363&ga=GA1.1.262808968.1697693035&semt=sph"
            alt="Solution 2"
            style={imageStyle}
          />
        </div>
      </div>

      <div style={bottomContentStyle}>
        <h3 style={headingColor}>Empowering Your Business</h3>
        <p>
          Our cutting-edge solutions are designed to empower your business and drive innovation. With a focus on technology and user experience, we deliver results that exceed expectations.
        </p>
      </div>
     
    </div>
    <Footer />
    </div>
  );
}

export default Oursolution;
