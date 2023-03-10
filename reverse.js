function reverse (a){
  let reverseString = a.split("").reverse().join("");
  console.log(reverseString)
}

const args = process.argv.slice(2);
reverse(args[0])