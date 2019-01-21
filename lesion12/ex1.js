var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
/**
 * bởi vì a  và b là hai biến khác nhau
 * mỗi biến có một vùng tham chiếu riêng
 * nên khi so sánh, nó sẽ sai vì địa chỉ tham chiếu khác nhau
 */