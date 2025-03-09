function validateForm() {

	// Get values
	const roll = document.getElementById("roll").value;
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value;
	const gender = document.getElementById("gender").value;
	const dob = document.getElementById("dob").value;

	let valid = true;

	// Reset error messages
	document.getElementById("nameError").innerText = "";
	document.getElementById("emailError").innerText = "";
	document.getElementById("passwordError").innerText = "";
	document.getElementById("genderError").innerText = "";
	document.getElementById("dobError").innerText = "";

	// Roll validation
	if (roll == "") {
		document.getElementById("rollError").innerText = "Roll must be entered";
		valid = false;
	}

	// Name validation
	if (name.length < 3) {
		document.getElementById("nameError").innerText = "Name must be at least 3 characters";
		valid = false;
	}

	// Email validation
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		document.getElementById("emailError").innerText = "Invalid email format";
		valid = false;
	}

	// Password validation
	if (password.length < 6) {
		document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
		valid = false;
	}

	// Gender validation
	if (gender == "") {
		document.getElementById("genderError").innerText = "Please select a gender";
		valid = false;
	}

	// DOB validation
	if (dob == "") {
		document.getElementById("dobError").innerText = "Please select a date of birth";
		valid = false;
	}

	// If valid, show success message (you can replace this with form submission)
	if (valid) {
		alert("Registration successful!");
	}
}	