import React, { useEffect, useState } from 'react';
import styles from './leftCard.module.scss';
import { data } from '../../redux/actions/dataActions';
import { MdFilterAlt, MdTouchApp } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import arrow from './arrow1.jpeg';

const Left = ({ mode }) => {
  const [details, setDetails] = useState({
    icon: '',
    arrow: '',
    badgeColor: 'green',
    chipColor: 'green',
    yesterday: 0,
    lastFriday: 0,
  });

  useEffect(() => {
    switch (mode) {
      case 'Searches':
        data['data'].map((val) => {
          setDetails({
            icon: <MdFilterAlt color="white" className={styles.icon} />,
            badgeColor: 'green',
            chipColor: 'green',
            yesterday: val['searches_current_yesterday'],
            lastFriday: val['searches_current_last_3days'],
          });
        });
        break;

      case 'Clicks':
        data['data'].map((val) => {
          setDetails({
            icon: <MdTouchApp color="white" />,
            badgeColor: 'red',
            chipColor: 'red',
            yesterday: val['clicks_current_yesterday'],
            lastFriday: val['clicks_current_last_3days'],
          });
        });
        break;

      case 'Sales':
        data['data'].map((val) => {
          setDetails({
            icon: <FaShoppingCart color="white" />,
            badgeColor: 'green',
            chipColor: 'green',
            yesterday: val['sales_current_yesterday'],
            lastFriday: val['sales_current_last_3days'],
          });
        });
        break;

      default:
        break;
    }

    return () => {};
  }, [mode]);

  const { icon, badgeColor, chipColor, yesterday, lastFriday } = details;
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <div className={styles.badgeContainer}>
        <div>
          <div className={styles.badge}>
            {icon}
            <div
              className={styles.badgeIndicator}
              style={{ backgroundColor: badgeColor }}
            />
          </div>
        </div>
        <div>
          <div className={styles.arrow}>
            {/* <img src={arrow} alt="arrow" /> */}
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p
            className={styles.infoHeader}
            style={{ color: mode === 'Clicks' ? 'red' : 'black' }}
          >
            {mode}
          </p>
          <div className={styles.chip} style={{ backgroundColor: chipColor }}>
            +5%
          </div>
        </div>
        <div className={styles.infoRecord}>
          <span className={styles.yesterday}>{yesterday}</span>
          <span className={styles.lastFriday}>{lastFriday}</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
