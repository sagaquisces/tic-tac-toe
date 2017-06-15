//business logic

function Space (x,y,id) {
	this.x = x;
  this.y = y;
	this.id = id;
}

function Board () {
	this.board = [];
}

Board.prototype.findSpace = function(x,y) {
	for (i=0; i<this.board.length; i++) {
    var tempX = this.board[i].x;
    var tempY = this.board[i].y;
    if (x == tempX && y == tempY) {
      return this.board[i];
    }
  }
  return "not found";
}

function Player (mark) {
  this.mark = mark;
}

Player.prototype.getMark = function() {
  return this.mark;
}

var space1 = new Space (0,0,space1);
var space2 = new Space (0,1,space2);
var space3 = new Space (0,2,space3);
var space4 = new Space (1,0,space4);
var space5 = new Space (1,1,space5);
var space6 = new Space (1,2,space6);
var space7 = new Space (2,0,space7);
var space8 = new Space (2,1,space8);
var space9 = new Space (2,2,space9);


var myBoard = new Board();

myBoard.board.push(space1);
myBoard.board.push(space2);
myBoard.board.push(space3);
myBoard.board.push(space4);
myBoard.board.push(space5);
myBoard.board.push(space6);
myBoard.board.push(space7);
myBoard.board.push(space8);
myBoard.board.push(space9);


console.log(myBoard.findSpace(1,2));

//interface logic

$(document).ready(function () {
	alert ("hi");
});
