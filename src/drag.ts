
// 鼠标按下
const mouseDown = (e: Event) => {
  console.log(e.target)
}

// 鼠标松开
const mouseUp = (e: Event) => {
  console.log(e.target)
}

// 鼠标进入元素会触发该事件
const mouseEnter = (e: Event) => {

}



const parentEl = document.getElementById('wrapper')
const childNodes = parentEl?.childNodes
console.log('childNodes', childNodes)

childNodes && childNodes.forEach(node => {
  if (node.nodeType === 1) {
    node.addEventListener('mousedown', mouseDown)
    node.addEventListener('mouseEnter', mouseUp)
  }
})

window.addEventListener('mouseup', mouseUp)