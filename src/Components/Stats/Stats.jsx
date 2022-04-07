import React from 'react';
import Bar from '../Bar/Bar';
import style from './Stat.module.scss';

const Stats = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.parent}>
          <div className={style.bullet}></div>
          <div className={style.texts}>
            <p className={style.heading}>Errors: 0.12%</p>
            <p className={style.average}>Average: 0.11%</p>
          </div>
        </div>
        <div className={style.parent}>
          <div className={style.bullet}></div>
          <div className={style.texts}>
            <p className={style.heading}>Zeroes: 5.12%</p>
            <p className={style.average}>Average: 0.11%</p>
          </div>
        </div>
        <div className={style.parent}>
          <div className={style.bullet}></div>
          <div className={style.texts}>
            <p className={style.heading}>Timeouts: 0.12%</p>
            <p className={style.average}>Average: 0.11%</p>
          </div>
        </div>
      </div>
      <Bar />
    </>
  );
};

export default Stats;
