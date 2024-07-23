let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let refno = document.getElementById('refno');
let comments = document.getElementById('comments');
let form = document.getElementById('form');

function validate() {
    if(firstname.value.trim()===""){
         alert("Please enter firstname")
         firstname.focus()
         return false
    }else if(email.value.trim()===""){
        alert("Please enter email address")
        email.focus()
        return false
    }else if(refno.value.trim()===""){
        alert("Please enter Ref NO.")
        refno.focus()
        return false
    }else if(comments.value.trim()===""){
        alert("Please enter comments")
        comments.focus()
        return false
    }else{
        return true
    }
}

document.querySelector("#submit")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validate();
});