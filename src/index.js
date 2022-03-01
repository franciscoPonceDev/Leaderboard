import './style.css';
import Leaderboard from './modules/leaderboard.js';
import User from './modules/user.js';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.querySelector('#submit');

const leaderb = new Leaderboard();
if (localStorage.getItem('Scores')) {
  const localScores = JSON.parse(localStorage.getItem('Scores'));
  localScores.scoreList.forEach((element) => {
    leaderb.add(new User(element.name, element.score));
  });
}

submitBtn.addEventListener('click', () => {
  leaderb.add(new User(inputName.value, inputScore.value));
  inputScore.value = '';
  inputName.value = '';
});