var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weights 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];

let insertY = ['the soup kitchen','Disneyland','the White House'];

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let newStory = storyText;

  newStory = newStory.replace(/:insertx:/g, randomValueFromArray(insertX));
  newStory = newStory.replace(':inserty:', randomValueFromArray(insertY));
  newStory = newStory.replace(':insertz:', randomValueFromArray(insertZ));

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', customName.value);
  }
  
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 / 1.40000) + ' stone';
    var temperature =  Math.round((94 - 32) / 1.800000) + ' centigrade';
    newStory = newStory.replace('300 pounds',  Math.round(300 / 14.00000) + ' stone');
    newStory = newStory.replace('94 fahrenheit', Math.round((94 - 32) / 1.800000) + ' centigrade');
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}