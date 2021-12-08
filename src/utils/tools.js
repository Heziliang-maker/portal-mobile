/*
 * @Date: 2021-12-03
 * @Description:
 */
import projectConfig from "@/config/project";

const { name: title } = projectConfig;

export const getPageTitle = (pageTitle) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
};

export const useCheckEmailIsFill = () => {
  const name = "isFill";
  const value = localStorage.getItem(name);
  const isFill = value !== null;
  const setValue = (value) => localStorage.setItem(name, value);
  return [isFill, value, setValue];
};
