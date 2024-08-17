import React, { useEffect, useState } from 'react';
import { Device } from '../../types/Device';
import { useLocation } from 'react-router-dom';
import { CategoriesColors } from '../CategoriesColors';
import { CategoriesMemory } from '../CategoriesMemory';
import { CategoriesInfo } from '../CategoriesInfo';

type Props = {
  device: Device | null;
};

export const Categories: React.FC<Props> = ({ device }) => {
  const [currColor, setCurrColor] = useState('');
  const [currCapacity, setCurrCapacity] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    const pathArr = pathname.split('-');
    for (let i = 0; i < pathArr.length; i++) {
      if (
        pathArr[i].toLowerCase().includes('gb') ||
        pathArr[i].toLowerCase().includes('tb')
      ) {
        setCurrCapacity(pathArr[i].toUpperCase());
        setCurrColor(pathArr[i + 1]);
        break;
      }
      if (pathArr[i].toLowerCase().includes('mm')) {
        setCurrCapacity(pathArr[i].toLowerCase());
        if (i + 1 !== pathArr.length - 1) {
          setCurrColor(pathArr.slice(i + 1).join(' '));
        } else {
          setCurrColor(pathArr[i + 1]);
        }
        break;
      }
    }
  }, [pathname]);

  return (
    <div className="">
      <div className="">
        <CategoriesColors device={device} currColor={currColor} />

        <CategoriesMemory device={device} currCapacity={currCapacity} />

        <CategoriesInfo device={device} />
      </div>
    </div>
  );
};
