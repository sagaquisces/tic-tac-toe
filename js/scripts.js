//business logic

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

Space.prototype.makeClickable = {

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

var space1 = new Space (0,0,"space1");
var space2 = new Space (0,1,"space2");
var space3 = new Space (0,2,"space3");
var space4 = new Space (1,0,"space4");
var space5 = new Space (1,1,"space5");
var space6 = new Space (1,2,"space6");
var space7 = new Space (2,0,"space7");
var space8 = new Space (2,1,"space8");
var space9 = new Space (2,2,"space9");


myBoard.board.push(space1);
myBoard.board.push(space2);
myBoard.board.push(space3);
myBoard.board.push(space4);
myBoard.board.push(space5);
myBoard.board.push(space6);
myBoard.board.push(space7);
myBoard.board.push(space8);
myBoard.board.push(space9);

player_x = new Player("X");
player_x.active = true;
player_o = new Player("O");


//interface logic

$(document).ready(function () {

	var boardHtml =myBoard.makeBoard();

	$('table').append(boardHtml);

	$("#space1").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space2").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');
	});
	$("#space3").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space4").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).unbind('click');
	});
	$("#space5").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space6").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space7").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space8").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
	$("#space9").click(function() {
		var owner = (player_x.active ? player_x.getMark() : player_o.getMark())
  	if (owner === "X") {
			$(this).addClass("xImage")
			player_x.active = false;
			player_o.active = true;
		} else {
			$(this).addClass("oImage")
			player_o.active = false;
			player_x.active = true;
		}
		$(this).removeClass('hover');
		$(this).unbind('click');

	});
});
