/**
 * @description     结束节点
 *
 * @author          重阳  
 * @create          2019-10-13 11:00
 * */


import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from './base'

export default {
  name: 'end',
  extendName: 'single-shape',
  options: {
    ...base,
    shapeType: 'circle',
    getShapeStyle (cfg) {
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0
      const y = 0
      var r = width / 2
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        width,
        height,
        r,
        stroke: color,
      }, cfg.style)
      return style
    }
  }
}
