const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const currentGameID = 'COJ5Q2bYlIk63F8K6gIm';

// If it's required to create a new game everytime the window loads, I will do it.
// But if its not. I'll not waste more time in it

const getData = async () => {
  const connect = await fetch(`${baseURL}/${currentGameID}/scores`);
  const scoreList = await connect.json();
  return scoreList;
};

const setData = async (userName, userScore) => {
  const connect = await fetch(`${baseURL}/${currentGameID}/scores`, {
    method: 'POST',
    body: JSON.stringify({ user: userName, score: userScore }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const receivedData = await connect.json();
  return receivedData;
};

export { getData, setData };