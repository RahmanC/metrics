import React from 'react';
import style from './Bar.module.scss';
import { bars } from '../../data';

const Bar = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.yellow}></div>
        <div className={style.purple}></div>
        <div className={style.blue}></div>
        <div className={style.grey}></div>
      </div>

      <div className={style.bar_desc}>
        {bars.map((bar) => (
          <div className={style.parent}>
            <div
              className={style.bullet}
              style={{ backgroundColor: `${bar.color}` }}
            ></div>
            <p className={style.heading}>{bar.error}</p>
          </div>
        ))}
        {/* <div className={style.parent}>
          <div className={style.bullet_yellow}></div>
          <p className={style.heading}>Error 500: 1.256</p>
        </div>
        <div className={style.parent}>
          <div className={style.bullet_purple}></div>
          <p className={style.heading}>Error 501: 800</p>
        </div>
        <div className={style.parent}>
          <div className={style.bullet_blue}></div>
          <p className={style.heading}>Error 502: 650</p>
        </div>
        <div className={style.parent}>
          <div className={style.bullet_grey}></div>
          <p className={style.heading}>Other: 330</p>
        </div> */}
      </div>
    </>
  );
};

export default Bar;
