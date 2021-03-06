function setWidths() {
    var t = document.body.clientWidth
      , n = Math.floor(t * ratio)
      , i = Math.max(t - n - dividerWidth, 8);
    pageContent.style.width = n + "px",
    divider.style.left = n + "px",
    divider.style.width = dividerWidth + "px",
    pexForFunContent.style.left = n + dividerWidth + "px",
    pexForFunContent.style.width = i + "px"
}
function startDrag() {
    pageContent.style.visibility = "hidden",
    pexForFunContent.style.visibility = "hidden";
    var n = divider.onmouseover
      , t = divider.onmouseout;
    divider.onmouseover = null,
    divider.onmouseout = null,
    document.body.onmousemove = function(n) {
        n || (n = window.event),
        ratio = (n.clientX - dividerWidth / 2) / document.body.clientWidth,
        ratio < .1 && (ratio = .1),
        ratio > .9 && (ratio = .9),
        setWidths()
    }
    ,
    document.body.onmouseup = function() {
        document.body.onmousemove = null,
        document.body.onmouseup = null,
        pageContent.style.visibility = "inherit",
        pexForFunContent.style.visibility = "inherit",
        divider.onmouseover = n,
        divider.onmouseout = t
    }
}
var divider = document.getElementById("divider")
  , pageContent = document.getElementById("manual")
  , pexForFunContent = document.getElementById("simframe")
  , ratio = .4
  , dividerWidth = 8;
window.onresize = setWidths,
setWidths()
/*
divider.onmouseover = function() {
    document.body.style.cursor = "w-resize",
    divider.onmousedown = startDrag
}
,
divider.onmouseout = function() {
    document.body.style.cursor = "default",
    divider.onmousedown = null
}
*/
