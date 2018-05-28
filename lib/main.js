function main(num) {
    let resultArray = "";
    for (let i = num; i >= 0; i--) {
        if (i === 2) {
            resultArray += i + ` bottles of beer on the wall, ` + i + ` bottles of beer.\nTake one down and pass it around, ` + (i - 1) + ` bottle of beer on the wall.\n`
        } else if (i === 1) {
            resultArray += i + ` bottle of beer on the wall, ` + i + ` bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
        } else if (i === 0) {
            resultArray += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        } else {
            resultArray += i + ` bottles of beer on the wall, ` + i + ` bottles of beer.\nTake one down and pass it around, ` + (i - 1) + ` bottles of beer on the wall.\n`
        }
    }

    return resultArray;

}
module.exports = main;