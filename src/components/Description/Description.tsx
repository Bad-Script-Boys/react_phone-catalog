import React from 'react';
import styles from './Description.module.scss';

const {
  description,
  description__title,
  description__general,
  description__general_title,
  description__general_article,
  description__camera,
  description__camera_title,
  description__camera_article,
  description__additional,
  description__additional_title,
  description__additional_article,
} = styles;

export const Description: React.FC = () => {
  return (
    <div className={description}>
      <h2 className={description__title}>About</h2>
      <div className={description__general}>
        <h3 className={description__general_title}>And then there was Pro</h3>
        <article className={description__general_article}>
          A transformative triple‑camera system that adds tons of capability
          without complexity.
          <br />
          <br />
          An unprecedented leap in battery life. And a mind‑blowing chip that
          doubles down on machine learning and pushes the boundaries of what a
          smartphone can do. Welcome to the first iPhone powerful enough to be
          called Pro.
        </article>
      </div>
      <div className={description__camera}>
        <h3 className={description__camera_title}>Camera</h3>
        <article className={description__camera_article}>
          Meet the first triple‑camera system to combine cutting‑edge technology
          with the legendary simplicity of iPhone. Capture up to four times more
          scene. Get beautiful images in drastically lower light. Shoot the
          highest‑quality video in a smartphone — then edit with the same tools
          you love for photos. You’ve never shot with anything like it.
        </article>
      </div>
      <div className={description__additional}>
        <h3 className={description__additional_title}>
          Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
          Love&nbsp;it.
        </h3>
        <article className={description__additional_article}>
          iPhone 11 Pro lets you capture videos that are beautifully true to
          life, with greater detail and smoother motion. Epic processing power
          means it can shoot 4K video with extended dynamic range and cinematic
          video stabilization — all at 60 fps. You get more creative control,
          too, with four times more scene and powerful new editing tools to play
          with.
        </article>
      </div>
    </div>
  );
};
