import React from 'react';
import Footer from './Footer';

function Contact() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '20px',
  };

  const imageStyle = {
    width: '50%',
    marginRight: '20px',
  };

  const formStyle = {
    width: '50%',
  };

  const buttonStyle = {
    display: 'block',
    margin: 'auto', // Center the button horizontally
    width: '100%', // Set the width to 100%
    marginTop: '20px', // Add some top margin
  };

  return (
    <div>
      <div style={containerStyle}>
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&uid=R125197363&ga=GA1.1.262808968.1697693035&semt=ais"
          alt="Contact"
          style={imageStyle}
        />
        <div style={formStyle}>
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Reach out to us!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
