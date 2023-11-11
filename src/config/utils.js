export const getFirstLetterCapital = (label = "") => {
  return label?.[0]?.toUpperCase() + label?.slice(1);
};
export const getFormatedNumber = (value = 0, fixedPoint = 0) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: fixedPoint,
  });
  return formatter.format(value ? value : 0);
};
