
// Tab Switching Function (Desktop & Mobile dono ke liye)
function opentab(event, tabname) {
  const tablinks = document.querySelectorAll(".tab-links");
  const tabcontents = document.querySelectorAll(".tab-contents");

  // Sabhi tabs se active classes remove karein
  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  // Click hue tab aur content ko active karein
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active-link");
  }

  const selectedTab = document.getElementById(tabname);
  if (selectedTab) {
    selectedTab.classList.add("active-tab");
  }
}

// Mobile Menu Functions
function openmenu() {
  const sidemenu = document.getElementById("sidemenu");
  if (sidemenu) {
    sidemenu.style.right = "0";
  }
}

function closemenu() {
  const sidemenu = document.getElementById("sidemenu");
  if (sidemenu) {
    sidemenu.style.right = "-200px";
  }
}

// Web Form 

	const scriptURL = 'https://script.google.com/macros/s/AKfycbxF2d4bALxI1TxRxCaRkGBbEQ26cIau-1vXc7RJlPGHHpLCKHWDd_HBD4zaqgEqQXEi/exec'
	const form = document.forms['YOUR_FORM_NAME']
  const msg = document.getElementById("msg")

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
			.catch(error => console.error('Error!', error.message))
	})



  // Auto-changing Typewriter Text Effect
const roles = ["Web Developer", "App Developer", "UI/UX Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetElement = document.getElementById("changing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    targetElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1500; // Pura text type hone ke baad 1.5s wait karega
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // Next role par switch
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);