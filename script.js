function checkPassword(){
    const correctPassword= "I Love You";
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("error");
    if (input === correctPassword){
        document.getElementById("lockScreen").style.display= "none";
        document.getElementById("content").style.display="block";
        const music = documents.getElementById("bgMusic");
        music.play()
    }
    else {
        error.innerText = "❌ Wrong password";
    }
}

const message = "You Unlocked My Heart ❤️"
let index = 0;
function startTyping(){
    const textElement = document.getElementById("typingText");
    const typing = setInterval(() => {
        textElement.innerText += message[index];
        index++;

        if(index === message.length) {
            clearInterval(typing);
        }

    }, 100);

}
function showSecret() {
  document.getElementById("secret").style.display = "block";
}

document.addEventListner("click", function(){
    const music = document.getElementaryById("bgMusic");
    music.play();
},{once : true });

document.addEventListner("click", function(e){
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style = "fixed";
     heart.style.left = e.clientX + "px";
     heart.style.top = e.clientY + "px";
     heart.style.fontSize = "24px"
     heart.style.pointerEvents = "none";

    document.body.appendChild(heart);
    let moveUp = 0;
    const animation = setInterval(() =>{
        moveUp++;
        heart.style.top = e.clientY - moveUp +"px";
        heart.style.opacity = 1 - moveUp / 100;

    }, 10);
    setTimeout(() => {
        clearInterval(animation);
        heart.remove();
    }, 1000);

});

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
function startSurprise() {
  createHeart();
  showSecret();

  const music = document.getElementById("bgMusic");
  music.play().catch(err => {
    console.log("Music blocked:", err);
  });
}
