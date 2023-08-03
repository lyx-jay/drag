var parentEl = document.getElementById('wrapper');
var childNodes = parentEl === null || parentEl === void 0 ? void 0 : parentEl.childNodes;
console.log('childNodes', childNodes);
childNodes && childNodes.forEach(function (node) {
    node.addEventListener('mousedown', function (e) {
        console.log(e.target);
    });
});
