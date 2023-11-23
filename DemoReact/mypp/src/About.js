import React from 'react';
import Footer from './Footer';

const About = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const columnsContainerStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px', 
  };

  const leftColumnStyle = {
    flex: '1',
    marginRight: '20px',
   
  };

  const rightColumnStyle = {
    flex: '1',
    marginTop: '80px', 
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <div style={{ ...columnsContainerStyle }}>
          <div style={{ ...leftColumnStyle }}>
            <h2>About Us</h2>
            <p>
              Welcome to our About Us page! We are a team of passionate individuals dedicated to providing valuable information and insights on various topics. Our goal is to make knowledge accessible and enjoyable for everyone.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus non ligula fringilla porttitor. Nulla facilisi. Donec aliquam urna ut dui placerat, in luctus urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor libero in ex tristique, vel luctus nisi pulvinar.
            </p>
            <p>
            Welcome to our About Us page! We are a team of passionate individuals dedicated to providing valuable information and insights on various topics. Our goal is to make knowledge accessible and enjoyable for everyone.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus non ligula fringilla porttitor. Nulla facilisi. Donec aliquam urna ut dui placerat, in luctus urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor libero in ex tristique, vel luctus nisi pulvinar.
          </p> <p>
          Welcome to our About Us page! We are a team of passionate individuals dedicated to providing valuable information and insights on various topics. Our goal is to make knowledge accessible and enjoyable for everyone.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus non ligula fringilla porttitor. Nulla facilisi. Donec aliquam urna ut dui placerat, in luctus urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor libero in ex tristique, vel luctus nisi pulvinar.
        </p> <p>
        Welcome to our About Us page! We are a team of passionate individuals dedicated to providing valuable information and insights on various topics. Our goal is to make knowledge accessible and enjoyable for everyone.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus non ligula fringilla porttitor. Nulla facilisi. Donec aliquam urna ut dui placerat, in luctus urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor libero in ex tristique, vel luctus nisi pulvinar.
      </p> <p>
      Welcome to our About Us page! We are a team of passionate individuals dedicated to providing valuable information and insights on various topics. Our goal is to make knowledge accessible and enjoyable for everyone.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus non ligula fringilla porttitor. Nulla facilisi. Donec aliquam urna ut dui placerat, in luctus urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor libero in ex tristique, vel luctus nisi pulvinar.
    </p>
    <p>
    What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
  </p>
  <p>
    Paragraphs & Topic Sentences
    A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
  </p>
          </div>
          <div style={{ ...rightColumnStyle }}>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-people-wearing-vr-glasses_23-2150394447.jpg?size=626&ext=jpg&uid=R125197363&ga=GA1.1.262808968.1697693035&semt=sph"
              alt="AI person"
              style={imageStyle}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
