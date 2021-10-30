var canvas = new fabric.Canvas("mycanvas");
var ctx = canvas.getContext("2d");

var px = 50;
var py = 50;

var bh = 30;
var bw = 30;

player_obj = "";
block_obj = "";

function player_update() {
  fabric.Image.fromURL("player.png", function (Img) {
    player_obj = Img;
    player_obj.scaleToWidth(150);
    player_obj.scaleToHeight(150);
    player_obj.set({
      left: px,
      top: py,
    });
    canvas.add(player_obj);
  });
}

function block_update(get_Img) {
  fabric.Image.fromURL(get_Img, function (Img) {
    block_obj = Img;
    block_obj.scaleToWidth(bw);
    block_obj.scaleToHeight(bh);
    block_obj.set({
      left: px,
      top: py,
    });
    canvas.add(block_obj);
  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  kp = e.keyCode;
  console.log(kp);
  if (kp == "37") {
    left();
  } else if (kp == "38") {
    up();
  } else if (kp == "39") {
    right();
  } else if (kp == "40") {
    down();
  }
  if (kp == "67") {
    block_update("cloud.jpg");
  } else if (kp == "68") {
    block_update("dark_green.png");
  } else if (kp == "71") {
    block_update("ground.png");
  } else if (kp == "76") {
    block_update("light_green.png");
  } else if (kp == "82") {
    block_update("roof.jpg");
  } else if (kp == "84") {
    block_update("trunk.jpg");
  } else if (kp == "85") {
    block_update("unique.png");
  } else if (kp == "87") {
    block_update("wall.jpg");
  } else if (kp == "89") {
    block_update("yellow_wall.png");
  }
  if (e.shiftKey == true && kp == "80") {
    bw = bw + 10;
    bh = bh + 10;
    document.getElementById("cw").innerHTML = bw;
    document.getElementById("ch").innerHTML = bh;
  } else if (e.shiftKey == true && kp == "77") {
    bw = bw - 10;
    bh = bh - 10;
    document.getElementById("cw").innerHTML = bw;
    document.getElementById("ch").innerHTML = bh;
  }
}
