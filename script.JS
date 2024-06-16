const validCredentials = [
    "petrrr.ahojjjjj",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",
    "adam.švarc"
  ];
  
  function checkLogin() {
    const enteredUsername = document.getElementById('Uname').value.trim();
    const enteredPassword = document.getElementById('Pswrt').value.trim();
    const confirmPassword = document.getElementById('cnfrmPswrt').value.trim();
  
  
    if (enteredUsername.length < 5) {
        displayError("Invalid Username", "Username must be at least 5 characters long.");
        return;
    }
  
    if (enteredPassword.length < 7) {
        displayError("Invalid Password", "Password must be at least 7 characters long.");
        return;
    }
  
    
    if (enteredPassword !== confirmPassword) {
        displayError("Password Mismatch", "Password confirmation does not match the entered password.");
        return;
    }
  
if    (validCredentials.includes(enteredUsername + "." +  enteredPassword)){ 
    displayError("Used", "Please enter new username and password.")
    return
    
    }

    const foundUser = enteredUsername < 5  + "." + enteredPassword < 7;
    if (enteredPassword + enteredUsername.includes(foundUser)) {
         console.log("Login successful.");
        window.location.href = "home.html";
       
    } else {
        displayError("Invalid Credentials", "Please enter valid username and password.");
    }
  }
  
  function displayError(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error"
    });
  }
    function Home() {
        window.location.href = "index.html"
    }
    const items = [
      { name: "Bezdík🤨", chance: 0.0001, image: "michal🤨.png", value: "1-10000", count: 0 },
      { name: "Bozo", chance: 0.001, image: "KámoPetr.png", value: "1-4000", count: 0 },
      { name: "WOOWsilly", chance: 0.005, image: "WOOWsilly.png", value: "1-2000", count: 0 },
      { name: "Wait im goofy", chance: 0.01, image: "https://media.tenor.com/9ZUkx0LZCvoAAAAM/cats-cat.gif", value: "1-1000", count: 0 },
      { name: "Wait im stormal", chance: 0.02, image: "https://media.tenor.com/nWGzJyn3NpsAAAAe/sol%27s-rng.png", value: "1-500", count: 0 },
      { name: "erm ackshually", chance: 0.05, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QukmQuYC0eODSFrGFaAR4Gynbvzc77w-7A&s", value: "1-250", count: 0 },
      { name: "El gato", chance: 0.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Y0XQgsXqiQoz7A-bhH3_WnfrWYW5sUAQNg&s", value: "1-100", count: 0 },
      { name: "So silly", chance: 0.15, image: "https://pbs.twimg.com/media/FpC8d8EWcAc-3wz.jpg:small", value: "1-50", count: 0 },
      { name: "shy silly cat", chance: 0.2, image: "https://steamuserimages-a.akamaihd.net/ugc/2217520759669724468/D9342B1E565A53C6B1D344497A35AC8B1E6445E4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true:small", value: "1-20", count: 0 },
      { name: "Just silly", chance: 0.25, image: "https://ih1.redbubble.net/image.4921061561.7084/flat,750x,075,f-pad,750x1000,f8f8f8.u3:small.jpg", value: "1-10", count: 0 },
      { name: "BLEHHH", chance: 0.2039, image: "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t500x500.jpg", value: "1-2", count: 0 }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
      displayAllItems();
  });
  
  function roll() {
      const randomValue = Math.random();
      let šance = 0;
      let result;
  
      for (const item of items) {
          šance += item.chance;
          if (randomValue <= šance) {
              result = item;
              item.count += 1;
              break;
          }
      }
  
      if (!result) {
          result = { name: "Nothing", image: "https://ih1.redbubble.net/image.5011373095.5963/st,small,507x507-pad,600x600,f8f8f8.u2.jpg", value: "", count: 0 };
      }
  
      displayResult(result);
      updateItemDisplay(result.name);
  }
  
  function displayResult(result) {
      const resultsList = document.getElementById("resultsList");
      let listItem = resultsList.querySelector(`[data-item-name="${result.name}"]`);
  
      if (!listItem) {
          listItem = document.createElement("li");
          listItem.classList.add("roll-item");
          listItem.dataset.itemName = result.name;
  
          const itemName = document.createElement("p");
          itemName.textContent = result.name;
          listItem.appendChild(itemName);
  
          if (result.image) {
              const itemImage = document.createElement("img");
              itemImage.src = result.image; 
              listItem.appendChild(itemImage);
          }
  
          const itemValue = document.createElement("span");
          itemValue.textContent = `${result.value} (Rolled: ${result.count} times)`;
          listItem.appendChild(itemValue);
  
          resultsList.appendChild(listItem);
      } else {
          const itemValue = listItem.querySelector("span");
          itemValue.textContent = `${result.value} (Rolled: ${result.count} times)`;
      }
  }
  
  function displayAllItems() {
      const allItemsList = document.getElementById("allItemsList");
      items.forEach(item => {
          const listItem = document.createElement("li");
          listItem.classList.add("all-item");
          listItem.dataset.itemName = item.name;
  
          const itemName = document.createElement("p");
          itemName.textContent = item.name;
          listItem.appendChild(itemName);
  
          const itemValue = document.createElement("span");
          itemValue.textContent = item.value;
          listItem.appendChild(itemValue);
  
          allItemsList.appendChild(listItem); 
      });
  }
  
  function updateItemDisplay(itemName) {
      const allItemsList = document.getElementById("allItemsList");
      const items = allItemsList.getElementsByTagName("li");
  
      for (let i = 0; i < items.length; i++) {
          if (items[i].dataset.itemName === itemName) {
              items[i].style.color = "black";
              items[i].style.backgroundColor = "purple";
          }
      }
  }
