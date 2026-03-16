"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cases = [
    ["Racecar", true],
    ["hello", false],
    ["A man, a plan, a canal: Panama", true],
    ["12321", true],
    ["12345", false]
];
function normalize(s) {
    return s.replace(/[^a-z0-9]/gi, "").toLowerCase();
}
function isPalindrome(s) {
    const n = normalize(s);
    return n === n.split("").reverse().join("");
}
let failures = 0;
for (const [input, expected] of cases) {
    const got = isPalindrome(input);
    const ok = got === expected;
    console.log(`${input} -> expected=${expected} got=${got} ${ok ? "OK" : "FAIL"}`);
    if (!ok)
        failures++;
}
process.exit(failures === 0 ? 0 : 2);
