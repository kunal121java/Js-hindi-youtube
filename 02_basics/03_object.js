//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
const Jsuser =  { 
     name :"Kunal",
     age  : 18,
     [mySym] : "mykey1 ",
     location : "Bihar",
     email : "kunal@google.com",
     greet : function(){
      console.log("hello JS user");
    },
     greettwo : function(){
    console.log( 'hello JS user is ${this.name}');
    
    }
};
//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser[mySym]);

//Jsuser.email = "kunal@chatpgtcom"//use to change the value of object
//Object.freeze(Jsuser)
//Jsuser.email ="kunal@microsoft.com"
//console.log(Jsuser);
//Jsuser.greeting = function(){
  //  console.log("hello JS user");
  //  }
//Jsuser.greetingtwo = function(){
  //  console.log('hello JS user ${this.name}');
   // }
Jsuser.greet();
Jsuser.greettwo();
