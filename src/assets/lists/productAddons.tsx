import {
  AcceptedIcon,
  BalconyIcon,
  BoxesIcon,
  ConditionerIcon,
  ElevatorIcon,
  FireIcon,
  FirewallIcon,
  FurnitureIcon,
  GarageIcon,
  HomeIcon,
  ParkingIcon,
  PoolIcon,
  RoadIcon,
  SplitIcon,
  TvIcon,
  WaterCelsiusIcon,
  WaterIcon,
  WifiIcon,
  ZapIcon,
} from "../icons/Icons";

export const projectDealTypes = [
  "იყიდება",
  "ქირავდება",
  "ქირავდება დღიურად",
  "გირავდება",
];
export const projectTypes = [
  "ლენინგრადის",
  "ლვოვის",
  "კიევი",
  "თბილისური ეზო",
  "მოსკოვის",
  "ქალაქური",
  "ჩეხური",
  "ხრუშოვის",
  "თუხარელის",
  "ვეძისი",
  "იუგოსლავიის",
  "მეტრომშენის",
  "არასტანდარტული",
  "ყავლაშვილის",
];

export const projectStatuses = [
  "ახალი გარემონტებული",
  "მიმდინარე რემონტი",
  "სარემონტო",
  "ძველი გარემონტებული",
  "თეთრი კარკასი",
  "შავი კარკასი",
  "მწვანე კარკასი",
];

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
    name: "წყალი",
  },
  {
    icon: (props: string) => (
      <WaterIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "კანალიზაცია",
  },
  {
    icon: (props: string) => (
      <PoolIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ღია აუზი",
  },
  {
    icon: (props: string) => (
      <PoolIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "დახურული აუზი",
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
      <ElevatorIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "სატვირთო ლიფტი",
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
    name: "ავტოფარეხი",
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
export const productAddonsListForHotel = [
  {
    icon: (props: string) => (
      <PoolIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ღია აუზი",
  },
  {
    icon: (props: string) => (
      <PoolIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "დახურული აუზი",
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
      <ElevatorIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ლიფტი",
  },
  {
    icon: (props: string) => (
      <FireIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ბუნებრივი აირი",
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
  {
    icon: () => <></>,
    name: "სპა",
  },
  {
    icon: () => <></>,
    name: "სამრეცხაო",
  },
  {
    icon: () => <></>,
    name: "გათბობა",
  },
  {
    icon: () => <></>,
    name: "ბარი",
  },
  {
    icon: () => <></>,
    name: "სპორტ დარბაზი",
  },
  {
    icon: () => <></>,
    name: "მარანი",
  },
  {
    icon: () => <></>,
    name: "სიგნალიზაცია",
  },
];
export const productAddonsListForLand = [
  {
    icon: (props: string) => (
      <SplitIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "შესაძლებელია გაყოფა",
  },
  {
    icon: (props: string) => (
      <WaterIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "წყალი",
  },
  {
    icon: (props: string) => (
      <WaterIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "კანალიზაცია",
  },
  {
    icon: (props: string) => (
      <FireIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "ბუნებრივი აირი",
  },

  {
    icon: (props: string) => (
      <ZapIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "ელექტროენერგია",
  },
  {
    icon: (props: string) => (
      <HomeIcon className={`${props} aspect-square [&>path]:fill-main`} />
    ),
    name: "შენობა-ნაგებობით",
  },

  {
    icon: (props: string) => (
      <RoadIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "ასფალტის გზა",
  },
  {
    icon: (props: string) => (
      <AcceptedIcon className={`${props} aspect-square [&>path]:stroke-main`} />
    ),
    name: "დამტკიცებული პროექტით",
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
