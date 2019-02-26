function resetval(){
  document.getElementById('player1').innerHTML = 0;
  document.getElementById('seri1').innerHTML = 0;
  document.getElementById('player2').innerHTML = 0;
  player1  = 0;
  cpu1 = 0;
  player2 = 0;
  reset();
  selesai = false;
}

function reset(){
  var i;
  document.getElementById('pl2').style.color = "black";
  document.getElementById('pl1').style.color = "red";
  turn = 1;
  for (i =1; i<10; i++){
    document.getElementById(i).src="blank.png";
    CuS[i] = '0';
  }
}

function menang(){ //CPU menang

  var x = (((CuS[1] == '2') && (CuS[2] == '2') && (CuS[3] == '2'))
                ||((CuS[1] == '2') && (CuS[4] == '2') && (CuS[7] == '2'))
                ||((CuS[1] == '2') && (CuS[5] == '2') && (CuS[9] == '2'))
                ||((CuS[7] == '2') && (CuS[8] == '2') && (CuS[9] == '2'))
                ||((CuS[3] == '2') && (CuS[6] == '2') && (CuS[9] == '2'))
                ||((CuS[3] == '2') && (CuS[5] == '2') && (CuS[7] == '2'))
                ||((CuS[2] == '2') && (CuS[5] == '2') && (CuS[8] == '2'))
                ||((CuS[4] == '2') && (CuS[5] == '2') && (CuS[6] == '2')));
  return x;

}

function kalah() { //CPU kalah
  var x = (((CuS[1] == '1') && (CuS[2] == '1') && (CuS[3] == '1'))
                ||((CuS[1] == '1') && (CuS[4] == '1') && (CuS[7] == '1'))
                ||((CuS[1] == '1') && (CuS[5] == '1') && (CuS[9] == '1'))
                ||((CuS[7] == '1') && (CuS[8] == '1') && (CuS[9] == '1'))
                ||((CuS[3] == '1') && (CuS[6] == '1') && (CuS[9] == '1'))
                ||((CuS[3] == '1') && (CuS[5] == '1') && (CuS[7] == '1'))
                ||((CuS[2] == '1') && (CuS[5] == '1') && (CuS[8] == '1'))
                ||((CuS[4] == '1') && (CuS[5] == '1') && (CuS[6] == '1')));
  return x;
}

function seri(){
  var x;
  x = ((CuS[1] != '0') && (CuS[2] != '0') && (CuS[3] != '0')
                && (CuS[4] != '0') && (CuS[5] != '0') && (CuS[6] != '0')
                && (CuS[7] != '0') && (CuS[8] != '0') && (CuS[9] != '0'));
  return x;
}

function Cek(){

  if (menang()){

    player2 = player2 + 1;
    document.getElementById('player2').innerHTML = player2;
    selesai = true;
  }
  else if (kalah()){

    player1 = player1 + 1;
    document.getElementById('player1').innerHTML = player1;
    selesai = true;
  }
  else if (seri()){

    seri1 = seri1 + 1;
    document.getElementById('seri1').innerHTML = seri1;
    selesai = true;
  }
}

function change(id){
  if (selesai){
    selesai = false;
    reset();
  }
  else if (CuS[parseInt(id)] == '0') {
    if (turn == 1){
      document.getElementById(id).src="x.png";
      CuS[parseInt(id)] = '1';
      turn =2;

      document.getElementById('pl1').style.color = "black";
      document.getElementById('pl2').style.color = "red";
    }
    else if (turn ==2){
      document.getElementById(id).src="o.png";
      CuS[parseInt(id)] = '2';
      turn =1;
      document.getElementById('pl1').style.color = "red";
      document.getElementById('pl2').style.color = "black";
    }
    Cek();

  }
}

var CuS = ['X','0','0','0','0','0','0','0','0','0'] //0 : kosong, 1 : player, 2 : computer
var player1 = 0;
var seri1 = 0;
var player2 = 0;
var selesai = false;
var turn = 1; //1 : player1, 2 : player2
