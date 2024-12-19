// src/styles.js
const styles = {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: "'Arial', sans-serif",
        backgroundColor: '#f4f7fa',
        color: '#333',
      },
      h2: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#4a90e2',
      },
      button: {
        backgroundColor: '#4a90e2',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      },
      'button:hover': {
        backgroundColor: '#357ab7',
      },
      input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px 0',
        width: '100%',
      },
      'input:focus': {
        borderColor: '#4a90e2',
        outline: 'none',
      },
      '.container': {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
      },
    },
    loginContainer: {
      width: '400px',
      margin: '100px auto',
      padding: '10px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      marginRight:"10px",
      alignItems:"center"
    },
    dashboardContainer: {
      margin: '20px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    listView: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    cardView: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
  };
  
  export default styles;
  