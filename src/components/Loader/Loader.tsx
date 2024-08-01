import styles from './Loader.module.scss'; // Импорт SCSS модуля

export const Loader = () => {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader}></div>
    </div>
  );
};
