import styles from './Breadcrumbs.module.scss';
import { LuHome } from 'react-icons/lu';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
import React from 'react';

const {
  breadcrumbs,
  breadcrumbs__wrap,
  breadcrumbs__home_link,
  breadcrumbs__type_link,
  breadcrumbs__device,
  breadcrumbs__wrap_btn,
  breadcrumbs__btn,
} = styles;

export const Breadcrumbs: React.FC = () => {
  return (
    <div className={breadcrumbs}>
      <div className={breadcrumbs__wrap}>
        <a href="/" className={breadcrumbs__home_link}>
          <LuHome className="w-4 h-4 " />
        </a>
        <span>
          <GoChevronRight className="w-4 h-4 text-[#B4BDC3]" />
        </span>
        <a href="/phones" className={breadcrumbs__type_link}>
          {`${'Phones'}`}
        </a>
        <span>
          <GoChevronRight className="w-4 h-4 text-[#B4BDC3]" />
        </span>
        <p className={breadcrumbs__device}>
          {`${'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)'}`}
        </p>
      </div>
      <div className={breadcrumbs__wrap_btn}>
        <GoChevronLeft className="w-4 h-4 text-[#B4BDC3]" />
        <button className={breadcrumbs__btn}>Back</button>
      </div>
    </div>
  );
};
