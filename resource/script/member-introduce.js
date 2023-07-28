var memberIdx = 0;
var slider;
window.onload = function () {
  slider = document.querySelectorAll(".game__board");
}

function moveToPre() {
  var preIdx = memberIdx - 1;
  var idx = (preIdx < 0) ? slider.length - 1 : preIdx;
  changeNode(memberIdx, idx);
}

function moveToNext() {
  var nextIdx = memberIdx + 1;
  var idx = (nextIdx > slider.length - 1) ? 0 : nextIdx;
  changeNode(memberIdx, idx);
}

function changeNode(mIdx, idx) {
  var nowNode = slider[mIdx];
  var nextNode = slider[idx];
  nowNode.style.display = 'none';
  nextNode.style.display = 'inline-flex';
  memberIdx = idx;
}