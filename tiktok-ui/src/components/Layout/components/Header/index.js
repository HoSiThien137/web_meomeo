import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleQuestion, faCircleXmark, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
]

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hien',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/Settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] =  useState([])
  useEffect(()=>{
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
      switch (menuItem.type){
        case 'language' :
          break;
        default:
          
      }
    }
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt='TikTok' />

        <HeadlessTippy
                visible={searchResult.length > 0}
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
        >
              <div className={cx('search')}>
                  <input placeholder='Search account and videos' spellCheck={false}/>
                  <button className={cx('clear')}>
                      <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  
                      <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
              </div>
        </HeadlessTippy>
        <div className={cx('action')}>
        {currentUser ? (
          <>
            <Tippy content="Upload video" placement='bottom'>
              <button className={cx('action-btn')}>
                <UploadIcon />
              </button>
            </Tippy>
          </>
        ) : ( 
          <>
            <Button text disabled>Upload</Button>
            <Button primary>Log in</Button>
          </>
        )}
        <Menu items={currentUser ? userMenu :MENU_ITEMS} onChange={handleMenuChange}>
          {currentUser ? (
            <Image src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/dbbefa5a69b075971d565c2932a5fc69.jpeg?lk3s=a5d48078&nonce=10928&refresh_token=0e682dd0654a9d5d58033c1d3e3896ce&x-expires=1733151600&x-signature=G4JRxclq5L3GINy6Eh53jov7%2Bg8%3D&shp=a5d48078&shcp=81f88b70"
              className={cx('user-avatar')} 
              alt="Ngô Nguyễn Diệu Hiền" 
            />
          ) : (
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          )}
        </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

