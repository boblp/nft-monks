import { traitsWeights } from '../traits';

const getRandomWeighted = (options) => {
  const arrayData = Object.entries(options);
  let i;
  let weights = [];

  for (i = 0; i < arrayData.length; i++)
    weights[i] = arrayData[i][1] + (weights[i - 1] || 0);
  
  let random = Math.random() * weights[weights.length - 1];
  
  for (i = 0; i < weights.length; i++)
    if (weights[i] > random)
      break;
  return arrayData[i][0];
}

const getResultPercentages = (dataset) => {
  const response = [];
  const totalItems = dataset.length
  const uniqueItems = [...new Set(dataset)]
  uniqueItems.forEach(currentData => {
    const numItems = dataset.filter(data => data === currentData);
    response.push([currentData, `${numItems.length * 100 / totalItems}%`])
  });

  return response.sort((a, b) => (a[0] > b[0]) ? 1 : -1);
}

const generate = (times, attr) => {
  const response = [];
  for (var i=0; i<times; i++) {
    response.push(getRandomWeighted(traitsWeights[attr]));
  }

  return getResultPercentages(response);
}

export const generateNFT = (amount) => {
  let nft = {};
  const response = [];

  let background, weapon, body, armor, head, hand;

  for (var i=0; i<amount; i++) {
    background = generate(1, 'backgrounds');
    weapon = generate(1, 'weapons');
    body = generate(1, 'bodies');
    armor = generate(1, 'armors');
    head = generate(1, 'heads');
    hand = generate(1, 'hands');

    nft = {
      backgrounds: background[0][0],
      weapons: weapon[0][0],
      bodies: body[0][0],
      armors: armor[0][0],
      heads: head[0][0],
      hands: hand[0][0],
    };

    response.push(nft)
  }
   
  return response;
}
