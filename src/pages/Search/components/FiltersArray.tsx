import {
  ApartmentIcon,
  CommercialIcon,
  HomeIcon,
  HotelIcon,
  PlotIcon,
} from "../../../assets/icons/Icons";

export type TRealEstateTypes = {
  icon: (props: any) => JSX.Element;
  name: string;
  link: string;
};
export const RealEstateTypes: TRealEstateTypes[] = [
  {
    icon: (props: any) => <HomeIcon {...props} />,
    name: "სახლი/აგარაკი",
    link: "search?estate_type=0",
  },
  {
    icon: (props: any) => <ApartmentIcon {...props} />,
    name: "კორპუსის ბინა",
    link: "search?estate_type=1",
  },
  {
    icon: (props: any) => <CommercialIcon {...props} />,
    name: "კომერციული ფართი",
    link: "search?estate_type=2",
  },
  {
    icon: (props: any) => <PlotIcon {...props} />,
    name: "მიწის ნაკვეთი",
    link: "search?estate_type=3",
  },
  {
    icon: (props: any) => <HotelIcon {...props} />,
    name: "სასტუმრო",
    link: "search?estate_type=4",
  },
];
