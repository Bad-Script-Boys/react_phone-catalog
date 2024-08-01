import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { Device } from '../../types/Device';
import cn from 'classnames';

const {
  gallery,
  gallery__main_pic_wrap,
  gallery__main_pic_img,
  gallery__list,
  gallery__item,
  gallery__item_pic,
} = styles;

type Props = {
  device: Device | null;
};

export const Gallery: React.FC<Props> = ({ device }) => {
  const [selectedPic, setSelectedPic] = useState(device?.images[0]);
  return (
    <div className={gallery}>
      <span className={gallery__main_pic_wrap}>
        <img className={gallery__main_pic_img} src={selectedPic} />
      </span>
      <ul className={`${gallery__list}`}>
        {device?.images.map(image => (
          <li
            className={cn(`${gallery__item}`, {
              'border-black': selectedPic === image,
            })}
            key={image}
            onClick={() => setSelectedPic(image)}
          >
            <img
              className={gallery__item_pic}
              src={image}
              alt="your_device_picture"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
