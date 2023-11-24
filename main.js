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
    let Myobj = {
      name : e.target.name.value,
      email : e.target.email.value
  };
  
  const storedFormData = JSON.parse(localStorage.getItem('Myobj')) || [];
  storedFormData.push(Myobj);

  localStorage.setItem(Myobj.email , JSON.stringify(storedFormData));
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Delete");
    x.onclick = () =>{
      localStorage.removeItem(Myobj.email);
      userList.removeChild(li);
    }
    x.appendChild(t);
    li.appendChild(x)
    userList.appendChild(li);
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

