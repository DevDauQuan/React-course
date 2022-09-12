var isPalindrome = function (head) {
    for (let i = 0; i < head.length; i++) {
        for (let j = head.length - 1; j > 0; j--) {
            if (i < j) {
                console.log(i, j)
                if (head[i] === head[j]) {
                    return true;
                }
                else {
                    return false;
                }
            }

        }
    }
};
const head = [1, 2, 3, 3, 2, 1];
console.log(isPalindrome(head))