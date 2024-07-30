import React from 'react';
import styles from './Footer.module.scss';
import { FaAngleUp } from 'react-icons/fa';

const {
  footer,
  footer__content,
  footer__logo_link,
  logo_img,
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
        <a href="#" className={footer__logo_link}>
          <img
            src="img/icons/nice-gadgets-logo.svg"
            alt="NICE_GADGETS_logos"
            className={logo_img}
          />
        </a>
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
          <button className={btn_toTop}>
            <FaAngleUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
