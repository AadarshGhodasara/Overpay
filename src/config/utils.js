export const getFirstLetterCapital = (label = "") => {
  return label?.[0]?.toUpperCase() + label?.slice(1);
};
