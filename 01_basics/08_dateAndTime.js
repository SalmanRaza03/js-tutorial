//Dates

const myDate = new Date();

//to Functions of date and time

// console.log(myDate);//2024-03-08T02:58:37.720Z
// console.log(typeof myDate);//object
// console.log(myDate.toString());//Fri Mar 08 2024 02:58:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Fri Mar 08 2024
// console.log(myDate.toISOString());//2024-03-08T03:00:59.716Z
// console.log(myDate.toJSON());//2024-03-08T03:01:34.523Z
// console.log(myDate.toLocaleDateString());//3/8/2024
// console.log(myDate.toLocaleString());//   3/8/2024, 3:02:41 AM
// console.log(myDate.toLocaleTimeString());//3:03:41 AM
// console.log(myDate.toTimeString());//03:04:20 GMT+0000 (Coordinated Universal Time)

//get functions of date and time

// console.log(myDate.getDate());//8
// console.log(myDate.getDay());//5
// console.log(myDate.getHours());//3
// console.log(myDate.getTime());//1709868890742
// console.log(myDate.getMinutes());//34
// console.log(myDate.getSeconds());//50
// console.log(myDate.getMonth());//2
// console.log(myDate.getFullYear());//2024

//NOTE: The months in javascript start from 0, that is, january-0 and february-1 and march-2 and so on.....

const myNewDate = new Date(2023, 8, 27, 18, 54, 30);//(year, month, date, hours, minutes, seconds)
// console.log(myNewDate.toString());

const createDate = new Date("2003-08-27");
// console.log(createDate.toString());

//TimeStamp

const myTimeStamp = Date.now();
// console.log(myTimeStamp);//1709868797169
// console.log(createDate.getTime());//1061942400000
// console.log(Math.floor(myTimeStamp/1000));//1709869078........this is to convert milliseconds to seconds.

//In JavaScript, the concept of time is based on the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.

//custom modification of toLocaleString()

const secondDate = new Date();
console.log(secondDate.toLocaleString('default', {weekday:"long"}));