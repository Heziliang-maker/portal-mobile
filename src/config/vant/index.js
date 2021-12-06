/*
 * @Date: 2021-12-03
 * @Description: vant config 由于 CSS 变量继承机制的原因 ,两者的修改方式有一定差异：
 * 基础变量只能通过 root 选择器 修改，不能通过 ConfigProvider 组件 修改。
 * 组件变量可以通过 root 选择器 和 ConfigProvider 组件 修改。
 */

// 按需引入vant组件
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
  DropdownMenu,
  DropdownItem,
  Switch,
  Cell,
  Radio,
  RadioGroup,
  CellGroup,
  Search,
  //
  Lazyload,
} from "vant";

// 按需引入vant样式
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
import "vant/lib/dropdown-menu/style";
import "vant/lib/dropdown-item/style";
import "vant/lib/switch/style";
import "vant/lib/cell/style";
import "vant/lib/radio/style";
import "vant/lib/radio-group/style";
import "vant/lib/cell-group/style";
import "vant/lib/search/style";

// 引入 css变量(注意顺序:要在引入vant样式后进行覆盖)
import "@/styles/vant/vant_cover.css";

Toast.setDefaultOptions({ className: "notranslate" });
export default function installVant(instance) {
  // 按需注册
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
  instance.use(DropdownMenu);
  instance.use(DropdownItem);
  instance.use(Switch);
  instance.use(Cell);
  instance.use(Radio);
  instance.use(RadioGroup);
  instance.use(CellGroup);
  instance.use(Search);
  //
  instance.use(Lazyload);
 
}
