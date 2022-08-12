// Define UI Element 
const type = document.getElementById('type');
const userInput = document.getElementById('user-input');
const form = document.querySelector('form');
const resultList = document.getElementById('result-list')

// Add EventListener 
form.addEventListener('submit', handleSubmit);
type.addEventListener('change', errorShow);
userInput.addEventListener('focus', removeAlertInput)

function handleSubmit(e) {
    e.preventDefault();
    if(type.value !== 'null' && userInput.value) {
        // create element table row
        const tr = document.createElement('tr');

        let regex = /^\d{4}$/
        let found = null
        // check input
        switch(type.value) {
            case 'email':
                regex = /^[\w-\.]+[\w]@([\w-]+\.)+[\w-]{2,4}$/
                found = userInput.value.match(regex);
                if (found) {
                    tr.innerHTML = `
                    <td>E-mail</td>
                    <td>${userInput.value}</td>
                    <td><span class="alert-success py-2 px-3 rounded">Valid</span></td>
                `
                } else {
                    tr.innerHTML = `
                        <td>E-mail</td>
                        <td>${userInput.value}</td>
                        <td><span class="alert-danger py-2 px-3 rounded">Invalid</span></td>
                    `
                }
                break
            case 'phoneNumber':
                regex = /^(\+(?=88))?(88)?01\d{9}$/
                found = userInput.value.match(regex);
                if (found) {
                    tr.innerHTML = `
                    <td>Phone Number</td>
                    <td>${userInput.value}</td>
                    <td><span class="alert-success py-2 px-3 rounded">Valid</span></td>
                `
                } else {
                    tr.innerHTML = `
                        <td>Phone Number</td>
                        <td>${userInput.value}</td>
                        <td><span class="alert-danger py-2 px-3 rounded">Invalid</span></td>
                    `
                }
                break
            case 'postCode':
                regex = /^\d{4}$/
                found = userInput.value.match(regex);
                if(found) {
                    tr.innerHTML = `
                        <td>Post Code</td>
                        <td>${userInput.value}</td>
                        <td><span class="alert-success py-2 px-3 rounded">Valid</span></td>
                    `
                } else {
                    tr.innerHTML = `
                        <td>Post Code</td>
                        <td>${userInput.value}</td>
                        <td><span class="alert-danger py-2 px-3 rounded">Invalid</span></td>
                    `
                }
                break
            }
            firstChild = resultList.firstElementChild
            resultList.insertBefore(tr, firstChild)
            userInput.value = ''
    } else if(!userInput.value) {
        userInput.classList.add('is-invalid');
    } else {
        type.classList.add('is-invalid');
        userInput.value = ''
    }
}

function errorShow() {
    type.classList.remove('is-invalid')
}

function removeAlertInput() {
    userInput.classList.remove('is-invalid')
}