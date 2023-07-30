# Notes

## Description

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

## Domain
- input: string (can contain any char)
- output: boolean

### Rules
- case insensitive
- count X and O
- true if number of X equal to number of O, false otherwise

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG

---

TODO:

# Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works construction ✅
- it should return false for input equal to "o" ✅
- it should return true for input equal to "xo" ✅
- it should return false for input equal to "xxo" ✅
- it should return true for input equal to "xxoo" ✅
- it should return true for input equal to "ooxXm" ✅