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
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#F5F7FA',
    },
    image: {
        width: '100%',
        height: 'calc(100vh - 56px)', // full height minus navbar height
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    title: {
        color: '#1ecbe1', 
        fontFamily: 'Playfair Display', 
        fontSize: '48px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // text shadow to make the text pop out from the image
    },
};


export default Home;
