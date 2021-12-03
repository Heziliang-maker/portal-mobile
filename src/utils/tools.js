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
