import {
  BusStopIcon,
  ChildrenIcon,
  MarketIcon,
  MedicIcon,
  SchoolIcon,
  StadiumIcon,
  TrainIcon,
  TreeIcon,
  UniversityIcon,
} from "../icons/Icons";

export type TClosePlace = {
  icon: (props: string) => JSX.Element;
  name: string;
  color: string;
  bgColor: string;
};

export const closePlacesList = [
  {
    icon: (props: string) => <TrainIcon className={`${props} aspect-square`} />,
    name: "მეტრო",
    color: "#4E7FFF",
    bgColor: "rgba(78, 128, 255, 0.1)",
  },
  {
    icon: (props: string) => <MedicIcon className={`${props} aspect-square`} />,
    name: "აფთიაქი",
    color: "#FF2E2E",
    bgColor: "rgba(255, 46, 46, 0.1)",
  },
  {
    icon: (props: string) => (
      <MarketIcon className={`${props} aspect-square`} />
    ),
    name: "სურსათის მაღაზია",
    color: "#FF268E",
    bgColor: "rgba(255, 38, 143, 0.1)",
  },
  {
    icon: (props: string) => (
      <BusStopIcon
        className={` ${props} aspect-square [&>path]:fill-[#7700ff]`}
      />
    ),
    name: "ავტობუსის გაჩერება",
    color: "#7700ff",
    bgColor: "rgba(119, 0, 255, 0.1)",
  },
  {
    icon: (props: string) => (
      <SchoolIcon className={`${props} aspect-square`} />
    ),
    name: "სკოლა",
    color: "#00C2FF",
    bgColor: "rgba(0, 195, 255, 0.1)",
  },
  {
    icon: (props: string) => (
      <ChildrenIcon className={`${props} aspect-square`} />
    ),
    name: "ბაღი",
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.1)",
  },
  {
    icon: (props: string) => (
      <UniversityIcon className={`${props} aspect-square`} />
    ),
    name: "უნივერსიტეტი",
    color: "#0075FF",
    bgColor: "rgba(0, 119, 255, 0.1)",
  },
  {
    icon: (props: string) => (
      <StadiumIcon className={`${props} aspect-square`} />
    ),
    name: "სტადიონი",
    color: "#00C714",
    bgColor: "rgba(0, 199, 20, 0.1)",
  },
  {
    icon: (props: string) => <TreeIcon className={`${props} aspect-square`} />,
    name: "პარკი",
    color: "#00DE8E",
    bgColor: "rgba(0, 222, 141, 0.1)",
  },
];
