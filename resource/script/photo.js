let photoIdx = 0;
let slider;
window.onload = function () {
  introduceMaker();
  slider = document.querySelectorAll(".photo_img");
}

function moveToPre() {
  let preIdx = photoIdx - 1;
  let idx = (preIdx < 0) ? slider.length - 1 : preIdx;
  changeNode(photoIdx, idx);
}

function moveToNext() {
  let nextIdx = photoIdx + 1;
  let idx = (nextIdx > slider.length - 1) ? 0 : nextIdx;
  changeNode(photoIdx, idx);
}

function changeNode(mIdx, idx) {
  let nowNode = slider[mIdx];
  let nextNode = slider[idx];
  nowNode.style.display = 'none';
  nextNode.style.display = 'inline-flex';
  photoIdx = idx;
}