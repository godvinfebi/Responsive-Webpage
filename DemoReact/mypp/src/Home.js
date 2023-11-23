import React from 'react';
import Footer from './Footer';

function Home() {
  const containerStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://img.freepik.com/free-vector/cyber-technology-background_23-2148390330.jpg?size=626&ext=jpg&uid=R125197363&ga=GA1.1.262808968.1697693035&semt=sph)',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    color: 'white',
    marginTop: '-15px',

      // Media queries for responsiveness
  '@media (max-width: 768px)': {
    // Adjust styles for screens up to 768px wide
    fontSize: '14px',
  },

  '@media (max-width: 576px)': {
    // Adjust styles for screens up to 576px wide
    fontSize: '12px',
  },
  };

  return (
    <div>
      <div>
        <div style={containerStyle}>
          {/* Content within the container */}

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
