const data = [1, 2, "satu", true, ["data1", "data2"], { dataSatu: "1" }, 3];

let dataNumber = 0
let dataString = 0
let dataBoolean = 0
let dataArray = 0
let dataObjek = 0

for(let i = 0; i < data.length; i++ ){
  if(typeof data[i] === 'number'){
    dataNumber = dataNumber + 1

  }  else if(typeof data[i] === 'string'){
    dataString = dataString + 1

  } else if(typeof data[i] === 'boolean'){
    dataBoolean = dataBoolean + 1

  } else if(Array.isArray(data[i])){
    dataArray = dataArray + 1

  } else if(data[i] instanceof Object){
    dataObjek = dataObjek + 1

  } else {
    console.log(`unexpected type of data`);
  }
}
console.log(`Tipe data Number ada ${dataNumber} buah`);
console.log(`Tipe data String ada ${dataString} buah`);
console.log(`Tipe data Boolean ada ${dataBoolean} buah`);
console.log(`Tipe data Array ada ${dataArray} buah`);
console.log(`Tipe data Objek ada ${dataObjek} buah`);