console.log('clicked');
const video = document.querySelector('#video');
const videoState = document.querySelector('.video-controls>p');
const videoControls = document.querySelector('.play-pause');

const toggler = () => {
  if (video.paused === true) {
    videoState.innerHTML = 'Pause';
    video.play();
  } else {
    videoState.innerHTML = 'Play';
    video.pause();
  }
};

document.querySelector('.play-pause').addEventListener('click', () => {
  toggler();
});
