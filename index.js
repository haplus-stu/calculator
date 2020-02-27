let l_side = 0;
let r_side = 0;
let parsed_l, parsed_r;
let ope = [];
let flag = 1; //1...左辺入力状態、2...演算子入力状態、3...右辺入力状態
let result = document.getElementById('result');

function change_other_number(){
  let bn = document.getElementById("basenumber");
}

function replace_str(a, b) {
  result.value = result.value.replace(a, b);
}
//かんたんな四則演算ができるところまでとりあえず実装する。

function set_value(){
      l_side = result.value;
      r_side = 0;
      console.log('l_side :' + l_side, 'r_side :' + r_side, 'ope :' + ope);
}

//数字入力判定関数
function input(num) {
  
  if (flag == 1) {
    replace_str(0, '');
    l_side = result.value = result.value + num.value;
    console.log('l_side :' + l_side);
  } else if (flag == 2) {
    replace_str(l_side, '');
    r_side = result.value = result.value + num.value;
    r_side.trim();
    console.log('r_side :', r_side);
  }
  if (num.value == 'C') clear();
  change_other_number();
}

function operator(num) {
  ope.unshift(num.value); //演算子記憶
  console.log('ope_length :' + ope.length, 'ope :' + ope, 'l_side :' + l_side, 'r_side :' + r_side);
  if (l_side != 0 && r_side != 0 && ope.length > 1) calc();
  flag = 2;
}

function calc() {
  console.log(ope);

  parsed_l = parseInt(l_side);
  parsed_r = parseInt(r_side);
  switch (ope.pop()) {
    case '+':
      result.value = parsed_l + parsed_r;
      set_value();
      break;
    case '-':
      result.value = parsed_l - parsed_r;
      set_value();
      break;
    case '×':
      result.value = parsed_l * parsed_r;
      set_value();
      break;
    case '÷':
      result.value = parsed_l / parsed_r;
      set_value();
      break;
    case '^':
     result.value = parsed_l**parsed_r;
      set_value();
     break;
  }
}

function clear() {
  if (l_side != 0 && r_side == 0) {
    l_side = 0;
  } else if (l_side != 0 && r_side != 0) {
    r_side = 0;
  }
  flag = 1;
  result.value = 0;
  console.log('l_side :' + l_side, 'r_side :' + r_side,'flag :'+flag);
}
