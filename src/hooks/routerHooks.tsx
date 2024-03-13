export const updateParams = (params: any, setParams: any, props: any) => {
  let AllParams: any = {};
  params.forEach((value: any, key: any) => {
    AllParams[key] = value;
  });

  setParams({
    ...AllParams,
    ...props,
  });
};
