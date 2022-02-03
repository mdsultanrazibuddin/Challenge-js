// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

var numeric = 25;
var string = 'razib';
var boolean1 = true;
var boolean = false;

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

let myAge = 5;  // this is changable
const PI=3.1416;// this value is fixed
console.log(myAge,'\n',PI);
myAge++;
// PI++;        // we can't use this line
console.log(myAge,'\n',PI);

/* ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো।
তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো।
একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। */

var num1=10, num2=3;
let sum=num1+num2;
let sub=num1-num2;
let mul=num1*num2;
let div=num1/num2;
let mod=num1%num2;
console.log('sum: ',sum,'\nsub: ',sub,'\nmul: ',mul,'\ndiv: ',div,'\nmod: ',mod);

/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো।
যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান।
এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */

let applePrice = 10;
let mangoPrice = 5;
//this block is for chacking compare high or low
if(applePrice<mangoPrice){
    console.log('mango is expensive.');
}else if(applePrice>mangoPrice){
    console.log('apple is expensive.');
}
// this block is for chacking equal or not
if(applePrice==mangoPrice){
    console.log('both are same price.');
}else if(applePrice != mangoPrice){
    console.log('both are not same price.');
}
// this block is for chacking equal and small
if(applePrice<=mangoPrice){
    console.log('both are same price or mango price is higher then apple price.');
}
// this block is for chacking equal and high
if(applePrice>=mangoPrice){
    console.log('both are same price or mango price is lower then apple price.');
}

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। 
তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে।
অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। */


let moneyInPocket = 50;
let applePrice = 10;
// use of && (and) oparetor
if(moneyInPocket>20 && applePrice<15){
    //both condition is true for that this reasone it's working perfectly.
    console.log('yes i can able to buy apple');
}
// use of || (or) oparetor
applePrice=20;              //updated applePrice
let ifHeBuyItForMe=true;    
if(ifHeBuyItForMe || applePrice<15){    
    //1st condition is true but 2nd condition is false but still it's working.
    console.log('yes! i can able to eat apple');
}

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে।
শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে।
অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */


let todayWaitherIsGood=false;
if(todayWaitherIsGood){
    console.log('Go to school now');
}else{
    console.log('auto pass😜');
}

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে।
তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */


let counter = 7, hight=19;
while(counter<=hight){
    if(counter%2!=0){
        console.log(counter);
    }
    counter++;
}


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArrayElements = myArray.length; // Array এর উপাদান সংখ্যা বলবে
console.log(myArrayElements);

myArray[3] = "hello"; // ৪র্থ পজিশন অথবা ৩য় ইনডেক্সের মধ্যে যোগ করবে। (Index = Position - 1)
console.log(myArray);

myArray.push("world"); //শেষে যোগ করবে
console.log(myArray);

myArray.unshift("Javascript"); // শুরুতে যোগ করবে
console.log(myArray);

myArray.pop(); //শেষে বাদ দিবে
console.log(myArray);

myArray.shift(); // শুরুতে বাদ দিবে
console.log(myArray);

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে।
সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */


let arr = [-1,0,5,2,4,6,-1];
console.log('print array using for loop');
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log('print array using for of loop');
for(let singleItem of arr){
    console.log(singleItem);
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড়
সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে?
তাহলে তুমি সেই কোড করে ফেলো */


let arr = [-69,49,75,80,232,90,10,4,399,98,81];
for(const singleItem of arr){
    if(singleItem>80){
        console.log(singleItem);
    }
}

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে।
তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */


let num1=2;
var num2=6;
var num3=4;
function returnMult(no1,no2,no3){
    return no1*no2*no3;
}
const mul = returnMult(num1, num2, num3);
console.log(mul);

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */


let book ={
    name        : "Learn JavaScript Easy Way",
    page        : 100,
    authore     : "Rana",
    publisher   : "bolbo na",
    price       : 150
}
console.log(book);
book.price=99;
console.log('After Changing Book Price: ');
console.log(book);