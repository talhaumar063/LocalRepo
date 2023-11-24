const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}

// Store user detail in local Storage
// function saveToLocalStorage(e){
//   e.preventDefault();
//   const name = e.target.name.value;
//   const email = e.target.email.value;
//   localStorage.setItem('name' , name);
//   localStorage.setItem('email' , email);
// }

// Store user detail using object in local Storage
function saveToLocalStorage(e){
  e.preventDefault();
  let Myobj = {
      name : e.target.name.value,
      email : e.target.email.value
  };
  
  let Myobj_Serialize = JSON.stringify(Myobj);
  
  localStorage.setItem("Myobj" , Myobj_Serialize);

  let Myobj_deserialize = JSON.parse(localStorage.getItem("Myobj"));
  console.log(Myobj_deserialize);
}
