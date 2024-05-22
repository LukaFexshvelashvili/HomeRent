import { useEffect, useRef } from "react";

export function hasNumbersAndLetters(str: string) {
  var digitRegex = /\d/;
  var letterRegex = /[a-zA-Z]/;

  return digitRegex.test(str) && letterRegex.test(str);
}
export function hasUppercase(str: string) {
  var uppercaseRegex = /[A-Z]/;

  return uppercaseRegex.test(str);
}

export const useAfterAllHooks = (callback: any, dependencies: any) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      callback();
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
