let memberIdx = 0;
let slider;
window.onload = function () {
  introduceMaker();
  slider = document.querySelectorAll(".game__board");
}

function moveToPre() {
  let preIdx = memberIdx - 1;
  let idx = (preIdx < 0) ? slider.length - 1 : preIdx;
  changeNode(memberIdx, idx);
}

function moveToNext() {
  let nextIdx = memberIdx + 1;
  let idx = (nextIdx > slider.length - 1) ? 0 : nextIdx;
  changeNode(memberIdx, idx);
}

function changeNode(mIdx, idx) {
  let nowNode = slider[mIdx];
  let nextNode = slider[idx];
  nowNode.style.display = 'none';
  nextNode.style.display = 'inline-flex';
  memberIdx = idx;
}