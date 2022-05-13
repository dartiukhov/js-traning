// VAriant 1

// const variables = ['aaa', 'bbb', 'Ccc', 'ddd']
// const variablesToFind = 'cCc'.toLowerCase()
// const variablesLowerCase = [];
// let result = 'No'
// console.log(variables)

// for (const variablesLow of variables) {
    
//     variablesLowerCase.push(variablesLow.toLowerCase());
//     if (variablesLowerCase.includes(variablesToFind)) {
//         result = 'Yes';
//         break;
//     } else {
//         variablesLowerCase.pop();
//     }

// }
// console.log(variablesLowerCase)

// console.log(result)

// Variant 2

// const userList = ['aaa', 'bbb', 'Ccc', 'ddd']
// const userToFind = 'cCc'
// const variablesLowerCase = '';
// let result = 'No'
// console.log(userList)

// for (const user of userList) {
//     if (user.toLowerCase() !== userToFind.toLowerCase()) {
//         continue
//     } 
//     result = `Welcome ${user}!`
//     console.log(`User with name '${user}' is find`)
    
// }

// console.log(result)

// Variant with user input

const userList = ['aaa', 'bbb', 'Ccc', 'ddd']
let userToFind = document.querySelector('input')
const buttonEvent = document.querySelector('button[data-add]')
const buttonReset = document.querySelector('button[data-reset]')
const outputH1 = document.querySelector('h1')
const outputP = document.querySelector('p')
// let result = `Wrong login! Check the correctness of the login!`
console.log(userList)

buttonEvent.addEventListener('click', function () {
    const inputValue = userToFind.value;
     outputP.textContent = `User is not found`;
     outputH1.textContent = `Wrong! Check the correctness of the login!`;
for (const user of userList) {
    if (user.toLowerCase() === inputValue.toLowerCase()) {
        outputP.textContent = `User is found`;
        outputH1.textContent = `Welcome ${user}!`;
        break
    }
    }
})

buttonReset.addEventListener('click', function () {
    outputP.textContent = '';
    outputH1.textContent = '';
})
