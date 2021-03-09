let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// References for all HTML elements that take place in form-validation
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let msg = document.getElementById('message');

// Defining action button to collect data (event-target object)
let form = document.getElementById('form');

// Function for validating the user entries
function formValidator(e) {
    e.preventDefault();
	
	// Initial 'buckets', for collecting data and error-messages
	let data = {};
	let errors = [];
	
	// 1. Validating fullname
	if (fn.value) {
		data.fullname = fn.value;
	} else {
		errors.push('Full name is missing!');
	}
	
	// 2. Validating email
    if (em.value) {
		if (pattern.test(em.value)) {
			data.email = em.value;
		} else {
			errors.push('Invalid email!');
		}

	} else {
		errors.push('Email is missing!');
	}
    // 3. Message
	if (msg.value) {
		data.message = msg.value;
	} else {
		errors.push('Message is missing!');
	}
	
	// 4. Feedback/Errors
	if (errors.length === 0) {
		form.reset();
		// print the data object inside the console
	} else {
		// print errors inside the console
	}
	
	console.log(data, errors);
}

// Registering button for click event
form.addEventListener('submit', formValidator);
