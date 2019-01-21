var a = 10;

var x = --a + a++;
console.log(x);
console.log(a)

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả 
/**
 * khai baos gias trij ban ddaauf a=0
 * --a : a sẽ đc trừ trước khi tính => a=9
 * a++ sau khi tính , a sẽ đc tăng lên 1 => a=9( và sau khi console.log(a sau x , a sẽ bằng 10))
 */