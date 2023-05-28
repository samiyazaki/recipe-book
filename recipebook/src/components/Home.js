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
        backgroundImage: 'url('+ enakai +')'
    },
    image: {
        height: '50%',
        width: '50%',
        objectFit: 'cover',
    },
    title: {
        marginTop: '2em',
        color: 'white',
    },
};

export default Home;
