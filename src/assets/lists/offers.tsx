export type TOffer = {
  id: number;
  status: number;
  name: string;
  benefits: string[];
  mainColor: string;
  secondColor: string;
  lineColor: string;
  price: number;
};

export const ActiveOffers = [
  {
    id: 0,
    status: 0,
    name: "უფასო",
    benefits: ["განთავსება საერთო სიაში"],
    mainColor: "var(--main)",

    secondColor: "var(--mainClear)",
    lineColor: "var(--mainClearActive)",
    price: 0,
  },
  {
    id: 1,
    status: 1,
    name: "VIP",
    benefits: [
      "ავტომატური განახლება",
      "სპეციალურ ადგილებზე გამოჩენა",
      "ძებნისას მაღალი რანკი",
    ],
    mainColor: "#FF9900",

    secondColor: "rgba(255, 153, 0, 0.1)",
    lineColor: "rgba(255, 153, 0, 0.3)",
    price: 2.5,
  },
  {
    id: 2,
    status: 2,
    name: "VIP+",
    benefits: [
      "ავტომატური განახლება",
      "სპეციალურ ადგილებზე გამოჩენა",
      "ძებნისას მაღალი რანკი",
      "ბარათის ფერის გამორჩევა",
      "განცხადებების დეტალურ გვერდებზე გამოჩენა",
    ],
    mainColor: "#FF003D",

    secondColor: "rgba(255, 0, 60, 0.1)",
    lineColor: "rgba(255, 0, 60, 0.3)",
    price: 4,
  },
];
