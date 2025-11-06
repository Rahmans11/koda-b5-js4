const check = [1, "satu", true, ["check1", "check2"], { checkSatu: "1" }];
let i = 0;
const tipeData = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  array: 0,
};

while (typeof check[i] !== "number") {
  if (check >= check[i]) {
    tipeData[check[i]]++;
  } else {
    i = i + 1;
  }
}

while (typeof check[i] !== String) {
  if (check >= check[i]) {
    tipeData[check[i]]++;
  } else {
    i = i + 1;
  }
}

while (typeof check[i] !== boolean) {
  if (check >= check[i]) {
    tipeData[check[i]]++;
  } else {
    i = i + 1;
  }
}

while (Array.isArray(check)) {
  if (check >= check[i]) {
    tipeData[check[i]]++;
  } else {
    i = i + 1;
  }
}

while (check instanceof Object) {
  if (check >= check[i]) {
    tipeData[check[i]]++;
  } else {
    i = i + 1;
  }
}

const keys = Object.keys(tipeData);
for (let i = 0; i < check.length; i++) {
  if (tipeData[keys[i]] != 0) {
    console.log(keys[i], tipeData[keys[i]], "buah");
  }
}