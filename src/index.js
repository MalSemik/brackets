module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let dict = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        dict[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }

    for (let j = 0; j < str.length; j++) {
        if (str[j] in dict && str[j] == dict[str[j]]) {
            if (str[j] == arr[arr.length - 1]) {
                arr.pop();
            } else {
                arr.push(str[j]);
            }
        } else {
            if (str[j] in dict) {
                let last = arr.pop();
                if (last != dict[str[j]]) {
                    return false;
                }
            } else {
                arr.push(str[j]);
            }
        }
    }
    if (arr.length != 0) {
        return false;
    }
    return true
}
