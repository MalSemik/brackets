module.exports = function check(str, bracketsConfig) {
    // let i = 0;
    // let flag = false;
    // let configLen = bracketsConfig.length;
    // while (i < configLen) {
    //     flag = false;
    //     let bracketsJoin = bracketsConfig[i].join('');
    //     if (str.includes(bracketsJoin)) {
    //         str = str.replace(bracketsJoin, '')
    //         flag = true;
    //     }
    //     if (flag) {
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    // }
    // if (str.length) {
    //     return false;
    // }

    // return true;
    if (str.length % 2 != 0) {
        return false;
    }
    let arr = [];
    let dict = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        dict[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] in dict) {
            let last = arr.pop();
            if (last != dict[str[j]]) {
                return false;
            }
        } else {
            arr.push(str[j]);
        }
    }

    return true
}
