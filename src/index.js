document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const inptVal= document.getElementById("new-task-description");
  const tasks= document.getElementById("tasks");


  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li =document.createElement("li");
    let btn =document.createElement("button");
    btn.textContent=" X "
    li.textContent=`${inptVal.value}`
    li.appendChild(btn);
    tasks.appendChild(li);
 btn.addEventListener("click",delet)

  });
function  delet(e){
 e.target.parentNode.remove()
   };



});
