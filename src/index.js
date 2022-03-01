import './style.css';
import * as util from './modules/leaderboard.js';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  util.addToLeaderboard({ user: inputName.value, score: inputScore.value });
  inputScore.value = '';
  inputName.value = '';
  setTimeout(() => {
    refreshBtn.click();
  }, 1500);
});

refreshBtn.addEventListener('click', () => {
  util.displayLeaderboard();
});

window.addEventListener('load', () => {
  util.displayLeaderboard();
});