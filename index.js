let userInfo = {
  name: 'Jasur',
  surname: 'Kurbanov'
}

//userInfo.name = "Zarrux"
//console.log(userInfo.name)
//let copyUserInfo = 
//Object.assign({}, userInfo)


let copyUserInfo = 
Object.assign({}, userInfo, {phoneNumber: '+998658484'})

let spreadCopy = {...userInfo, phoneNumber: "123141"}

console.log('spreadCopy', spreadCopy)
console.log('original', userInfo)
console.log('new copy', copyUserInfo)

//copyUserInfo.name="Zarrux"
///console.log('original', userInfo.name)
//console.log('new copy name', //copyUserInfo.name)

// immutability
// mutable

