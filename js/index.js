
let name = document.querySelector(".name");
let comment= document.querySelector(".comment");
let subBtn=document.querySelector(".subBtn")
let allPost=document.querySelector(".allPost");


let array=[];

subBtn.addEventListener("click",()=>{
if(!name.value||!comment.value){
  
  allPost.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-danger">Please Write something in both section.</h5>
  </div>
</div>`
  
  
}else if(name.value.length<3 ||comment.value.length<7 ){
         allPost.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-danger">Name have to be at least 3 & comment 7.</h5>
  </div>
</div>`
         
}
else{
  array.push({
    name:name.value,
    comment:comment.value
});
 
allPost.innerHTML=""
display()
}


 console.log(typeof(name.value))
    
})


function display(){
    array.map(item=>{
        allPost.innerHTML+=`<div class="modal-content rounded-3 shadow mt-5 bg-dark-subtle" style="width: 18rem;">
            <div class="modal-body p-4 text-center">
              <h5 class="mb-0">${item.name}</h5>
              <p class="mb-0">${item.comment}</p>
            </div>
            <div class="modal-footer flex-nowrap p-0">
              <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-5 border-end bg-info text-bg-success"><strong>Edit</strong></button>
              <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-5 bg-danger text-bg-success" data-bs-dismiss="modal">Delete</button>
            </div>
          </div>`
    })
}
