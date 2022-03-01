export default class Leaderboard {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  add(data) {
    this.scoreList.push(data);
    this.display(data);
    this.populateStorage();
  }

  display(data) {
    const scoreListSection = document.querySelector('.scores');
    if (this) {
      const div = document.createElement('div');
      div.className = 'score-wrapper';
      div.innerHTML = `<h3>${data.name}: </h3>
                      <h3>${data.score}</h3>`;
      scoreListSection.appendChild(div);
    }
  }

  populateStorage() {
    localStorage.setItem(
      'Scores',
      JSON.stringify({
        scoreList: this.scoreList,
      }),
    );
  }
}