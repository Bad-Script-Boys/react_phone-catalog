import React from 'react';
import styles from './Footer.module.scss';
import { MainLogo } from '../ThemeIcons/MainLogo';
import { useTheme } from '../../contexts/ThemeContext';

const {
  footer,
  footer__content,
  footer__logo_wrap,
  footer__list,
  footer__item,
  footer__btn_wrap,
  btn_name,
  btn_toTop,
} = styles;
export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={footer}>
      <div className={footer__content}>
        <span className={footer__logo_wrap}>
          <MainLogo />
        </span>
        <ul className={footer__list}>
          <li className={footer__item}>
            <a
              href="#"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Github
            </a>
          </li>
          <li className={footer__item}>
            <a
              href="#"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Contacts
            </a>
          </li>
          <li className={footer__item}>
            <a
              href="#"
              className="font-extrabold text-customTextColor hover:text-black dark:text-white transition-all duration-300 dark:hover:text-[#905BFF]"
            >
              Rights
            </a>
          </li>
        </ul>
        <div className={footer__btn_wrap}>
          <p className={btn_name}>Back to top</p>
          {theme == 'light' ? (
            <button
              className={`${btn_toTop} text-[#313237] hover:border hover:text-[#E2E6E9]`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="img/icons/to-top-black.svg" alt="to-top-icon" />
            </button>
          ) : (
            <button
              className={`${btn_toTop} text-[#313237] hover:border bg-slate-600 dark:bg-[#323542] hover:text-[#E2E6E9]`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="img/icons/to-top-white.svg" alt="to-top-icon" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
