// let square =(num) =>num*num;

// let multiply = (a,b) => {
//     if (isNaN(a) || isNaN(b)) {
//         return 0;
//        }else{
//         return a*b;
//        }
// };

// let answer = square(4);

// console.log("Result:",answer);

// console.log("Result:",multiply(3,8));



// const orders =[
//     {id:1, item:"Smartphones",quantity:1},
//     {id:2, item:"A.C",quantity:1},
//     {id:3, item:"Maagi",quantity:3},
// ]

// let result = orders.find( (order) => order.item ==="Maagi")

// console.log(result);


// var MyFun=function(Name){
//     console.log("Hello"+Name);
// }
// MyFun("Naga");

// var MyFun=()=>{
//     return"This is arrow function";
// }
// console.log(MyFun());


const Task=() =>{
   function onclick(){
    console.log("open")
   }
return(
    <div className="move">
        <div className="w-40 h-16 border bg-red-200 text-center">
            submit
        </div>
       
    </div>
)
};
window.addEventListener("load", ()=>{
    Task.style.position = "absolute";
    Task.style.right = "absolute";
    Task.style.left = "absolute";
    Task.style.top = "absolute";
    Task.style.up = "absolute";
    


})



export default Task;
