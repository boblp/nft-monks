const DATA = {
  "backgrounds": { "1": 35, "2": 25, "3": 20, "4": 13, "5": 5, "6": 2 },
  "bodies": { "1": 35, "2": 25, "3": 20, "4": 13, "5": 5, "6": 2 },
  "faces": { "1": 50, "2": 30, "3": 20 },
  "hats": { "1": 50, "2": 30, "3": 20 }
};

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
    obj = {};
    const numItems = dataset.filter(data => data === currentData);
    response.push([currentData, `${numItems.length * 100 / totalItems}%`])
  });

  return response.sort((a, b) => (a[0] > b[0]) ? 1 : -1);
}

const generate = (times, attr) => {
  const response = [];
  for (var i=0; i<times; i++) {
    response.push(getRandomWeighted(DATA[attr]));
  }

  return getResultPercentages(response);
}

const generateNFT = (amount) => {
  let nft = {};
  const response = [];

  for (var i=0; i<amount; i++) {
    nft = {
      backgrounds: generate(1, 'backgrounds'),
      bodies: generate(1, 'bodies'),
      faces: generate(1, 'faces'),
      hats: generate(1, 'hats'),
    };

    response.push(JSON.stringify(nft))
  }
   
  return response;
}

// console.log(generate(10000, 'backgrounds'))
// console.log(generateNFT())
// console.log(generateNFT(10));