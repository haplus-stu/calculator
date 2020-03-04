let l_side = 0;
let r_side = 0;
let parsed_l, parsed_r;
let ope = [];
let flag = 1; //1...左辺入力状態、2...演算子入力状態、3...右辺入力状態
let decimal_point = 0;
let d_0 = 0;
let result = document.getElementById('result');
let keyname;

function change_other_number() {
  let bn = document.getElementById('basenumber');
  bn.value =
    '2進数 :' +
    parseInt(result.value).toString(2) +
    '\n' +
    '16進数 :' +
    parseInt(result.value).toString(16);
}

function replace_str(a, b) {
  result.value = result.value.replace(a, b);
}

function set_value() {
  l_side = result.value;
  r_side = 0;
  d_0 = 0;
  //console.log('l_side :' + l_side, 'r_side :' + r_side, 'ope :' + ope);
}

//数字入力判定関数
function input(num) {
  if (num.value == '.') {
    decimal_point = 1;
    d_0 = 1;
  }

  if (result.value == '0' && d_0 == 0) replace_str(0, '');

  if (flag == 1) {
    l_side = result.value = result.value + num.value;
    //console.log('l_side :' + l_side);
  } else if (flag == 2) {
    replace_str(l_side, '');
    r_side = result.value = result.value + num.value;
    r_side.trim();
    //console.log('r_side :', r_side);
  }

  //if (check_sign <= 0) replace_str('', '+/-');

  if (num.value == 'C') clear();
  if (num.value == 'AC') all_clear();

  change_other_number();
}

function operator(num) {
  ope.unshift(num.value); //演算子記憶
  //console.log('ope_length :' + ope.length, 'ope :' + ope, 'l_side :' + l_side, 'r_side :' + r_side);

  if (num.value == '%') {
    r_side = 100;
    calc();
  }

  if (l_side != 0 && r_side != 0 && ope.length > 1) calc();
  flag = 2;
}

function calc() {
  //console.log(ope);

  if (decimal_point == 1) {
    parsed_l = parseFloat(l_side);
    parsed_r = parseFloat(r_side);
  } else if (decimal_point == 0) {
    parsed_l = parseInt(l_side);
    parsed_r = parseInt(r_side);
  }

  switch (ope.pop()) {
    case '+':
      result.value = parsed_l + parsed_r;
      set_value();
      change_other_number();
      break;
    case '-':
      result.value = parsed_l - parsed_r;
      set_value();
      change_other_number();
      break;
    case '×':
      result.value = parsed_l * parsed_r;
      set_value();
      change_other_number();
      break;
    case '÷':
      result.value = parsed_l / parsed_r;
      set_value();
      change_other_number();
      break;
    case '^':
      result.value = parsed_l ** parsed_r;
      set_value();
      change_other_number();
      break;
    case '%':
      result.value = parsed_l / parsed_r;
      set_value();
      break;
  }
}

function clear() {
  console.log(result.value.length);
  replace_str('', 'C');
  if (flag == 1) {
    l_side = result.value = 0;
    d_0 = 0;
  } else if (flag == 2) {
    r_side = result.value = 0;
    d_0 = 0;
  }
  if (result.value == '') result.value = 0;
}

function all_clear() {
  l_side = 0;
  r_side = 0;
  ope.length = 0;
  flag = 1;
  result.value = 0;
  d_0 = 0;
  //console.log('l_side :' + l_side, 'r_side :' + r_side, 'flag :' + flag);
}
