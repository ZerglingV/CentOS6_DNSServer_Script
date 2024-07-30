var collapseToggle = function collapseToggle(dom) {
    var collapseDiv = dom.parentNode;
    var cCont = collapseDiv.children[1];
    if (cCont.classList.contains("collapsing")) return false;
    var cCtrl = collapseDiv.children[0];
    cCtrl.classList.toggle("show");
    if (cCont.classList.contains("expanded")) {
        cCont.style.height = cCont.getBoundingClientRect().height + "px";
        cCont.offsetHeight;
        cCtrl.classList.add("non-radius-border");
        cCont.classList.add("collapsing");
        cCont.classList.remove("collapse-content", "expanded");
        setTimeout(function () {
            cCtrl.classList.remove("non-radius-border");
            cCont.classList.remove("collapsing");
            cCont.classList.add("collapse-content");
        }, 350);
        cCont.style.height = "";
    } else {
        cCtrl.classList.add("non-radius-border");
        cCont.classList.add("collapsing");
        cCont.classList.remove("collapse-content");
        cCont.style.height = cCont.scrollHeight + "px";
        setTimeout(function () {
            cCont.classList.remove("collapsing");
            cCont.classList.add("collapse-content");
            cCont.classList.add("expanded");
            cCont.style.height = "";
        }, 350);
    }
};
