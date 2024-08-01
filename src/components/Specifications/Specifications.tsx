import React from 'react';
import styles from './Specifications.module.scss';
import { Device } from '../../types/Device';

const {
  specifications,
  specifications__title,
  specifications__list,
  specifications__list_item,
  specifications__list_item_name,
  specifications__list_item_value,
} = styles;

type Props = {
  device: Device | null;
};

export const Specifications: React.FC<Props> = ({ device }) => {
  return (
    <div className={specifications}>
      <h2 className={specifications__title}>Tech specs</h2>
      <ul className={specifications__list}>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Screen</p>
          <p className={specifications__list_item_value}>{device?.screen}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Resolution</p>
          <p className={specifications__list_item_value}>
            {device?.resolution}
          </p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Processor</p>
          <p className={specifications__list_item_value}>{device?.processor}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>RAM</p>
          <p className={specifications__list_item_value}>{device?.ram}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Built in memory</p>
          <p className={specifications__list_item_value}>{device?.capacity}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Camera</p>
          <p className={specifications__list_item_value}>{device?.camera}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Zoom</p>
          <p className={specifications__list_item_value}>{device?.zoom}</p>
        </li>
        <li className={specifications__list_item}>
          <p className={specifications__list_item_name}>Cell</p>
          <p className={specifications__list_item_value}>
            {device?.cell.join(', ')}
          </p>
        </li>
      </ul>
    </div>
  );
};
