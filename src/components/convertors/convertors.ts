export function getCurrency(id: number) {
  switch (id) {
    case 0:
      return "$";
      break;
    case 1:
      return "₾";
      break;
  }
}
export function currencyConvertor(amount: number, currency: number): number {
  const currencies = [
    { id: 0, name: "USD", convert: 2.6852533 },
    { id: 0, name: "GEL", convert: 0.37240435 },
  ];
  if (currency == 0) {
    return Math.round(amount * currencies[0].convert);
  } else if (currency == 1) {
    return Math.round(amount * currencies[1].convert);
  } else {
    return 0;
  }
}
