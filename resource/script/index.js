// if (history.scrollRestoration) {
//   window.history.scrollRestoration = "manual";
// }

var introTitle = document.getElementById("title");
var introButton = document.getElementById("introBtn");
var menu = document.getElementById("menu");

// 타이틀 문구 타이핑
var title = "마포사이트 13조\n랜덤런치 후기\n시작합니다";

var cnt = 0;
var timer = 0;

function typingIntroTitle() {
  var character = title[cnt++];

  if (character === "\n") {
    introTitle.innerHTML = introTitle.innerHTML + "<br/>";
  } else {
    introTitle.innerHTML = introTitle.innerHTML + character;
  }

  if (cnt === title.length) {
    clearInterval(timer);
    introButton.classList.add("show");

    return;
  }
}

// 버튼 클릭 시 게임 목록으로 이동
introButton.addEventListener('click', () => {
  location.href = '/resource/html/menu.html';
});

window.onload = function () {
  timer = setInterval(typingIntroTitle, 200);
}