// Toggle button top right of screen

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () =>{
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
} )

// Drop down menu

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setDropDown);

function setDropDown() {
  const choice = select.value;

  if (choice === 'about me') {
    para.textContent = 'Grew up working in disaster restoration where I helped people suffering through floods, fires and bio-hazards. Currently live in Japan and have been to 34 countries. Studying Web-Dev full-time';

  } else if (choice === 'my skills') {
    para.textContent = 'HTML: Novice  //  CSS: Novice  //  Javascript: In diapers';

  } else if (choice === 'random fact') {
    para.textContent = 'You lose up to 30 percent of your taste buds during flight ==> This might explain why airplane food gets such a bad reputation. The elevation in an airplane can have a detrimental effect on our ability to taste things. According to a 2010 study conducted by Germany\s Fraunhofer Institute for Building Physics, the dryness experienced at a high elevation as well as low pressure reduces the sensitivity of a person’s taste buds to sweet and salty foods by about 30 percent. Add that dry cabin air affects our ability to smell, and our ability to taste is reduced further.'

  } else if (choice === 'joke') {
    para.textContent = 'And the bartender says, "Success, but you\'re not ready!" So a JavaScript function walks into a bar. '

  } else {
    para.textContent = '';
  }
}




