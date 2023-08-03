
const mouseDown = (e: Event) => {
  console.log(e.target)
}

const mouseUp = (e: Event) => {
  console.log(e.target)
}

const parentEl = document.getElementById('wrapper')
const childNodes = parentEl?.childNodes
console.log('childNodes', childNodes)

childNodes && childNodes.forEach(node => {
  if (node.nodeType === 1) {
    node.addEventListener('mousedown', mouseDown)
    node.addEventListener('mouseup', mouseUp)
  }
})

