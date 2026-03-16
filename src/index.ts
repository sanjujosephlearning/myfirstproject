export {}

function normalize(s: string): string {
  return s.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function isPalindrome(s: string): boolean {
  const n = normalize(s);
  return n === n.split("").reverse().join("");
}

function printResult(input: string) {
  const result = isPalindrome(input);
  console.log(`${input} -> ${result ? "is a palindrome" : "is NOT a palindrome"}`);
  process.exit(0);
}

const arg = process.argv[2];
if (arg) {
  printResult(arg);
} else {
  // read from stdin if no argument provided
  process.stdout.write("Enter a word: ");
  let data = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", chunk => {
    data += chunk;
  });
  process.stdin.on("end", () => {
    data = data.trim();
    if (data.length === 0) {
      console.error("No input provided.");
      process.exit(1);
    }
    printResult(data);
  });
}
