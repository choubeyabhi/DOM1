let istatus=document.querySelector("h5");
let addFriend=document.querySelector('#add');
let flag=0;
addFriend.addEventListener('click',function(){
    if(flag==0){
    istatus.innerHTML="Friends";
    addFriend.innerHTML="Remove";
    addFriend.setAttribute('id','remove');
    istatus.style.color='green';
    flag=1;
    }
    else{
        istatus.innerHTML="Stranger";
        addFriend.innerHTML="Add Friend";
        remove.setAttribute('id','add');
    istatus.style.color='red';
    flag=0;

    }
})


