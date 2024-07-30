import React from 'react';
import { Welcome } from '../../components/Welcome/Welcome';
import { BrandNewModels } from '../../components/BrandNewModels/BrandNewModel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPrices } from '../../components/HotPrices/HotPrices';
import { MayAlsoLike } from '../../components/MayAlsoLike/MayAlsoLike';

const Home: React.FC = () => (
  <>
    <Welcome />
    <BrandNewModels />
    <ShopByCategory />
    <HotPrices />
    <MayAlsoLike />
  </>
);

export default Home;
