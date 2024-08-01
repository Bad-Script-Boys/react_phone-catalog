type DeviceDescription = {
  title: string;
  text: string[];
};

export interface Device {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: number[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DeviceDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
