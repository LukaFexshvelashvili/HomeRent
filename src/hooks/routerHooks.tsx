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
export const deleteParams = (params: any, setParams: any, itemName: any) => {
  let AllParams: any = {};
  params.forEach((value: any, key: any) => {
    AllParams[key] = value;
  });
  delete AllParams[itemName];
  setParams(AllParams);
};
