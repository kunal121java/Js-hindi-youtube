// const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "25656"
tinderuser.name = "Kunal"
tinderuser.isLoggedIn = false

console.log(tinderuser);
const regularuser = {
    email: "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Kunal",
            lastname:"Pandey"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
