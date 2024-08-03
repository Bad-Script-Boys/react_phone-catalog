import { useEffect, useRef } from 'react';
import styles from './NotFound.module.scss';
import astronautImage from '../../../public/img/astro.png';
import { useTheme } from '../../contexts/ThemeContext';

const NotFound = () => {
  const { theme } = useTheme();
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (starsRef.current) {
        const starsContainer = starsRef.current;
        starsContainer.innerHTML = '';

        for (let i = 0; i < 400; i++) {
          const star = document.createElement('div');
          star.className = styles.star;
          star.style.top = `${Math.random() * 200}vh`;
          star.style.left = `${Math.random() * 100}vw`;
          starsContainer.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  return (
    <div className={`${styles.notFoundWrapper} ${styles[theme]}`}>
      <div className={styles.starsContainer}>
        <div
          className={`${styles.stars} ${styles.starsMoving}`}
          ref={starsRef}
        ></div>
        <div
          className={`${styles.stars} ${styles.starsMoving}`}
          style={{ top: '100%' }}
        ></div>
      </div>
      <div
        className={styles.astronaut}
        style={{ backgroundImage: `url(${astronautImage})` }}
      ></div>
      <h1 className={styles.title}>Page Not Found</h1>
      <a className={styles.button} href="#">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
