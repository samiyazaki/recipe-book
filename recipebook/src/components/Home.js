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
        backgroundColor: '#F5F7FA',
    },
    image: {
        height: '40%',
        width: '40%',
        objectFit: 'cover',
        marginTop: '2em'
    },
    title: {
        color: '#1ecbe1', 
        fontFamily: 'Comic Sans MS', 
        fontSize: '28px', 
    },
};

export default Home;
