function submitData() {
    const form = document.getElementById('form');
    const formData = new FormData(form);
  
    fetch('connect.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('message').innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
 }

 document.querySelector("#submit")
.addEventListener("click",(event)=>{
    event.preventDefault();
    submitData();
});