/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 *  rep:
 * for in lấy index, for of lấy giá trị index
 */
var a=[2,4,5,6,7,643243,454]
                        for(j in a){
                            console.log(j);
                            
                        }
                        for( i of a){
                            console.log(i);
                            

                        }
