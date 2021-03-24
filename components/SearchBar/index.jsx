import React from 'react';
import style from './styles.module.scss';

const SearchBar = ({ ...rest }) => {
  return (
    <div className={style.searchBar}>
      <input {...rest} className={style.searchBar__input} />
    </div>
  );
};

export default SearchBar;
