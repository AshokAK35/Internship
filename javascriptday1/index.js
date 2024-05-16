// var age=40;
// console.log(age);


// var numberone=10;
// var numbertwo=20;

// var sum= numberone + numbertwo
// var sub= numberone - numbertwo
// var multi = numberone * numbertwo
// var div = numberone / numbertwo

// console.log(sum)
// console.log(sub)
// console.log(multi)
// console.log(div)

// var name= "Ashok";
// var address = "Chitwan";
// var age = "22";
// console.log(`Hello My name is ${name}. I live in ${address} and I am ${age} years old.`)
// const students ={
//     itemname:"Ashok",
//     address:"Chitwan",
//     age:"22",
//     color:"red",
//     price:"200",
//     description:" thsi is good good very good item",
// }   
// console.log(students.itemname)









// const person={
//     name:"Ashok",
//     lastname:"Subedi",
//     bloodgroup:"B+",
//     diseases:"Covid",
//     country:"Nepal",
//     age:"22",
//     id:"12345",

// //     fullname:function(){
// //         return this.name + " " + this.lastname;


// //    }
// }
// // console.log(person.fullname()); 
// console.log(person);

























// const name=[
//     "ashok","subedi","B+","Covid","Nepal","22","12345"
// ];

// name.forEach(name => 
//     {
//         console.log(name);

// });





// const student=[
//     "ashok","aakar","roshika"
// ]
// const newstudent=student.map(student =>
//     {
//         return student + "dai";  
//     });
//     console.log(newstudent);



    const fruits = [
        "Apple", "Banana", "Orange", "Grape", "Strawberry", "Watermelon", "Pineapple", "Mango", "Kiwi", "Blueberry",
        "Cherry", "Peach", "Pear", "Plum", "Raspberry", "Lemon", "Lime", "Coconut", "Pomegranate", "Avocado",
        "Apricot", "Blackberry", "Cantaloupe", "Cranberry", "Fig", "Grapefruit", "Guava", "Honeydew", "Kumquat", 
        "Lychee", "Nectarine", "Passionfruit", "Persimmon", "Tangerine", "Clementine", "Dragonfruit", "Jackfruit", 
        "Papaya", "Rambutan", "Starfruit", "Mulberry", "Boysenberry", "Elderberry", "Gooseberry", "Rhubarb", 
        "Tamarillo", "Tamarind", "Ackee", "Bilberry", "Blackcurrant", "Breadfruit", "Buddha's Hand", "Chayote", 
        "Damson", "Durian", "Feijoa", "Jujube", "Kiwano", "Loquat", "Mamey Sapote", "Mangosteen", "Marionberry", 
        "Miracle Fruit", "Pawpaw", "Prickly Pear", "Salak", "Salmonberry", "Sapodilla", "Soursop", "Ugli Fruit", 
        "Yuzu", "Pitaya", "Carambola", "Longan", "Cherimoya", "Sapote", "Tamarillo", "Quince", "Bergamot", 
        "Tangelo", "Ugni", "Surinam Cherry", "Pepino", "Muscadine", "Pepino", "Feijoa", "Gac", "Finger Lime", 
        "Horned Melon", "Atemoya", "Canistel", "Black Sapote", "Barbados Cherry", "Bignay", "Bael", "Bacupari", 
        "Calabash", "Cupuaçu", "Elephant Apple"
      ];


      // find the lenght of the array and print it
      
      
    //   console.log(fruits.length);
  

      // to make all uppercase

      const fruitsupper=fruits.map(fruits =>
        {
            return fruits.toUpperCase();    
        });

        console.log(fruitsupper);


        // for asceding order
       
       
       
       //error vako

       fruits.forEach(fruit => {
        console.log(fruit );
       
       });
    //    console.log(fruits.sort());
       console.table(fruits.sort().reverse());



        // fruits chha ki chaina vanera check garne



        // console.log(fruits.includes("Cherry"));



        // aafule kojheko fruits ko index umber  check garne


        // console.log(fruits.indexOf("Cherry"));



        // const addsagar = fruits.splice(10,100,"Sagar");
        // console.table(fruits.toString());


        const info={
            name:"Ashok",
            age:"22",
            bloodgroup:"B+",
            country:"Nepal",
            id:"12345",
            disease:"Covid"
        }
        const newinfo={...info,age:"23"}
        console.log(newinfo);




