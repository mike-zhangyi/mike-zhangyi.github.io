//let myHeading = document.querySelector('h2');  //
//myHeading.textContent = 'Hello world!'; //  
/* 
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我123');    
} else {
  alert('但是巧克力才是我的最爱呀……');    
}*/
//document.querySelector('html').onclick = function() {
 //   alert('别戳我，我怕疼。');
//} 

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox.jpg');
    }
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  if (myName){localStorage.setItem('name', myName);
  setHeading(myName);}
  else{}
  
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;