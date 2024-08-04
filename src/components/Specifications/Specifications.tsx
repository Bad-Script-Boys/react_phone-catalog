import React from 'react';
import { Device } from '../../types/Device';

type Props = {
  device: Device | null;
};

export const Specifications: React.FC<Props> = ({ device }) => {
  return (
    <div className="col-span-1 custom-md:col-span-1">
      <h2 className="font-extrabold text-[22px] leading-[140%] pb-4 border-b border-[#E2E6E9]">
        Tech specs
      </h2>
      <ul className="flex flex-col mt-6 space-y-2">
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Screen
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.screen}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Resolution
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.resolution}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Processor
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.processor}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            RAM
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.ram}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Built in memory
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.capacity}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Camera
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.camera}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Zoom
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.zoom}
          </p>
        </li>
        <li className="flex justify-between">
          <p className="tracking-tight font-medium text-[14px] leading-[21px] text-[#89939A]">
            Cell
          </p>
          <p className="tracking-tight font-semibold text-xs leading-[15px] text-right">
            {device?.cell.join(', ')}
          </p>
        </li>
      </ul>
    </div>
  );
};
