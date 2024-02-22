import {
  BalconyIcon,
  BathIcon,
  BoxesIcon,
  ConditionerIcon,
  ElevatorIcon,
  FireIcon,
  FirewallIcon,
  FurnitureIcon,
  GarageIcon,
  ParkingIcon,
  PoolIcon,
  TvIcon,
  WaterCelsiusIcon,
  WaterIcon,
  WifiIcon,
} from "../icons/Icons";

export type TProductAddon = {
  icon: (props: string) => JSX.Element;
  name: string;
};

export const productAddonsList = [
  {
    icon: (props: string) => (
      <FurnitureIcon
        className={`${props} aspect-square [&>path]:stroke-main`}
      />
    ),
    name: "ავეჯი",
  },
  {
    icon: (props: string) => (
      <WaterIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "სასმელი წყალი",
  },
  {
    icon: (props: string) => (
      <PoolIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "აუზი",
  },
  {
    icon: (props: string) => (
      <BalconyIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "აივანი",
  },
  {
    icon: (props: string) => (
      <ConditionerIcon
        className={`${props} aspect-square [&>path]:stroke-main`}
      />
    ),
    name: "კონდიციონერი",
  },
  {
    icon: (props: string) => (
      <ParkingIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "პარკინგი",
  },
  {
    icon: (props: string) => (
      <FirewallIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "გათბობა",
  },
  {
    icon: (props: string) => (
      <WifiIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ინტერნეტი",
  },
  {
    icon: (props: string) => (
      <BathIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "სველი წერტილი 1",
  },
  {
    icon: (props: string) => (
      <ElevatorIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ლიფტი",
  },
  {
    icon: (props: string) => (
      <BoxesIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "სარდაფი",
  },
  {
    icon: (props: string) => (
      <FireIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ბუნებრივი აირი",
  },
  {
    icon: (props: string) => (
      <GarageIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "გარაჟი",
  },
  {
    icon: (props: string) => (
      <WaterCelsiusIcon className={` ${props} aspect-square `} />
    ),
    name: "ცხელი წყალი",
  },
  {
    icon: (props: string) => (
      <TvIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ტელევიზორი",
  },
];

// 0 Furniture
// 1 Water
// 2 Pool
// 3 Balcony
// 4 Conditioner
// 5 Parking
// 6 Firewall
// 7 Wifi
// 8 Bath
// 9 Elevator
// 10 Boxes
// 11 Fire
// 12 Garage
// 13 WaterCelsius
// 14 Tv
