/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
function recursive(obj){
    for( i in obj){
        if(typeof(obj[i]) == "object"){
            console.log(i)
            recursive(obj[i]);
        }else {
            console.log(i)
        }   
    }
}
     recursive(apartment)
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  