import React from 'react';

const MENU_ITEMS = ['Notes', 'Etudiants', 'Matières', 'A propos'];

function Menu({ selected, onMenuClick }) {
  return (
    <nav style={{ textAlign: 'left', margin: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {MENU_ITEMS.map((item) => (
          <li key={item} style={{ margin: '10px 0' }}>
            <button
              onClick={() => onMenuClick(item)}
              className={selected === item ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;