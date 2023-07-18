// if (history.scrollRestoration) {
//   window.history.scrollRestoration = "manual";
// }

const introTitle = document.querySelector("#title");
const introButton = document.querySelector("#introBtn");
const menu = document.querySelector("#menu");

// 타이틀 문구 타이핑
const title = "랜덤런치 13조\n후기\n시작합니다";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
  let character = title[cnt++];

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
  location.href = '/resource//html/menu.html';
});

window.onload = function () {
  introduceMaker();
  timer = setInterval(typingIntroTitle, 200);
}

function introduceMaker() {
  const conts = `
                     ,--.       ,--.                 ,--.,--.,--.  ,--.,--. ,--.      ,--.   ,--.,-------. 
,--,--,--. ,--,--. ,-|  |,---.  |  |-.,--. ,--.      |  ||  ||  ,'.|  ||  | |  |      |  |   |  |\`--.   /  
|        |' ,-.  |' .-. | .-. : | .-. '\\  '  /  ,--. |  ||  ||  |' '  ||  | |  |      |  |   |  |  /   /   
|  |  |  |\\ '-'  |\\ \`-' \\   --. | \`-' | \\   '   |  '-'  /|  ||  | \`   |'  '-'  ',----.|  '--.|  | /   \`--. 
\`--\`--\`--' \`--\`--' \`---' \`----'  \`---'.-'  /     \`-----' \`--'\`--'  \`--' \`-----' '----'\`-----'\`--'\`-------' 
                                      \`---'                                                                
AK아이에스 제조서비스팀 HR & WEB파트 윤형석 주임😎
  `
  console.log(conts);
}