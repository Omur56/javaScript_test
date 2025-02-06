// alert("salam")
// const space = " ";
// const name = prompt("adnizi qeyd edin?");
// const age = prompt("yasinizi qeyd edin");

// let ish = confirm('bizimle ishlemeye razisinizmi?')
// let ishler = confirm('bizim ishlerimiz sizi qane edirmi?')
// alert( name + space+ age + space + ish + space + ishler + space + 'bizimle' + space + 'emekdashliq' + space +  'etdiyiniz' + space + 'ucun' + space + 'tesekkur' + space +  'edirik...');

// const age = prompt("How old are you?")

// if (age >= 18){
//     alert("let's go drink beer")
// }

// else if (age < 18 && age > 15){
// alert('Go whit us')
// }else{
//     alert('Go home')
// }
// if(age < 18){
//     alert("go home")
// }

// const age = 15;
// const checkin = false;

// if (age >= 15 && checkin) {
//   alert("olar");

// } else {
//   alert("Yox olmaz");
// }

// const age = prompt("neche yasiniz var?");

// if (age >= 18 && age <= 25) {
//   alert("sizin yasniz 18-25 araligindadir");

//   if (age >= 25 && age <= 30) {
//     alert("siz 25-30 yash arasindasiniz");
//   }
//   if (age >= 31 && age <= 40) {
//     alert("siz 31-40 yash arasindasiniz");
//   }
//   if (age >= 41 && age <= 50) {
//     alert("41-50 yash arasindasiniz")
//   }
//   if (age >= 51 && age <= 60) {
//     alert("51-60 yash arasindasiniz")
//     }
// } else if (age < 18 && age > 15) {
//   alert("siz 18 yashindan kiciksiniz.");
// }
//  else {
//   alert("15 yashdan kicik oldugnuz ucun size girish qadagandir");
// }

const number = prompt("birinci eded daxil edin: ");

const number_2 = prompt("ikinci ededi daxil edin: ");

if (number > number_2) {
  alert("birinci eded ikinci edededen boyukdur");
} else if (number < number_2) {
  alert("ikinci eded birinci ededden kicikdir");
} else if (number == number_2) {
  alert("edeler eynidir");
}
