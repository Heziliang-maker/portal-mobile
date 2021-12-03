// =>引入 svg component
import SvgIcon from "@/components/SvgIcon";

// register globally
export default function installSvgIcons(instance) {
  instance.component("svg-icon", SvgIcon);
  const req = require.context("./svg", false, /\.svg$/);
  const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  requireAll(req);
}
