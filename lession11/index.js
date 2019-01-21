/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
var rectangl = {
    width : 9,
    height : 10,
    getwidth() {
        return this.width
    },
    getheight(){
        return this.height
    },
    getArea(){
        return this.width * this.height
       
    }
}
console.log(rectangl.getheight());
console.log(rectangl.getArea());

