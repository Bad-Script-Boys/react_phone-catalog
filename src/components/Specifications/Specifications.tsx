import React from 'react';
import styles from './Specifications.module.scss';

const {
  specifications,
  specifications__title,
  specifications__list,
  specifications__list_item,
  specifications__list_item_name,
  specifications__list_item_value,
} = styles;

export const Specifications: React.FC = () => {
  return (
    <div className={specifications}>
      <h2 className={specifications__title}>Tech specs</h2>
      <ul className={specifications__list}>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Screen</p>
          <p
            className={specifications__list_item_value}
          >{` ${'6.5"'}${'OLED'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Resolution</p>
          <p className={specifications__list_item_value}>{`${'2688x1242'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Processor</p>
          <p
            className={specifications__list_item_value}
          >{`${'Apple A12 Bionic'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>RAM</p>
          <p className={specifications__list_item_value}>{`${'3 GB'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Built in memory</p>
          <p className={specifications__list_item_value}>{`${'64 GB'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Camera</p>
          <p
            className={specifications__list_item_value}
          >{`${'12 Mp + 12 Mp + 12 Mp (Triple)'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Zoom</p>
          <p
            className={specifications__list_item_value}
          >{`${'Optical, 2x'}`}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Cell</p>
          <p
            className={specifications__list_item_value}
          >{`${'GSM, LTE, UMTS'}`}</p>
        </li>
      </ul>
    </div>
  );
};
