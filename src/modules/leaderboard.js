import * as api from './API.js';

const addToLeaderboard = (data) => {
  const formtxt = document.querySelector('form > p');
  if (data.score === '' || data.name === '') {
    formtxt.innerHTML = 'Fill out all the empty fields';
    return;
  }
  api.setData(data.user, data.score).then((recieved) => {
    formtxt.innerHTML = recieved.result;
  });
};

const displayLeaderboard = () => {
  const scoreListSection = document.querySelector('.scores');
  scoreListSection.innerHTML = '';
  api.getData().then((dataList) => {
    if (!dataList) {
      return;
    }
    const arrangedList = dataList.result.sort((a, b) => b.score - a.score);
    arrangedList.forEach((data) => {
      const li = document.createElement('li');
      li.className = 'score-wrapper';
      li.innerHTML = `<p class="text-y">${data.user}:</p>
                    <p>${data.score}</p>`;
      scoreListSection.appendChild(li);
    });
  });
};

export { addToLeaderboard, displayLeaderboard };