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
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  useEffect(()=>{
    if (!searchValue.trim()){
        setSearchResult([]);
        return;
    }
    fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less')
        .then((res) => res.json())
        .then((res) => {
            setSearchResult(res.data); 
            setLoading(false);
        })
        .catch(() => {
            setLoading(false)
        })
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
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
                          {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result}/>
                          ))}
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
                  {!!searchValue && !loading &&  (
                    <button className={cx('clear')} 
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                  )}
                  {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                  
                      <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
              </div>
        </HeadlessTippy>
     );
}

export default Search;