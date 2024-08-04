import React from 'react';
import { Device } from '../../types/Device';

type Props = {
  device: Device | null;
};

export const Description: React.FC<Props> = ({ device }) => {
  return (
    <div className="col-span-1 custom-md:col-span-1">
      <h2 className="font-extrabold text-[22px] leading-[140%] pb-4 border-b border-[#E2E6E9]">
        About
      </h2>
      {device?.description.map(articles => (
        <div className="mb-8 mt-8" key={articles.title}>
          <h3 className="font-bold text-[20px] leading-[26px] mb-4">
            {articles.title}
          </h3>
          <article className="font-mont font-medium text-[14px] leading-[23px] text-[#89939A]">
            {articles.text}
          </article>
        </div>
      ))}
    </div>
  );
};
