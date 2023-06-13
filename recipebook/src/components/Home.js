import React from 'react';
import enakai from '../assets/enakai.JPG';

function Home() {
    return (
      <div style={styles.container}>
          <img src={enakai} alt="enakai" style={styles.image} />
          <h1 style={styles.title}>Welcome to My Recipe Book</h1>
      </div>
    );
  }
  
  const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundImage: 'url('+ enakai +')',
          backgroundSize: 'cover', // Cover the whole area with the background image
      },
      image: {
          height: '40%', // Reduced the size to be more appropriate for children
          width: '40%',  // Reduced the size to be more appropriate for children
          objectFit: 'cover',
      },
      title: {
          marginTop: '2em',
          color: '#1ecbe1', // Vibrant color
          fontFamily: 'Comic Sans MS', // Playful font
          fontSize: '28px', // Larger size for readability
      },
  };
  
  export default Home;
  