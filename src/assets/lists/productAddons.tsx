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

export type TProductAddon = { icon: JSX.Element; name: string };

export const productAddonsList = [
  {
    icon: (
      <FurnitureIcon className="h-[20px] aspect-square [&>path]:stroke-main" />
    ),
    name: "ავეჯი",
  },
  {
    icon: <WaterIcon className="h-[20px] aspect-square [&>path]:stroke-main" />,
    name: "სასმელი წყალი",
  },
  {
    icon: <PoolIcon className="h-[20px] aspect-square [&>path]:fill-main" />,
    name: "აუზი",
  },
  {
    icon: (
      <BalconyIcon className="h-[20px] aspect-square [&>path]:stroke-main" />
    ),
    name: "აივანი",
  },
  {
    icon: (
      <ConditionerIcon className="h-[20px] aspect-square [&>path]:stroke-main" />
    ),
    name: "კონდიციონერი",
  },
  {
    icon: (
      <ParkingIcon className="h-[20px] aspect-square [&>path]:stroke-main" />
    ),
    name: "პარკინგი",
  },
  {
    icon: (
      <FirewallIcon className="h-[20px] aspect-square [&>path]:fill-main" />
    ),
    name: "გათბობა",
  },
  {
    icon: <WifiIcon className="h-[20px] aspect-square [&>path]:fill-main" />,
    name: "ინტერნეტი",
  },
  {
    icon: <BathIcon className="h-[20px] aspect-square [&>path]:stroke-main" />,
    name: "სველი წერტილი 1",
  },
  {
    icon: (
      <ElevatorIcon className="h-[20px] aspect-square [&>path]:fill-main" />
    ),
    name: "ლიფტი",
  },
  {
    icon: <BoxesIcon className="h-[20px] aspect-square [&>path]:stroke-main" />,
    name: "სარდაფი",
  },
  {
    icon: <FireIcon className="h-[20px] aspect-square [&>path]:fill-main" />,
    name: "ბუნებრივი აირი",
  },
  {
    icon: (
      <GarageIcon className="h-[20px] aspect-square [&>path]:stroke-main" />
    ),
    name: "გარაჟი",
  },
  {
    icon: <WaterCelsiusIcon className="h-[20px] aspect-square " />,
    name: "ცხელი წყალი",
  },
  {
    icon: <TvIcon className="h-[20px] aspect-square [&>path]:fill-main" />,
    name: "ტელევიზორი",
  },
];
