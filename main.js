var var1 = 5;
var var2 = 7;
var var5 = 56;
var var6 = 46;


console.log(var1 + var2);

function func1() {
  var3 = 6;
  var4 = 9;
  return var3 * var4;
}

console.log(func1());

function func2() {
  console.log("Hi, this is the console, inside the funciton");
}

func2();

console.log(56 == 45);
console.log(56 == 56);

if (var5 == var6) {
  console.log("The variables are equal to each other.");
} else {
  console.log("The variables aren't equal to each other.");
}

for (a = 0; a < 10; a++) {
  console.log(a + ". This is the Lopp");
}

var person = {
  name: "John",
  eyeColor: "Black",
  hairColor: "Brown"
}

console.log(person.name);