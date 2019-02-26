function resetval(){
  document.getElementById('player1').innerHTML = 0;
  document.getElementById('seri1').innerHTML = 0;
  document.getElementById('cpu1').innerHTML = 0;
  player1  = 0;
  cpu1 = 0;
  seri1 = 0;
  reset();
  selesai = false;
}

function reset(){
  var i;
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

function win(turn){
  var betul = false;
  var idx;

  if ((CuS[1] == turn) && (CuS[2] == turn) && (CuS[3] == '0')){
    betul = true;
    idx = 3;
  }
  else if ((CuS[1] == turn) && (CuS[2] == '0') && (CuS[3] == turn)){
    betul = true;
    idx = 2;
  }
  else if ((CuS[1] == '0') && (CuS[2] == turn) && (CuS[3] == turn)){
    betul = true;
    idx = 1;
  }
  else if ((CuS[1] == turn) && (CuS[4] == turn) && (CuS[7] == '0')){
    betul = true;
    idx = 7;
  }
  else if ((CuS[1] == turn) && (CuS[4] == '0') && (CuS[7] == turn)){
    betul = true;
    idx = 4;
  }
  else if ((CuS[1] == '0') && (CuS[4] == turn) && (CuS[7] == turn)){
    betul = true;
    idx = 1;
  }
  else if ((CuS[1] == turn) && (CuS[5] == turn) && (CuS[9] == '0')){
    betul = true;
    idx = 9;
  }
  else if ((CuS[1] == turn) && (CuS[5] == '0') && (CuS[9] == turn)){
    betul = true;
    idx = 5;
  }
  else if ((CuS[1] == '0') && (CuS[5] == turn) && (CuS[9] == turn)){
    betul = true;
    idx = 1;
  }
  else if ((CuS[7] == turn) && (CuS[8] == turn) && (CuS[9] == '0')){
    betul = true;
    idx = 9;
  }
  else if ((CuS[7] == turn) && (CuS[8] == '0') && (CuS[9] == turn)){
    betul = true;
    idx = 8;
  }
  else if ((CuS[7] == '0') && (CuS[8] == turn) && (CuS[9] == turn)){
    betul = true;
    idx = 7;
  }
  else if ((CuS[3] == turn) && (CuS[6] == turn) && (CuS[9] == '0')){
    betul = true;
    idx = 9;
  }
  else if ((CuS[3] == turn) && (CuS[6] == '0') && (CuS[9] == turn)){
    betul = true;
    idx = 6;
  }
  else if ((CuS[3] == '0') && (CuS[6] == turn) && (CuS[9] == turn)){
    betul = true;
    idx = 3;
  }
  else if ((CuS[3] == turn) && (CuS[5] == turn) && (CuS[7] == '0')){
    betul = true;
    idx = 7;
  }
  else if ((CuS[3] == turn) && (CuS[5] == '0') && (CuS[7] == turn)){
    betul = true;
    idx = 5;
  }
  else if ((CuS[3] == '0') && (CuS[5] == turn) && (CuS[7] == turn)){
    betul = true;
    idx = 3;
  }
  else if ((CuS[2] == turn) && (CuS[5] == turn) && (CuS[8] == '0')){
    betul = true;
    idx = 8;
  }
  else if ((CuS[2] == turn) && (CuS[5] == '0') && (CuS[8] == turn)){
    betul = true;
    idx = 5;
  }
  else if ((CuS[2] == '0') && (CuS[5] == turn) && (CuS[8] == turn)){
    betul = true;
    idx = 2;
  }
  else if ((CuS[4] == turn) && (CuS[5] == turn) && (CuS[6] == '0')){
    betul = true;
    idx = 6;
  }
  else if ((CuS[4] == turn) && (CuS[5] == '0') && (CuS[6] == turn)){
    betul = true;
    idx = 5;
  }
  else if ((CuS[4] == '0') && (CuS[5] == turn) && (CuS[6] == turn)){
    betul = true;
    idx = 4;
  }
  if (betul){
    document.getElementById(idx).src="o.png";
    CuS[idx] = '2';
  }
  return betul;
}

function tengahKosong(){
  var betul = (CuS[5] == '0');
  if (betul){
    document.getElementById('5').src="o.png";
    CuS[5] = '2';
  }
  return betul;
}

function garpu(turn, oppose){
  var betul = false;

  if (CuS[5] == turn){
    if (CuS[1] == turn){
      if (CuS[2] == oppose){
        if (CuS[7] == '0'){
          document.getElementById('7').src="o.png";
          CuS[7] = '2';
          betul = true;
        }
      }
      else if (CuS[4] == oppose){
        if (CuS[3] == '0'){
          document.getElementById('3').src="o.png";
          CuS[3] = '2';
          betul = true;
        }
      }
    }
    else if (CuS[3] == turn){
      if (CuS[2] == oppose){
        if (CuS[9] == '0'){
          document.getElementById('9').src="o.png";
          CuS[9] = '2';
          betul = true;
        }
      }
      else if (CuS[6] == oppose){
        if (CuS[1] == '0'){
          document.getElementById('1').src="o.png";
          CuS[1] = '2';
          betul = true;
        }
      }
    }
    else if (CuS[7] == turn){
      if (CuS[4] == oppose){
        if (CuS[9] == '0'){
          document.getElementById('9').src="o.png";
          CuS[9] = '2';
          betul = true;
        }
      }
      else if (CuS[8] == oppose){
        if (CuS[1] == '0'){
          document.getElementById('1').src="o.png";
          CuS[1] = '2';
          betul = true;
        }
      }
    }
    else if (CuS[9] == turn){
      if (CuS[6] == oppose){
        if (CuS[7] == '0'){
          document.getElementById('7').src="o.png";
          CuS[7] = '2';
          betul = true;
        }
      }
      else if (CuS[8] == oppose){
        if (CuS[3] == '0'){
          document.getElementById('3').src="o.png";
          CuS[3] = '2';
          betul = true;
        }
      }
    }
  }
  return betul;
}

function oppositeCorner(){
  var betul = false;

  if ((CuS[1] == '1') && (CuS[9] == '0')) {
    document.getElementById('9').src="o.png";
    CuS[9] = '2';
    betul = true;
  }
  else if ((CuS[1] == '0') && (CuS[9] == '1')){
    document.getElementById('1').src="o.png";
    CuS[1] = '2';
    betul = true;
  }
  else if ((CuS[3] == '1') && (CuS[7] == '0')){
    document.getElementById('7').src="o.png";
    CuS[7] = '2';
    betul = true;
  }
  else if ((CuS[3] == '0') && (CuS[7] == '1')){
    document.getElementById('3').src="o.png";
    CuS[3] = '2';
    betul = true;
  }
  return betul;
}

function emptyCorner(){
  var betul = false;

  if (CuS[1] == '0'){
    document.getElementById('1').src="o.png";
    CuS[1] = '2';
    betul = true;
  }
  else if (CuS[3] == '0'){
    document.getElementById('3').src="o.png";
    CuS[3] = '2';
    betul = true;
  }
  else if (CuS[7] == '0'){
    document.getElementById('7').src="o.png";
    CuS[7] = '2';
    betul = true;
  }
  else if (CuS[9] == '0'){
    document.getElementById('9').src="o.png";
    CuS[9] = '2';
    betul = true;
  }
  return betul;
}

function emptySide(){

  var betul = false;
  if (CuS[2] == '0'){
    document.getElementById('2').src="o.png";
    CuS[2] = '2';
    betul = true;
  }
  else if (CuS[6] == '0'){
    document.getElementById('6').src="o.png";
    CuS[6] = '2';
    betul = true;
  }
  else if (CuS[4] == '0'){
    document.getElementById('4').src="o.png";
    CuS[4] = '2';
    betul = true;
  }
  else if (CuS[8] == '0'){
    document.getElementById('8').src="o.png";
    CuS[8] = '2';
    betul = true;
  }
  return betul;
}

function CPUtoMove(){


  if (win('2')){}
  else if (win('1')){}
  else if (tengahKosong()){}
  else if (garpu('2','1')){}
  else if (garpu('1','2')){}
  else if (oppositeCorner()){}
  else if (emptyCorner()){}
  else if (emptySide()){}

  if (menang()){
    cpu1 = cpu1 + 1;
    document.getElementById('cpu1').innerHTML = cpu1;
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
  else if (CuS[id] == '0'){
    document.getElementById(id).src="x.png";
    CuS[parseInt(id)] = '1';
    CPUtoMove();
  }
}

var CuS = ['X','0','0','0','0','0','0','0','0','0'] //0 : kosong, 1 : player, 2 : computer
var player1 = 0;
var seri1 = 0;
var cpu1 = 0;
var selesai = false;
