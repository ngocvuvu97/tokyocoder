var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
/**
 * x=a-- => x=10 a=9
 * x=a-- + b++ => x=28 ,b=19
 * x=a-- + b++ - ++b => b=20  x=8
 * x = a-- + b++ - ++b - ++a; => a=10, x=-2
 */