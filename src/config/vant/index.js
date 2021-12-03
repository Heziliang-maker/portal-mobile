/*
 * @Date: 2021-12-03
 * @Description: vant config 由于 CSS 变量继承机制的原因 ,两者的修改方式有一定差异：
 * 基础变量只能通过 root 选择器 修改，不能通过 ConfigProvider 组件 修改。
 * 组件变量可以通过 root 选择器 和 ConfigProvider 组件 修改。
 */

// 引入 css变量
import "@/styles/vant/vant_cover.css";

// 引入组件
import {
  Swipe,
  SwipeItem,
  Tabs,
  Tab,
  Grid,
  GridItem,
  Collapse,
  CollapseItem,
  Image as VanImage,
  Loading,
  Popup,
  Icon,
  Button,
  Sticky,
  Field,
  Form,
  Rate,
  Toast,
  Dialog,
  Notify,
} from "vant";

import "vant/lib/swipe/style";
import "vant/lib/swipe-item/style";
import "vant/lib/tabs/style";
import "vant/lib/tab/style";
import "vant/lib/grid/style";
import "vant/lib/grid-item/style";
import "vant/lib/collapse/style";
import "vant/lib/collapse-item/style";
import "vant/lib/image/style";
import "vant/lib/loading/style";
import "vant/lib/popup/style";
import "vant/lib/icon/style";
import "vant/lib/button/style";
import "vant/lib/sticky/style";
import "vant/lib/field/style";
import "vant/lib/form/style";
import "vant/lib/rate/style";
import "vant/lib/toast/style";
import "vant/lib/dialog/style";
import "vant/lib/notify/style";

Toast.setDefaultOptions({ className: "notranslate" });
export default function installVant(instance) {
  instance.use(Swipe);
  instance.use(SwipeItem);
  instance.use(Tabs);
  instance.use(Tab);
  instance.use(Grid);
  instance.use(GridItem);
  instance.use(Collapse);
  instance.use(CollapseItem);
  instance.use(Loading);
  instance.use(Popup);
  instance.use(Icon);
  instance.use(Button);
  instance.use(Sticky);
  instance.use(Field);
  instance.use(Form);
  instance.use(Rate);
  instance.use(VanImage);
  instance.use(Toast);
  instance.use(Dialog);
  instance.use(Notify);
}
