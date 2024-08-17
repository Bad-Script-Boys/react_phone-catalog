import React, { useEffect, useState } from 'react';
import { Gallery } from '../Gallery';
import { Categories } from '../Categories/Categories';
import { Description } from '../Description';
import { Specifications } from '../Specifications';
import { Breadcrumbs } from '../Breadcrumbs';
import { getDevices } from '../../utils/fetchProducts';
import { Device } from '../../types/Device';
import { useLocation } from 'react-router-dom';
import { MayAlsoLike } from '../MayAlsoLike/MayAlsoLike';

export const AboutSection: React.FC = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const [loadingDevice, setLoadingDevice] = useState(true);
  const { pathname } = useLocation();

  const lastIndx = pathname.lastIndexOf('/') + 1;
  const deviceId = pathname.slice(lastIndx);
  const deviceCategory = pathname.slice(1, lastIndx - 1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  useEffect(() => {
    setLoadingDevice(true);
    getDevices(deviceCategory)
      .then(devices => {
        setDevice(devices.find((dev: Device) => dev.id === deviceId) || null);
      })
      .finally(() => setLoadingDevice(false));
  }, [deviceCategory, deviceId]);

  return (
    <div className="max-w-screen-custom-lg mx-auto">
      <div className="mt-20 p-4">
        <Breadcrumbs />
      </div>

      {!loadingDevice && (
        <>
          <div className="mt-4 p-4">
            <h1 className="font-extrabold text-4xl leading-[41px] tracking-tight mb-8 md:mb-10">
              {device?.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <Gallery device={device} />
              <Categories device={device} />
              <Description device={device} />
              <Specifications device={device} />
            </div>
          </div>
          <div className=" px-4 max-w-screen-custom-lg mx-auto grid grid-cols-1">
            <MayAlsoLike />
          </div>
        </>
      )}
    </div>
  );
};
