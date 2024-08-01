import React from 'react';
import styles from './About.module.scss';
import { Gallery } from '../Gallery';
import { Categories } from '../Categories';
import { Description } from '../Description';
import { Specifications } from '../Specifications';
import { Breadcrumbs } from '../Breadcrumbs';

const {
  about,
  about__content,
  about__wrap,
  about__section_title,
  about__main,
} = styles;

export const AboutSection: React.FC = () => {
  return (
    <div className={about}>
      <div className={about__content}>
        <div className="mt-20">
          <Breadcrumbs />
        </div>
        <div className={about__wrap}>
          <h1 className={about__section_title}>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h1>
          <div className={about__main}>
            <Gallery />
            <Categories />
            <Description />
            <Specifications />
          </div>
        </div>
      </div>
    </div>
  );
};
