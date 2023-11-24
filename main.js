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

    // Delete button functionality
    var dltbtn = document.createElement("BUTTON");
    var t = document.createTextNode("Delete User");
    dltbtn.onclick = () =>{
      localStorage.removeItem(Myobj.email);
      userList.removeChild(li);
    }
    dltbtn.appendChild(t);
    li.appendChild(dltbtn)
    userList.appendChild(li);

    // Edit button functionality
    var editbtn = document.createElement("BUTTON");
    var t = document.createTextNode("Edit User");
    editbtn.onclick = () =>{
     console.log(document.getElementById('name').value = Myobj.name);
      document.getElementById('email').value = Myobj.email;
      localStorage.removeItem(Myobj.email);
      userList.removeChild(li);
    }
    editbtn.appendChild(t);
    li.appendChild(editbtn)
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

