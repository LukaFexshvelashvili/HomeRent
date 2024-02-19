import {
  ApartmentIcon,
  CommercialIcon,
  HomeIcon,
  HotelIcon,
  PlotIcon,
} from "../../../assets/icons/Icons";

export const RealEstateTypes = [
  { icon: (props: any) => <HomeIcon {...props} />, name: "კერძო სახლი" },
  { icon: (props: any) => <ApartmentIcon {...props} />, name: "კორპუსის ბინა" },
  {
    icon: (props: any) => <CommercialIcon {...props} />,
    name: "კომერციული ფართი",
  },
  { icon: (props: any) => <PlotIcon {...props} />, name: "მიწის ნაკვეთი" },
  { icon: (props: any) => <HotelIcon {...props} />, name: "სასტუმრო" },
];
