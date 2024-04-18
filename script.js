console.log("check if js working");
let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let bat =  document.querySelector(".bat");
let spider =  document.querySelector(".spider");
let robin =  document.querySelector(".robin");
let surfer =  document.querySelector(".surfer");
let mainImage =  document.querySelector(".mainImage");

button.onclick = function(){
  



  let answer1 = input1.value;
  console.log(answer1);
let answer2 = input2.value;
  console.log(answer2);
  

if(answer1 <= "30" && answer2 === "strong"){
document.querySelector("p").innerHTML="You are the web head (SPIDERMAN!)";
}
else if (answer1 >= "31" && answer2 === "smart"){
document.querySelector("p").innerHTML=("You are the Dark Knight (BATMAN!)");
}


if(answer1 >= "31" && answer2 === "strong"){
  document.querySelector("p").innerHTML="You are the former herald (SILVER SURFER!)";
  }
else if (answer1 <= "30" && answer2 === "smart"){
  document.querySelector("p").innerHTML=("You are The Boy Wonder (Robin!)");
  
}

};

