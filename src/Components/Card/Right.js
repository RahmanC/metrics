import React, { useEffect, useState } from 'react';
import styles from './rightCard.module.scss';
import { data } from '../../redux/actions/dataActions';

const Right = ({ mode }) => {
  const [details, setDetails] = useState({
    help: [''],
    body: '',
    header1: '',
    header2: '',
  });

  useEffect(() => {
    switch (mode) {
      case 'Searches':
        data['data'].map((val) => {
          setDetails({
            header1:
              'Mobile traffic: ' + Math.floor(val['mobile_pessimizer']) + '%',
            header2: 'Web traffice: ' + Math.floor(val['web_pessimizer']) + '%',
            body: 'You get 100% on mobile and desktop devices',
            help: ['Searches', 'Pessimisation'],
          });
        });
        break;

      case 'Clicks':
        data['data'].map((val) => {
          setDetails({
            header1:
              'CTR: ' + Math.floor(val['ctr_last_3days']).toFixed(2) + '%',
            header2: null,
            body: 'Conversion from searches to clicks on all devices',
            help: ['CTR', 'Clicks'],
          });
        });
        break;

      case 'Sales':
        data['data'].map((val) => {
          setDetails({
            header1:
              'STR: ' + Math.floor(val['str_last_3days']).toFixed(2) + '%',
            header2: null,
            body: 'Conversion from clicks to bookings on all devices',
            help: ['STR', 'Bookings', 'Avg', 'Check'],
          });
        });
        break;

      default:
        break;
    }

    return () => {};
  }, [mode]);

  const { help, body, header1, header2 } = details;

  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <span>{header1}</span>
        <span>{header2}</span>
      </div>
      <div className={styles.bottom}>
        <span>{body}</span>
        <div className={styles.help}>
          Help: <span className={styles.helpText}>{help.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Right;
