var a = [1, 2, 3, 4, 5];
var b = [10, 20, 30];
/**
 * Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b. Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */
for( i of a){
    for(j of b){
        console.log(parseInt(i*j))
    }
}