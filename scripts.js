let factory = () => {
    let i = true;
      increment = () => {
        i = true
        return i
    };
      decrement = () => {
        i = false
        return i
      }
      getI = () => {
        return i
      }  
  return {getI, increment, decrement}
  }
  const player = factory()
  let cellClass = document.getElementsByClassName('grid-cell')
  let selectedTd;
  
  function gameplay () {
    let player1 = 0
    let player2 = 0
    let square1 = document.getElementById('1')
    let square2 = document.getElementById('2')
    let square3 = document.getElementById('3')
    let square4 = document.getElementById('4')
    let square5 = document.getElementById('5')
    let square6 = document.getElementById('6')
    let square7 = document.getElementById('7')
    let square8 = document.getElementById('8')
    let square9 = document.getElementById('9')
    function winCondition (s1, s2, s3) {
      if (s1.classList.contains('cell') && s2.classList.contains('cell') && s3.classList.contains('cell')) {
        console.log('you win')
      } else if (s1.classList.contains('cell2') && s2.classList.contains('cell2') && s3.classList.contains('cell2'))
        {console.log('you win')}
    } 
    winCondition(square1, square2, square3)
    winCondition(square4, square5, square6)
    winCondition(square7, square8, square9)
    winCondition(square1, square4, square7)
    winCondition(square2, square5, square8)
    winCondition(square3, square6, square7)
    winCondition(square1, square5, square9)
    winCondition(square7, square5, square3)
  } 
    
  
  
  let i = true;
  function highlight(td) {
    selectedTd = td;
    if (i == true){
      selectedTd.classList.add('cell')
      gameplay()
      i = false;
    } else {
      if (selectedTd.classList.contains('cell')){return}
      selectedTd.classList.add('cell2')
      gameplay()
      i = true;
    }
  }
  
  
  
  let grid = document.getElementById('container')
  grid.onclick = function (event) {
    let td = event.target.closest('div');
    if (!td) return;
    if (!grid.contains(td)) return;
    highlight(td)
  }
  
  