import React from 'react';

export const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button style={{ padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }} onClick={onClick}>
    {children}
  </button>
);