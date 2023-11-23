import React from 'react';
import Footer from './Footer';


function Service() {
  const servicesData = [
    {
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
    {
      title: 'Service 11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel nisl venenatis, in varius mi ullamcorper.',
    },
  ];

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#051a69' }}>Our Services</h2>
      <p>Discover the range of services we offer to meet your needs.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {servicesData.map((service, index) => (
          <div key={index} style={{ width: '300px', ...cardStyle }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
 
    </div>
    <Footer />
    </div>
  );
}

export default Service;
