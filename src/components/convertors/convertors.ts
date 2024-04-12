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
