let sum = 0;
// i = 2 because first two would be node.exe and file path
// process.argv returns array in string
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
