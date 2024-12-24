import React from 'react';

function Menu() {
  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <nav style={{ textAlign: 'left', margin: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {['Notes', 'Etudiants', 'Matières', 'A propos'].map((item) => (
          <li key={item} style={{ margin: '10px 0' }}>
            <button onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;