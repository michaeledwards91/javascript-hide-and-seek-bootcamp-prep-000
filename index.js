function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div')
  return divs[divs.length - 1];
}


/* deepstChild() {
   get a list of all the divs
   look at each div and see if there's more shit inside

  }*/
