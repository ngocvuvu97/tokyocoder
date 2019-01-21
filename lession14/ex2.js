/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    var res=1
    for( i of arr){
        res=res*i
    }
    return res
}

console.log(multiply([2, 3, 4])); // expect: 24