import React from 'react';
import styles from './Description.module.scss';
import { Device } from '../../types/Device';

const {
  description,
  description__title,
  description__article,
  description__article_title,
  description__article_text,
} = styles;

type Props = {
  device: Device | null;
};

export const Description: React.FC<Props> = ({ device }) => {
  return (
    <div className={description}>
      <h2 className={description__title}>About</h2>
      {device?.description.map(articles => (
        <div className={description__article} key={articles.title}>
          <h3 className={description__article_title}>{articles.title}</h3>
          <article className={description__article_text}>
            {articles.text}
          </article>
        </div>
      ))}
    </div>
  );
};
