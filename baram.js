var Body = {
  setBackcolor : function(color){
    document.querySelector('body').style.backgroundColor=color;
  },
  setColor : function(color){
    document.querySelector('body').style.color=color;
  }
}
var Link = {
  setColor : function(color){
    var aa = document.querySelectorAll('a')
    var i = 0
    while (i < aa.length) {
      aa[i].style.color=color;
      i = i + 1;
    }
  }
}
function dmode(self) {
  if(self.value === 'Darkmode On') {
    Body.setBackcolor('#313131');
    Body.setColor('white');
    self.value = 'Darkmode Off';
    Link.setColor('powderblue');
  } else {
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    self.value = 'Darkmode On';
    Link.setColor('black');
  }
}
