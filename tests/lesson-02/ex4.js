const height = 170;
let idealWeight = 0;
let maximumWeight = 0;
let minimumWeight = 0;
maximumWeight = height % 100;
idealWeight = (maximumWeight * 9) / 10;
minimumWeight = (maximumWeight * 8) / 10;
console.log(`Cân nặng lý tưởng là ${idealWeight}` + ` ,cân nặng tối đa là ${maximumWeight}` + ` ,cân nặng tối thiểu là ${minimumWeight}`);