const BASE_URL = "http://localhost:3000/data";

//GET
// function getData() {
//   return fetch(BASE_URL).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }

// getData().then(console.log).catch(console.log);

//POST
// function getData() {
//   return fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name: "Mango", age: 20 }),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }

// getData().then(console.log).catch(console.log);

// //DELETE
// function getData() {
//   return fetch(BASE_URL + "/1", {
//     method: "DELETE",
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }

// getData().then(console.log).catch(console.log);

//PUT
// function getData() {
//   return fetch(BASE_URL + "/1", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ age: 30 }),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }

// getData().then(console.log).catch(console.log);

//PATCH
// function getData() {
//   return fetch(BASE_URL + "/2", {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ age: 35 }),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }

// getData().then(console.log).catch(console.log);
