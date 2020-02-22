'use strict';

let tax = 1.1;
let result = document.getElementById('result');
let bn = document.getElementById('basenumber');
let number;

function replace_str(b_str, a_str) {
  result.value = result.value.replace(b_str, a_str);
}

function tax_value(i) {
  if (i == 8) {
    tax = 1.08;
  } else if (i == 10) {
    tax = 1.1;
  }
}

function change_base_number() {
  number = parseInt(result.value);
  console.log(number);
  if (Number.isNaN(number) == true) {
    bn.value = '2進数 :' + '' + '\n' + '16進数 :' + '';
  } else {
    bn.value = '2進数 :' + number.toString(2) + '\n' + '16進数 :' + number.toString(16);
  }
}

function input(num) {
  if (result.value == '0') {
    result.value = num.value;
  } else {
    result.value = result.value + num.value;
  }

  switch (num.value) {
    case 'tax':
      replace_str('tax', '*' + tax);
      calc();
      break;

    case '%':
      replace_str('%', '/100');
      calc();
      break;

    case '÷':
      replace_str('÷', '/');
      break;

    case '×':
      replace_str('×', '*');
      break;

    case 'C':
      result.value = '0';
      break;

    case '^':
      replace_str('^', '**');
      break;

    case '√':
      replace_str('√', ' ');
      result.value = Math.sqrt(parseInt(result.value));
      break;
  }

  change_base_number();

  //console.log(num.value);
}

function calc() {
  result.value = new Function('return ' + result.value)();
  change_base_number();
}
