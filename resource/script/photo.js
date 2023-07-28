var photoIdx = 0;
var slider;
window.onload = function () {
  slider = document.querySelectorAll(".photo_img");
}

function moveToPre() {
  var preIdx = photoIdx - 1;
  var idx = (preIdx < 0) ? slider.length - 1 : preIdx;
  changeNode(photoIdx, idx);
}

function moveToNext() {
  var nextIdx = photoIdx + 1;
  var idx = (nextIdx > slider.length - 1) ? 0 : nextIdx;
  changeNode(photoIdx, idx);
}

function changeNode(mIdx, idx) {
  var nowNode = slider[mIdx];
  var nextNode = slider[idx];
  nowNode.style.display = 'none';
  nextNode.style.display = 'inline-flex';
  photoIdx = idx;
}