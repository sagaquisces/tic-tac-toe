//business logic
row0Array = [];
row1Array = [];
row2Array = [];
col0Array = [];
col1Array = [];
col2Array = [];
diagFwdArray = [];
diagBackArray = [];


function Space (x,y,id) {
	this.x = x;
  this.y = y;
	this.id = id;
	this.markedBy = "";
}

Space.prototype.xCoordinate = function () {
	return this.x;
}

Space.prototype.yCoordinate = function () {
	return this.y;
}

Space.prototype.markSpace = function (player) {
	this.markedBy = player.mark;
}

Space.prototype.clicked = function (element) {
	var owner = (player_x.active ? player_x.getMark() : player_o.getMark());
	if (owner === "X") {
		$(element).addClass("xImage");
		player_x.active = false;
		player_o.active = true;
	} else {
		$(element).addClass("oImage")
		player_o.active = false;
		player_x.active = true;
	}
	$(element).removeClass('hover');
	$(element).unbind('click');

  alert (this.xCoordinate());
}

function Board () {
	this.board = [];
}

Board.prototype.makeBoard = function () {
	var tableHtml = ""
	tableHtml += "<tr>"
	for (var i=0; i<this.board.length; i++) {

		if (i !== 0 && i % 3 === 0 && i !== this.board.length) {
			tableHtml += "</tr><tr>";
		}
		tableHtml += "<td id='" + this.board[i].id + "' class='hover'></td>";
	}
	tableHtml += "</tr>";
	return tableHtml;
}

Board.prototype.findSpace = function(x,y) {
	for (var i=0; i<this.board.length; i++) {
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
	this.active = false;
}

Player.prototype.getMark = function() {
  return this.mark;
}

var myBoard = new Board();

var tempX = 0;
var tempY = 0;
var tempCounter = 1;
var tempObj={};

for (var x=0; x < 3; x++) {

	for (var y=0; y<3; y++ ) {
		var tempObj = new Space (x,y,"space" + tempCounter);
		myBoard.board.push(tempObj);
		tempCounter ++;
	}
}

player_x = new Player("X");
player_x.active = true;
player_o = new Player("O");


//interface logic

$(document).ready(function () {

	var boardHtml =myBoard.makeBoard();

	$('table').append(boardHtml);

	var tempId = "";
	var space = {};

	for (a=0;a<myBoard.board.length;a++) {
		space = myBoard.board[a];
		alert(space.xCoordinate());
	  tempId = "#" + space.id;
		$(tempId).click(function() {
	  	space.clicked(this);
		});
	}

	// $("#space1").click(function() {
	// 	var space = myBoard.board[0];
  // 	space.clicked(this);
	// });
	//
	// $("#space2").click(function() {
	// 	var space = myBoard.board[1];
  // 	space.clicked(this);
	// });
	//
	// $("#space3").click(function() {
	// 	var space = myBoard.board[2];
  // 	space.clicked(this);
	// });
	//
	// $("#space4").click(function() {
	// 	var space = myBoard.board[3];
  // 	space.clicked(this);
	// });
	//
	// $("#space5").click(function() {
	// 	var space = myBoard.board[4];
  // 	space.clicked(this);
	//
	// });
	// $("#space6").click(function() {
	// 	var space = myBoard.board[5];
  // 	space.clicked(this);
	// });
	// $("#space7").click(function() {
	// 	var space = myBoard.board[6];
  // 	space.clicked(this);
	// });
	// $("#space8").click(function() {
	// 	var space = myBoard.board[7];
  // 	space.clicked(this);
	// });
	// $("#space9").click(function() {
	// 	var space = myBoard.board[8];
  // 	space.clicked(this);
	// });
});
