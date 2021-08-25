document.getElementById("abc").addEventListener("click", function () {
  var audio1 = new Audio("sound.mp3");
  audio1.loop = false; // 반복재생하지 않음
  audio1.volume = 0.5; // 음량 설정
  audio1.play(); // sound1.mp3 재생
}); 