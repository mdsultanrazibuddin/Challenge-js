

/* ০. রিকার্সন বুঝলে চমৎকার, আর না বুঝলে আপাতত রিকার্সন না বুঝলে সেটাকে সাইডে রেখে দাও।
শুধু মাথায় রাখো রিকার্সন নামে একটা জিনিস আছে।
সেটা একটা ফাংশনকে নিজের ভিতর থেকে কল করে।  */
//Sum of this: 1+2+3+....+n using Recursive Function 
const n=100;
function sumOfTheSeries(num){
    if(num>1){
        return num+sumOfTheSeries(num-1);
    }else{
        return num;
    }
}
const total=sumOfTheSeries(n);
console.log(total);



// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetIntoInch(feet) {
    var inches = feet * 12;
    return inches;
}

let myFeet = 8;
let result = feetIntoInch(myFeet);

console.log( 'the result is ' + result +  ' inches');

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(centimeters) {
    
    var meters = centimeters / 100;
    return meters ;
}
let myCentimeters = 500;
let result = centimeterToMeter(myCentimeters);

console.log( 'This result is'  +  result +  'meters');


 /* 
 ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
*/

function paperRequirements (book1, book2 , book3) {
    
    let firstBookPage = book1 * 100;
    let secondBookPage = book2 * 200;
    let thirdBookPages = book3 * 300;
    let totalPages = firstBookPage + secondBookPage + thirdBookPages;
    return totalPages;
}
let firstBookcopy =10;
let secondBookCopy = 20;
let thirdBookCopy = 30;

let result =  paperRequirements(firstBookcopy, secondBookCopy, thirdBookCopy);
console.log( 'you  need total  '  + result +  '  page to print all three books');


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend (array) {
    let largestNames = "";
    for (let i = 0; i < array.length; i++) {
       if (array[i].length > largestNames.length) {
           
        largestNames = array[i]
       }
        
    }
    return largestNames;

};
let bestFriendList = ['komola', 'jorina', 'lodon', 'shaymola', 'robban', 'malinga'];
let largestFriend = bestFriend(bestFriendList);

console.log(largestFriend);



// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

function myArray(inputArray) {
    let positiveArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= 0) {
            positiveArray.push(inputArray[i]);
        }
        else{
            break;
        }
        
    }
    return positiveArray;
}
let newArray = [1,2,3,4,5,6, 0, -1, -2, -3, -4, -5, -6, 7, 8, 9, 10, -7, -8, -9, -10]
let array = myArray(newArray);

console.log(array);