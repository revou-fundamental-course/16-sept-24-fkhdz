document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("massageform");
    const currentTime = document.getElementById("currenttime");
    const submittedName = document.getElementById("submittedname");
    const submittedBirthdate = document.getElementById("submittedbirthdate");
    const submittedGender = document.getElementById("submittedgender");
    const submittedMassage = document.getElementById("submittedmassage");

    // Display current Time
    currentTime.innerHTML = new Date().toLocaleString();

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;
        const massage = document.getElementById("massage").value;

        // Update submitted massage
        submittedName.innerHTML = name;
        submittedBirthdate.innerHTML = birthdate;
        submittedGender.innerHTML = gender;
        submittedMassage.innerHTML = massage;
        
    });
});
