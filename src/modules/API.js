const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const currentGameID = 'VLcv73AwdH0SUYBh0Daf';

const newGame = async (gameName) => {
  const connect = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const receivedData = await connect.json();
  const gameID = receivedData.result;
  return gameID;
};

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

export { getData, setData, newGame };