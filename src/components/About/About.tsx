import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import { Gallery } from '../Gallery';
import { Categories } from '../Categories';
import { Description } from '../Description';
import { Specifications } from '../Specifications';
import { Breadcrumbs } from '../Breadcrumbs';
import { getDevices } from '../../utils/fetchProducts';
import { Device } from '../../types/Device';
import { useLocation } from 'react-router-dom';
import { MayAlsoLike } from '../MayAlsoLike/MayAlsoLike';

const {
  about,
  about__content,
  about__wrap,
  about__section_title,
  about__main,
} = styles;

export const AboutSection: React.FC = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const [loadingDevice, setLoadingDevice] = useState(true);
  const { pathname } = useLocation();

  // const {
  //   id,
  //   category,
  //   namespaceId,
  //   name: string,
  //   capacityAvailable,
  //   capacity,
  //   priceRegular,
  //   priceDiscount,
  //   colorsAvailable,
  //   color,
  //   images,
  //   description,
  //   screen,
  //   resolution,
  //   processor,
  //   ram,
  //   camera,
  //   zoom,
  //   cell,
  // } = device;

  const lastIndx = pathname.lastIndexOf('/') + 1;
  const deviceId = pathname.slice(lastIndx);
  const deviceCategory = pathname.slice(1, lastIndx - 1);

  console.log('device:', device);

  useEffect(() => {
    setLoadingDevice(true);
    getDevices(deviceCategory)
      .then(devices => {
        setDevice(devices.find((dev: Device) => dev.id === deviceId) || null);
      })
      .finally(() => setLoadingDevice(false));
  }, [pathname]);

  return (
    <div className={about}>
      <div className={about__content}>
        <div className="mt-20">
          <Breadcrumbs />
        </div>

        {!loadingDevice && (
          <>
            <div className={about__wrap}>
              <h1 className={about__section_title}>{device?.name}</h1>
              <div className={about__main}>
                <Gallery device={device} />
                <Categories device={device} />
                <Description device={device} />
                <Specifications device={device} />
              </div>
            </div>
            <MayAlsoLike />
          </>
        )}
      </div>
    </div>
  );
};
