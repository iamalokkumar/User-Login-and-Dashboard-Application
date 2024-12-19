
import React, { useState } from 'react';
import Listviews from './Listviews';
import Cardviews from './Cardview';
import styles from '../Style';


const Dashboard = ({ userData, handleLogout }) => {
  const [view, setView] = useState('list');

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.global.h2}>Dashboard</h2>
      <div style={{display:"flex",gap:"20px"}}>
      <button onClick={handleLogout} style={styles.global.button}>Logout</button>
     
      <button onClick={() => setView(view === 'list' ? 'card' : 'list')} style={styles.global.button}>
        Toggle View
      </button>
      </div>
      {view === 'list' ? <Listviews data={userData} /> : <Cardviews data={userData} />}
    </div>
  );
};

export default Dashboard;