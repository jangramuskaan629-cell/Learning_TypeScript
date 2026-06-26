// const user: (string | number) [] = [1, "mj"]
let tuser: [string, number, boolean]

tuser = ["mj", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "mj.com"
newUser.push(true)