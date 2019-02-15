import Vue from 'vue'
import {
  Button,
  Collapse,
  CollapseItem,
  Progress,
  ColorPicker,
  Loading,
  Notification,
  Message
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Progress)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(ColorPicker)
