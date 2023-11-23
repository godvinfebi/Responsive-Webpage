import React from 'react';

function Footer() {
  const footerStyle = {
    width: '100%', 
    backgroundColor: '#051a69',
    color: 'white',
    textAlign: 'center',
    paddingTop: '10px',
    marginBottom: '-10px'
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
  };

  return (
    <div style={footerStyle}>
      <div style={{ maxWidth: 'auto', margin: '0 auto' }}>
        <h3 style={headingStyle}>Professional Footer</h3>
        <p style={paragraphStyle}>
          You can use this space for a brief description or any important information.
        </p>
      </div>
    </div>
  );
}

export default Footer;
