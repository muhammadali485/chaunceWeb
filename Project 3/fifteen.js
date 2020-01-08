
var cell;
var timer;
var spaceY;
var spaceX;
var size=15;
var solver = [];
var moves= 0;
var time = 0;
var timer;
var bestmoves=999;
var besttime=999;
var flag = false;


window.onload = function (){

  document.getElementsByTagName("BODY")[0].style.background='url("marioback.jpg")';
  document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
  document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  var gameContainer = document.getElementById('gameContainer');

  for(var i=0;i<size; i++){
    var div = document.createElement("div");
    div.className='piece';
    div.innerHTML = i+1;
	  div.style.background='url("mario.jpg")';
    document.getElementById('gameContainer').appendChild(div);
  }

  cell = gameContainer.getElementsByTagName('div');


	//Positions the background image for each 'piece' div
    for (var i=0; i<cell.length; i++){
      cell[i].style.left = (i%4*100)+'px';
      cell[i].style.top = (parseInt(i/4)*100) + 'px';
      cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
      cell[i].onclick = function(){
        if(checkMove(parseInt(this.innerHTML))){
          if(flag==false){
            alert("Press Shuffle to Start");
          }else{
            moves++;
            document.getElementById('moves').innerHTML=moves;
            swap(this.innerHTML-1);
            checkWin();
          }
          return;
        }
      };
  }

  shuffleGame();

  var confettiParty = function init(particle) {
      this.particle = particle;
      this.animations = ['slow', 'medium', 'fast'];
      this.colors = ['#fce18a', '#ff726d', '#b48def', '#f4306d', '#99ccff', '#ccffcc'];

      var container = document.createElement('div');
      var position = this.particle.style.position;
      if (position !== 'relative' || position !== 'absolute') {
          this.particle.style.position = 'relative';
      }
      container.classList.add('confetti-container');

      this.particle.appendChild(container);
      this.container = container;

      var _this = this;

      this.interval = setInterval(function () {
          var confettiParticle = document.createElement('div');
          var confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
          var confettiBackground = _this.colors[Math.floor(Math.random() * _this.colors.length)];
          var confettiLeft = Math.floor(Math.random() * _this.particle.offsetWidth) + 'px';
          var confettiAnimation = _this.animations[Math.floor(Math.random() * _this.animations.length)];

          confettiParticle.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
          confettiParticle.style.left = confettiLeft;
          confettiParticle.style.width = confettiSize;
          confettiParticle.style.height = confettiSize;
          confettiParticle.style.backgroundColor = confettiBackground;
          confettiParticle.removeTimeout = setTimeout(function () {
              confettiParticle.parentNode.removeChild(confettiParticle);
          }, 3000);
          _this.container.appendChild(confettiParticle);
      }, 25);
  };

  window.confettiParty = new confettiParty(document.querySelector('.js-container'));

};
function shuffleGame(){
	var shuffle = document.getElementById('shuffle');
	spaceX = '300px';
	spaceY = '300px';

	shuffle.onclick = function(){
		flag=true;
		document.getElementById('aud2').pause();
		moves=0;
		document.getElementById('moves').innerHTML=moves;
		time=0;
		document.getElementById('timer').innerHTML=time;
		clearInterval(timer);
		timer = setInterval(function(){
			time++;
			document.getElementById('timer').innerHTML=time;
			}, 1000);

			document.getElementById('aud').play();

		for (var i=0; i<300; i++){

			var rand = parseInt(Math.random()* 100) %4;
			solver[i] = rand;

			if (rand == 0){
				var temp = up(spaceX, spaceY);
				if ( temp != -1){
					swap(temp);
				}
			}
			if (rand == 1){
				var temp = down(spaceX, spaceY);
				if ( temp != -1){
					swap(temp);
				}
			}
			if (rand == 2){
				var temp = left(spaceX, spaceY);
				if ( temp != -1){
					swap(temp);
				}
			}
			if (rand == 3){
				var temp = right(spaceX, spaceY);
				if (temp != -1){
					swap(temp);
				}
			}
		}
	};
}

function setImage(val){
  if(flag==true){
    alert("Must finish game");
  }else{
    if(val.options[val.selectedIndex].text=="Image 1"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("mario.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }

    }else if(val.options[val.selectedIndex].text=="Image 2"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("yoshi.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }

    }else if(val.options[val.selectedIndex].text=="Image 3"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("peach.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }

    }else if(val.options[val.selectedIndex].text=="Image 4"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("bowser.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }
    }else if(val.options[val.selectedIndex].text=="Image 5"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("star.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }
    }else if(val.options[val.selectedIndex].text=="Image 6"){
      var c = document.getElementById('gameContainer').childNodes;
      for(var i=0;i<size;i++){
        c[i].style.background = 'url("mariokart.jpg")';
        cell[i].style.left = (i%4*100)+'px';
        cell[i].style.top = (parseInt(i/4)*100) + 'px';
        cell[i].style.backgroundPosition= '-' + cell[i].style.left + ' ' + '-' + cell[i].style.top;
        cell[i].onclick = function(){
          if(checkMove(parseInt(this.innerHTML))){
            if(flag==false){
              alert("Press Shuffle to Start");
            }else{
              moves++;
              document.getElementById('moves').innerHTML=moves;
              swap(this.innerHTML-1);
              checkWin();
            }
            return;
          }
        };
      }
    }else{
      alert("kapow");
    }
  }

}
function setBackground(val){
  if(val.options[val.selectedIndex].text=="Background 1"){
    document.getElementsByTagName("BODY")[0].style.background='url("marioback.jpg")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else if(val.options[val.selectedIndex].text=="Background 2"){
    document.getElementsByTagName("BODY")[0].style.background='url("yoshiback.png")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else if(val.options[val.selectedIndex].text=="Background 3"){
    document.getElementsByTagName("BODY")[0].style.background='url("peachback.jpg")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else if(val.options[val.selectedIndex].text=="Background 4"){
    document.getElementsByTagName("BODY")[0].style.background='url("bowserback.jpg")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else if(val.options[val.selectedIndex].text=="Background 5"){
    document.getElementsByTagName("BODY")[0].style.background='url("starback.jpg")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else if(val.options[val.selectedIndex].text=="Background 6"){
    document.getElementsByTagName("BODY")[0].style.background='url("mariokartback.jpg")';
    document.getElementsByTagName("BODY")[0].style.backgroundPosition='center';
    document.getElementsByTagName("BODY")[0].style.backgroundSize='cover';
  }else{
    alert("kapow");
  }
}
function setBox(val){
  if(val.options[val.selectedIndex].text=="2x2"){
    size=3;
  }else if(val.options[val.selectedIndex].text=="3x3"){
    size=8;
  }else if(val.options[val.selectedIndex].text=="4x4"){
    size=15;
  }else if(val.options[val.selectedIndex].text=="5x5"){
    size=24;
  }else{
    alert("kapow");
  }
}
function checkMove(position){
	if (left(spaceX, spaceY) == (position-1)){
		return true;
	}
	if (down(spaceX, spaceY) == (position-1)){
		return true;
	}
	if (up(spaceX, spaceY) == (position-1)){
		return true;
	}
	if (right(spaceX, spaceY) == (position-1)){
		return true;
	}
}
function up(x, y){
	var Xpos = parseInt(x);
	var Ypos = parseInt(y);
	if (Ypos > 0){
		for (var i=0; i<cell.length; i++){
			if (parseInt(cell[i].style.top) + 100 == Ypos && parseInt(cell[i].style.left) == Xpos){
				return i;
			}
		}
	} else {
		return -1;
	}
}
function right (x, y){
	var Xpos = parseInt(x);
	var Ypos = parseInt(y);
	if (Xpos < 300){
		for (var i =0; i<cell.length; i++){
			if (parseInt(cell[i].style.left) - 100 == Xpos && parseInt(cell[i].style.top) == Ypos){
				return i;
			}
		}
	}else{
		return -1;
	}
}
function down (x, y){
	var Xpos = parseInt(x);
	var Ypos = parseInt(y);
	if (Ypos < 300){
		for (var i=0; i<cell.length; i++){
			if (parseInt(cell[i].style.top) - 100 == Ypos && parseInt(cell[i].style.left) == Xpos){
				return i;
			}
		}
	}else{
		return -1;
	}
}
function left(x, y){
	var Xpos = parseInt(x);
	var Ypos = parseInt(y);
	if (Xpos > 0){
		for (var i = 0; i < cell.length; i++){
			if (parseInt(cell[i].style.left) + 100 == Xpos && parseInt(cell[i].style.top) == Ypos){
				return i;
			}
		}
	}else{
		return -1;
	}
}
function swap(position){
	var temp = cell[position].style.top;
	cell[position].style.top = spaceY;
	spaceY = temp;
	temp = cell[position].style.left;
	cell[position].style.left = spaceX;
	spaceX = temp;
}
function checkWin(){
	var check = true;

	for (var i=0; i<cell.length; i++){
		var yAxis= parseInt(cell[i].style.top);
		var xAxis = parseInt(cell[i].style.left);

		if( (xAxis != i%4*100) || (yAxis != (parseInt(i/4)*100) )){
			check = false;
		}
	}

	if(check && flag){
		if(time<besttime){
			besttime=time;
			document.getElementById('besttime').innerHTML=time;
		}
		if(moves<bestmoves){
			bestmoves=moves;
			document.getElementById('bestmoves').innerHTML=moves;
		}
		clearInterval(timer);
		document.getElementById('timer').innerHTML=time;
		document.getElementById('aud').pause();
		document.getElementById('aud2').play();
		flag=false;
    document.getElementById('uniq').style.visibility='visible';
    var ret=document.getElementById('button');
    ret.onclick = function(){
      document.getElementById('uniq').style.visibility='hidden';
    }
	}
}
