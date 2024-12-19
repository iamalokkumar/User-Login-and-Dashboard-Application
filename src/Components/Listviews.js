import React from 'react';

const Listviews = ({ data }) => (
  <div>
    {data.map((user, index) => (
      <div key={index}>
        <span>{user.name}, </span>
        <span>{user.email}, </span>
      </div>
    ))}
  </div>
);

export default Listviews;