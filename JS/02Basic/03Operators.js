// D = (L - S)/ L * 100;

var sellingPrice = 199;

var listPrice = 799;

var discount = ((listPrice  - sellingPrice) / listPrice) *100;

// console.log("Discount persentage :  "+ discount);

dis = Math.round(discount);

console.log(dis);
