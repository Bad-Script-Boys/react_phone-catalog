import React from 'react';
import styles from './Footer.module.scss';
import { MainLogo } from '../ThemeIcons/MainLogo';
import { FaAngleUp } from 'react-icons/fa';

const {
  footer,
  footer__content,
  footer__list,
  footer__item,
  footer__link,
  footer__btn_wrap,
  btn_name,
  btn_toTop,
} = styles;

export const Footer: React.FC = () => {
  return (
    <footer className={footer}>
      <div className={footer__content}>
        <MainLogo />
        <ul className={footer__list}>
          <li className={footer__item}>
            <a href="#" className={footer__link}>
              Github
            </a>
          </li>
          <li className={footer__item}>
            <a href="#" className={footer__link}>
              Contacts
            </a>
          </li>
          <li className={footer__item}>
            <a href="#" className={footer__link}>
              Rights
            </a>
          </li>
        </ul>
        <div className={footer__btn_wrap}>
          <p className={btn_name}>Back to top</p>
          <button
            className={btn_toTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
