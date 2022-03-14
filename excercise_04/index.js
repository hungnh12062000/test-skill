const bambooAirways = [
  {
    Dep_code: "SGN",
    Arv_code: "HAN",
    Dep_date: new Date("2022-03-12"),
    Arv_date: new Date("2022-03-12"),
    Class: "Eco Saver",
    Duration: 7800,
  },
  {
    Dep_code: "HAN",
    Arv_code: "DAD",
    Dep_date: new Date("2022-03-12"),
    Arv_date: new Date("2022-03-12"),
    Class: "Eco Basic",
    Duration: 7500,
  },
  {
    Dep_code: "HUI",
    Arv_code: "SGN",
    Dep_date: new Date("2022-03-12"),
    Arv_date: new Date("2022-03-12"),
    Class: "Bus Flex",
    Duration: 4800,
  },
  {
    Dep_code: "PQC",
    Arv_code: "SGN",
    Dep_date: new Date("2022-03-14"),
    Arv_date: new Date("2022-03-14"),
    Class: "Eco Flex",
    Duration: 3600,
  },
];

// add key NDuration
bambooAirways.forEach(function (item, index) {
  let obj = {
       NDuration: secondsToHms(item.Duration)
  }
  let newObj = {...item, ...obj};
  console.log(newObj); 
});


// function chuyen doi time
function secondsToHms(d) {
     d = Number(d);
     let h = Math.floor(d / 3600);
     let m = Math.floor((d % 3600) / 60);
     let s = Math.floor((d % 3600) % 60);
     
     let hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
     let mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
     let sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
     return hDisplay + mDisplay + sDisplay;
}
// console.log(secondsToHms(60));
