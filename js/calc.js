

function randNum() {

  var setSize = 1000;
  var numberSet = [];
  for (var i = 0; i < setSize; i++) {
    numberSet[i] = chance.natural({min: 1, max: 49});
  }

  for (var i = 0; i < 5; i++) {
    chance.shuffle(numberSet);
  }

  return(chance.pickone(numberSet));
}


function sortList (unsortedList) {

var workingList = unsortedList;
var swop;

  for (var x = 0; x < (workingList.length - 1); x++) {
    for (var y = x + 1; y < workingList.length; y++) {
      if (workingList[x] > workingList[y]) {
        swop = workingList[x];
        workingList[x] = workingList[y];
        workingList[y] = swop;
      }
    }
  }

return workingList;
}


function lottoSet() {

  var lottoNumSet = [];

  for (var i = 0; i < 6; i++) {
    lottoNumSet[i] = randNum();
  }

  for (var x = 0; x < 6; x++) {
    for (var y = 0; y < 6; y++) {
      if(x != y) {
          if (lottoNumSet[x] == lottoNumSet[y]) {

            do {
              lottoNumSet[x] = randNum();
            }
            while (lottoNumSet[x] == lottoNumSet[y]);

          }
      }
    }
  }

  return sortList(lottoNumSet);
}
