// const User = {
//     name: "Muskaan",
//     email: "Muskaan@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "Muskaan", isPaid: false, email: "Muskaan@lco.dev"}

// createUser(newUser)



// // function createCourse():{name: string, price: boolean}{
// //     return {name: "reactjs", price: 399}
// // }


// type User = {
//     name: string,
//     smail: string,
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive:true}
// }

// createUser({name: "", email: "", isActive:true})


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: true,
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "Muskaan",
    email: "Muskaan@lco.dev",
    isActive: true
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
} 



myUser.email = "Muskaan@lco.dev"
// myUser._id = "asa"





export{}