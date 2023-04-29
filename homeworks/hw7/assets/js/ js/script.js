function averageThreeNumbers(a, b, c) {
    let sum = x + y + z;
    let avg = sum / 3;
    return avg;
}

function createSentence(num, noun) {
    str1 = "On average, a Berkeley student has "
    str2 = " "
    str3 = "s"
    return str1 + num + str2 + noun + str3;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
avg = averageThreeNumbers(x, y, z)
sentence = createSentence(avg, "orca")
console.log(sentence);