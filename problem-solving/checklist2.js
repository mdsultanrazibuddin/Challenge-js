

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(centimeters) {
    
    var meters = centimeters / 100;
    return meters ;
}
let myCentimeters = 500;
let result = centimeterToMeter(myCentimeters);

console.log( 'This result is'  +  result +  'meters');

