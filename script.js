function diamond(rows) {
    
    function generateStars(char, count) {
        let str = '';
        for (let i = 0; i < count; i++) {
            str += char;
        }
        return str;
    }

    for (let i = 1; i <= rows; i++) {
        var spaces = generateStars(" ", rows - i);
        var stars = generateStars("*", 2 * i - 1);
        console.log(spaces + stars);
    }

    for (let i = rows - 1; i > 0; i--) {
        var spaces = generateStars(" ", rows - i);
        var stars = generateStars("*", 2 * i - 1);
        console.log(spaces + stars);
    }
}

var userInput = parseInt(prompt("Enter a number of rows: "));

diamond(userInput)