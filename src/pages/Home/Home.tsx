import React, { useEffect } from 'react';
import { Welcome } from '../../components/Welcome/Welcome';
import { BrandNewModels } from '../../components/BrandNewModels/BrandNewModel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPrices } from '../../components/HotPrices/HotPrices';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Welcome />
      <BrandNewModels />
      <ShopByCategory />
      <HotPrices />
    </>
  );
};

export default Home;
