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
};
export const RealEstateTypes: TRealEstateTypes[] = [
  { icon: (props: any) => <HomeIcon {...props} />, name: "კერძო სახლი" },
  { icon: (props: any) => <ApartmentIcon {...props} />, name: "კორპუსის ბინა" },
  {
    icon: (props: any) => <CommercialIcon {...props} />,
    name: "კომერციული ფართი",
  },
  { icon: (props: any) => <PlotIcon {...props} />, name: "მიწის ნაკვეთი" },
  { icon: (props: any) => <HotelIcon {...props} />, name: "სასტუმრო" },
];
