const myBox = document.getElementById('my-box');
const buttonSubmit = document.getElementById('btn-edit');

let isLowerBracketShow = true;

function toggleBox () {
    if(isLowerBracketShow) {
      isLowerBracketShow = false;
      myBox.classList.remove('hide');
    } else {
      isLowerBracketShow = true;
      myBox.classList.add('hide');
    }
  };

  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    toggleBox();
  });