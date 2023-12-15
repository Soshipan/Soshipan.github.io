document.addEventListener("DOMContentLoaded", function () {
    //form
    const fullName = document.getElementById("FullNameInput");
    const age = document.getElementById("ageInput");
    const email = document.getElementById("emailInput");
    const dob = document.getElementById("dobInput");

    //progress bar
    const progress = document.getElementById("formProgress");
 
    //get and check number of characters in the input
    const inputs = [fullName, age, email, dob];
    const totalInputs = inputs.length;
    let validInputs = 0;

    //validates the name input only
    function validate(name) {
      return /^[a-zA-Z\s]+$/.test(name);
    }
  
    //updates the progress bar at the bottom
    function updateProgressBar() {
      const progressBarWidth = (validInputs / totalInputs) * 100;
      progress.style.width = progressBarWidth + "%";
      progress.innerText = progressBarWidth + " %";
    }
  
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (input === fullName) {
          //Validate Fullname
	  if (validate(input.value)) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
          } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
          }
        } else if (input === age) {
          //Validate Age
	  if (!isNaN(input.value)) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
          } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
          }
        } else {
          if (input.value.trim() !== "") {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
          } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
          }
        }
  
        validInputs = inputs.filter((input) => input.classList.contains("is-valid")).length;
        updateProgressBar();
      });
    });
  });
  