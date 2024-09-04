function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
        switch (mutation.type) {
            case "childList":
                var addedSpan = mutation.addedNodes[0];
                if (addedSpan == undefined) return;
                var anchor = mutation.target;
                anchor.parentElement.appendChild(addedSpan);
                /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与 mutation.removedNodes */
                break;
            case "attributes":
                /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，该属性之前的值为 mutation.oldValue */
                break;
        }
    });
}

var observerOptions = {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    attributes: false, // 观察属性变动
    subtree: false, // 观察后代节点，默认为 false
};

var observer = new MutationObserver(callback);

var iconClassName = ["iconsmall", "iconmedium", "iconlarge"];
var elements = [];
Array.prototype.forEach.call(iconClassName, function (name) {
    elements = elements.concat(Array.from(document.getElementsByClassName(name)));
});
Array.prototype.forEach.call(elements, function (div) {
    if (div.nodeName.toLowerCase() != "div") return;

    var anchor = div.firstElementChild;
    if (anchor.nodeName.toLowerCase() != "a") return;

    observer.observe(anchor, observerOptions);
});
