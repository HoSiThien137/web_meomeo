import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import {faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles)

function Search() {

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] =  useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }
    return ( 
        <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                      <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                          <h4 className={cx('search-title')}>Accounts</h4>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                        </PopperWrapper>
                      </div>
                )}     
                onClickOutside={handleHideResult} 
        >
              <div className={cx('search')}>
                  <input
                    ref={inputRef   }
                    value={searchValue} 
                    placeholder='Search account and videos' 
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                  />
                  {!!searchValue && (
                    <button className={cx('clear')} 
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                  )}
                  {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                  
                      <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
              </div>
        </HeadlessTippy>
     );
}

export default Search;