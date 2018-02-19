
var turn = 0;
var loopControl = new Array(7);


for(var i = 0; i < $('button').length; i++) {
  $('button').eq(i).click(findGray);
}

for(var d = 0; d < loopControl.length; d++) {
  loopControl[d] = $('button').length - 7;
}


function findGray() {
  for(i = $(this).index('button') % 7; i < loopControl[$(this).index('button') % 7]; i+=7) {
  }
  if ($('button').eq(i + 7).css('background-color') == null) {
   $('button').eq(i).addClass(toggle);
   loopControl[ i % 7] = i - 7;
  }
  else if($('button').eq(i + 7).css('background-color') !== 'rgb(128, 128, 128)') {
    $('button').eq(i).addClass(toggle);
    loopControl[i % 7] = i - 7;
  }
  testForWin();
}

function testForWin() {
  for(var rows = 0; rows < 6; rows++) {
    for(var column = 0; column < 8; column++) {
      console.log($('button').eq((rows * 6) + column).css('background-color'));
      if($('button').eq((rows * 6) + column).css('background-color') != 'rgb(128, 128, 128)') {
        if($('button').eq((rows * 6) + column).css('background-color') == $('button').eq((rows * 6) + column + 1).css('background-color')) {
          if($('button').eq((rows * 6) + column + 1).css('background-color') == $('button').eq((rows * 6) + column + 2).css('background-color')) {
            if($('button').eq((rows * 6) + column + 2).css('background-color') == $('button').eq((rows * 6) + column + 3).css('background-color')) {
              console.log("Winner is blue");
              break;
            }
          }
        }
      }
      if($('button').eq((rows * 6) + column).css('background-color') != 'rgb(128, 128, 128)') {
        if($('button').eq((rows * 6) + column).css('background-color') == $('button').eq((rows * 6) + column + 1).css('background-color')) {
          if($('button').eq((rows * 6) + column + 1).css('background-color') == $('button').eq((rows * 6) + column + 2).css('background-color')) {
            if($('button').eq((rows * 6) + column + 2).css('background-color') == $('button').eq((rows * 6) + column + 3).css('background-color')) {
              console.log("Winner is blue");
              break;
            }
          }
        }
      }
    }
  }
}

function toggle() {
    turn++;
  if(turn %2 === 0) {
    return 'turnRed';
  }
  else {
    return 'turnBlue';
  }
}
