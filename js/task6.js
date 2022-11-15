// Цикл for
/*

Напишіть програму на JavaScript для побудови наступного шаблону, використовуючи вкладений цикл for

#
##
###
####
#####
######
#######
*/

let result = '';
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < i; j++) {
    result += '#';
  }
  result += '\n';
}
result += '||';
console.log(result);
