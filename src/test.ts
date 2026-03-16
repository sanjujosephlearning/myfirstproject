export {}

const cases: Array<[string, boolean]> = [
  ["Racecar", true],
  ["hello", false],
  ["A man, a plan, a canal: Panama", true],
  ["14241", true],
  ["12345", false]
];

function normalize(s: string): string {
  return s.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function isPalindrome(s: string): boolean {
  const n = normalize(s);
  return n === n.split("").reverse().join("");
}

let failures = 0;
for (const [input, expected] of cases) {
  const got = isPalindrome(input);
  const ok = got === expected;
  console.log(`${input} -> expected=${expected} got=${got} ${ok ? "OK" : "FAIL"}`);
  if (!ok) failures++;
}

process.exit(failures === 0 ? 0 : 2);
