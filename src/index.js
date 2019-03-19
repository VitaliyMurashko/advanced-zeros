module.exports = function getZerosCount(number, base) {
    let num = 1;
    let power = 1;
    let j = 1;
    let i = 2;
    let multipliers = [];
    do {
        if (base % i == 0) {
            multipliers[j] = i;
            j++;
            base = base / i;
        } else {
            i++;
        };
    }
    while (i < base);
    multipliers[j] = i;


    for (i = 1; i <= multipliers.length; i++) {

        if (multipliers[i] - multipliers[i + 1] === 0) {
            num = multipliers[i];
            power++;
        } else if (multipliers[multipliers.length] - multipliers[multipliers.length - power] === 0) {
            num = multipliers[multipliers.length - power];
            power++;
            console.log(power);
        } else if (Math.pow(num, power) < multipliers[multipliers.length - 1]) {
            power = 1;
            num = multipliers[multipliers.length - 1];
        };

    };
    
    function zeros() {
        let counter = 0;
        for (var i = num; number / i >= 1; i *= num)
            counter += Math.floor(number / i);
        return(Math.floor(counter / power));
    }

    return zeros(number);
}