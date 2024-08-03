// import styles from './Loader.module.scss';

// export const Loader = () => {
//   return (
//     <div className={styles['loader-container']}>
//       <div className={styles.loader}></div>
//     </div>
//   );
// };

import styles from './Loader.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

export const Loader = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.loaderWrapper} ${styles[theme]}`}>
      <div className={styles.body}>
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={styles.base}>
          <span></span>
          <div className={styles.face}></div>
        </div>
      </div>
      <div className={styles.longfazers}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
