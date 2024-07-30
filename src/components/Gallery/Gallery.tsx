import React from 'react';
import styles from './Gallery.module.scss';

const {
  gallery,
  gallery__main_pic_wrap,
  gallery__main_pic_img,
  gallery__list,
  gallery__item,
  gallery__item_pic,
} = styles;

export const Gallery: React.FC = () => {
  return (
    <div className={gallery}>
      <span className={gallery__main_pic_wrap}>
        <img
          className={gallery__main_pic_img}
          src="../../../src/components/Gallery/img/main-img.png"
        />
      </span>
      <ul className={gallery__list}>
        <li className={`${gallery__item} border-black`}>
          <img
            className={gallery__item_pic}
            src="../../../src/components/Gallery/img/img-00.png"
            alt="your_device_picture"
          />
        </li>
        <li className={gallery__item}>
          <img
            className={gallery__item_pic}
            src="../../../src/components/Gallery/img/img-01.png"
            alt="your_device_picture"
          />
        </li>
        <li className={gallery__item}>
          <img
            className={gallery__item_pic}
            src="../../../src/components/Gallery/img/img-02.png"
            alt="your_device_picture"
          />
        </li>
        <li className={gallery__item}>
          <img
            className={gallery__item_pic}
            src="../../../src/components/Gallery/img/img-03.png"
            alt="your_device_picture"
          />
        </li>
        <li className={gallery__item}>
          <img
            className={gallery__item_pic}
            src="../../../src/components/Gallery/img/img-04.png"
            alt="your_device_picture"
          />
        </li>
      </ul>
    </div>
  );
};
