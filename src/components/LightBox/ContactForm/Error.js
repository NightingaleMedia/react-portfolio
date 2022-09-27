import React from 'react';

const Error = ({ errors }) => {
  return (
    errors &&
    errors.map((err) => (
      <div
        style={{
          backgroundColor: 'var(--as-red)',
          color: 'white',
          fontSize: '1.25rem',
          padding: '8px',
          textAlign: 'center',
          margin: '10px 0',
        }}
      >
        {err}
      </div>
    ))
  );
};

export default Error;
