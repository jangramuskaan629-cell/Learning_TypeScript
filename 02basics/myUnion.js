"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = 44;
score = "55";
let muskaan = { name: "Muskaan", id: 334 };
muskaan = { name: "mj", id: 334 };
// function getDbId(id: number | string) {
//     // making API calls
//     console.log(`Db Id is: ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array 
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
//# sourceMappingURL=myUnion.js.map