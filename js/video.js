let tag = document.createElement("script"),
  firstScriptTag = document.getElementsByTagName("script")[0],
  player;

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function findVideos() {
  const videos = document.querySelectorAll(".video__content");

  videos.forEach((video) => {
    setupVideo(video);
  });
}

function setupVideo(video) {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const id = "OifU7-VL2fY";

  video.addEventListener("click", () => {
    let iframe = document.getElementById("player");

    iframe.classList.add("video__media");

    link.remove();
    button.remove();

    (function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
        height: "auto",
        width: "auto",
        videoId: id,
        orogin: "http://localhost:3000",
        events: {
          onReady: onPlayerReady,
        },
      });
    })();

    function onPlayerReady(event) {
      event.target.playVideo();
    }
  });

  link.removeAttribute("href");
  video.classList.add("video__content_enabled");
}

findVideos();
