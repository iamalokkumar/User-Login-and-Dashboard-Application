import React from 'react';

const Cardviews = ({ data }) => (
  <div>
    {data.map((user, index) => (
      <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);

export default Cardviews;