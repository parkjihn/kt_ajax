import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Книги</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Список книг
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Добавить книгу
        </NavLink>
      </div>
    </header>
  );
};

export default Header;