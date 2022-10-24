let email = localStorage.getItem("email");

if (email == null || email.length == 4 ) {
  email = prompt("Veuillez saisir votre adresse e-mail !!");
  localStorage.setItem("email", email);
  while (email == null || email == "") {
    email = prompt("Veuillez saisir votre adresse e-mail !!!!");
    localStorage.setItem("email", email);
  }
}
let sendMessageButton = document.getElementById('sendMessage');
let btnLogout=document.getElementById('btnLogout');
sendMessageButton.disabled = true;
let form=document.getElementById("form");



let createSelectElement = function () {
  let select = document.createElement('select');
  select.style = "border:1px solid grey;padding:10px;border-radius: 5px; width: 100%";
  select.classList.add(["form-select", "form-select-lg", "mb-3"]);
  let option = document.createElement("option");
  option.innerText = "Selectionnez email";
  select.appendChild(option);

  return select;
}

let loadDataFromServer = async (url) => {



  try {
    let response = await fetch(url);
   console.log(response)
    if (response.status === 200) {
      let data = await response.json();
      let select = createSelectElement();
      data.forEach(element => {
        let newOption = document.createElement("option");
        newOption.innerHTML = element.email;
        select.appendChild(newOption);
      })
      let dataContainer = document.getElementById("data-container");
      dataContainer.appendChild(select);
      sendMessageButton.disabled = false;
    } else if (response.status == 404) {
      let email = prompt("L'adresse e-email incorrecte. Réessayer !!");
      localStorage.setItem("email", email);
      let url = "https://aphelper.herokuapp.com/api/helper/getClients/" + email;
      loadDataFromServer(url);


    } else {
      window.close();
      alert("Il semble que cet utilisateur n'a aucun client associé");
      localStorage.removeItem("email");
      
    }

  } catch (e) {

    alert("Impossible de contacter le serveur. Essayer de contcater votre support IT")
    window.close();


  }


}


loadDataFromServer("https://aphelper.herokuapp.com/api/helper/getClients/" + email);




form.addEventListener('submit',async(e)=> {
  e.preventDefault();
  sendMessageButton.disabled = true;
   console.log("Form submited")
  const element = document.getElementsByTagName('select')[0];
   console.log(element);
  let email = element.options[element.selectedIndex].text;

  let url1 = "https://aphelper.herokuapp.com/api/helper/search/clients/"+ email;

  try {
    let response = await fetch(url1)

    let data = await response.json()

    if (response.ok === true && data != null) {

      localStorage.setItem("dataClient", JSON.stringify(data));
      sendMessageButton.disabled = false;
      window.open('clientData.html', 'mywin', 'width=600,height=600')

    } else {
      sendMessageButton.disabled = false;
      
      alert("Client not found")


    }
  } catch (e) {

    sendMessageButton.disabled = false;

    alert("Impossible to contact server")


  }


});

btnLogout.addEventListener('click',function(){

  let email = localStorage.getItem("email");
  if(email!=null){
    localStorage.removeItem("email");
    window.close();
  }

})






