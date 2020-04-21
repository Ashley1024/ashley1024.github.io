const tdPlace = document.querySelectorAll('td');
const tdCollection = document.getElementById('tbody').querySelectorAll('td');
const tbodyele = document.getElementById('tbody');
let z = [];
let lastStep = 'white';

tbodyele.addEventListener('click', e => {
  let show = e.target.getAttribute('ifshow');
  if (lastStep == 'white' && show != 'done') {
    // e.target.style.backgroundColor = 'black';
    //e.target.style.removeAttribute('backgroundColor');
    e.target.classList.add('dot');
    e.target.setAttribute('result', 'black');
    lastStep = 'black';
  } else if (lastStep == 'black' && show != 'done') {
    // e.target.style.backgroundColor = 'grey';
    e.target.classList.add('dot2');
    e.target.setAttribute('result', 'white');
    lastStep = 'white';
  }
  e.target.setAttribute('ifshow', 'done');
  getmatrixresult();
});

const getmatrixresult = () => {
  let b = [];
  for (let element of tdPlace) {
    let a = element.getAttribute('result');
    b.push(a);
    z = b;
  }
  let matrixdata = listToMatrix(z, 15);
  //判断横行五子
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (matrixdata[i][j] == matrixdata[i][j + 1]
        && matrixdata[i][j] == matrixdata[i][j + 2]
        && matrixdata[i][j] == matrixdata[i][j + 3]
        && matrixdata[i][j] == matrixdata[i][j + 4]
        && matrixdata[i][j] != undefined
        && matrixdata[i][j] != null
        && matrixdata[i][j] != '') {
        $('#exampleModal').modal('show');
      }
    }
  }
  //判断竖行五子, 矩阵翻转
  var newArray = matrixdata[0].map(function (col, i) {
    return matrixdata.map(function (row) {
      return row[i];
    })
  });
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (newArray[i][j] == newArray[i][j + 1]
        && newArray[i][j] == newArray[i][j + 2]
        && newArray[i][j] == newArray[i][j + 3]
        && newArray[i][j] == newArray[i][j + 4]
        && newArray[i][j] != undefined
        && newArray[i][j] != null
        && newArray[i][j] != '') {
        $('#exampleModal').modal('show');
        resetCard();
      }
    }
  }
  //判断斜行1五子
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (matrixdata[i][j] == matrixdata[i + 1][j + 1]
        && matrixdata[i][j] == matrixdata[i + 2][j + 2]
        && matrixdata[i][j] == matrixdata[i + 3][j + 3]
        && matrixdata[i][j] == matrixdata[i + 4][j + 4]
        && matrixdata[i][j] != undefined
        && matrixdata[i][j] != null
        && matrixdata[i][j] != '') {
        $('#exampleModal').modal('show');
        resetCard();
      }
    }
  }
  //判断斜行2五子
  for (let i = 0; i < 11; i++) {
    for (let j = 4; j < 15; j++) {
      if (matrixdata[i][j] == matrixdata[i + 1][j - 1]
        && matrixdata[i][j] == matrixdata[i + 2][j - 2]
        && matrixdata[i][j] == matrixdata[i + 3][j - 3]
        && matrixdata[i][j] == matrixdata[i + 4][j - 4]
        && matrixdata[i][j] != undefined
        && matrixdata[i][j] != null
        && matrixdata[i][j] != '') {
        $('#exampleModal').modal('show');
        resetCard();
      }
    }
  }
}

function resetCard() {
  for (let ele of tdPlace) {
    ele.removeAttribute('result');
    ele.removeAttribute('ifshow');
    ele.classList.remove('dot');
    ele.classList.remove('dot2');
    lastStep = 'white';

  }
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], il, k;
  for (il = 0, k = -1; il < list.length; il++) {
    if (il % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[il]);
  }

  return matrix;
}