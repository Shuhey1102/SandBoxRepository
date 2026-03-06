const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg"
];

const imgElements = document.querySelectorAll(".slide");

let imgIndex = 0;

function switchImages() {
  imgIndex = (imgIndex + 1) % images.length;

  imgElements.forEach((img, index) => {
    img.src = images[(imgIndex + index) % images.length];
  });
}

// 5秒ごとに切替
setInterval(switchImages, 5000);


// ===== 動画切替 =====
const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4"
];

const videoPlayer = document.getElementById("videoPlayer");
let videoIndex = 0;

function playVideo(index) {
  videoPlayer.src = videos[index];
  videoPlayer.load();
  videoPlayer.play();
}

// 最初の動画再生
playVideo(videoIndex);

// 再生終了時に次の動画へ
videoPlayer.addEventListener("ended", () => {
  videoIndex = (videoIndex + 1) % videos.length;
  playVideo(videoIndex);
});