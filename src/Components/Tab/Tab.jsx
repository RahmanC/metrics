import React, { useState } from 'react';
import Card from '../Card';
import Stats from '../Stats/Stats';
import style from './Tab.module.scss';

const Tab = () => {
  const [tab, setTab] = useState('Yesterday');
  return (
    <div className={style.main}>
      <div className={style.header}>
        <span
          onClick={() => setTab('LastHour')}
          className={
            tab === 'LastHour' ? `${style.active}` : `${style.inactive}`
          }
        >
          Last hour
        </span>
        <span
          onClick={() => setTab('Today')}
          className={tab === 'Today' ? `${style.active} ` : `${style.inactive}`}
        >
          Today
        </span>
        <span
          onClick={() => setTab('Yesterday')}
          className={
            tab === 'Yesterday' ? `${style.active} ` : `${style.inactive}`
          }
        >
          Yesterday
        </span>
        <span
          onClick={() => setTab('lastDay')}
          className={
            tab === 'LastDay' ? `${style.active}` : `${style.inactive}`
          }
        >
          Last 3 days
        </span>
      </div>

      <Stats />

      {tab === 'Yesterday' && (
        <div>
          <Card />
        </div>
      )}
      {tab === 'Today' && <div>{/* <h2>yesterday</h2> */}</div>}
      {tab === 'LastDay' && <div>{/* <h2>yesterday</h2> */}</div>}
      {tab === 'LastHour' && <div>{/* <h2>yesterday</h2> */}</div>}
    </div>
  );
};

export default Tab;
