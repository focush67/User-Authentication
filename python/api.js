// ASYNC-AWAIT------------------------------------------

// async function fetchData()
// {
//     const response = await fetch("https://animechan.xyz/api/random");
//     const data = await response.json();
//     console.log(data);
// }
// console.log("\n");
// fetchData();
// console.log("\n");

// const fetchData = async () => {
//     try{
//         const response = await fetch("https://animechan.xyz/api/random/character?name=itchi");
//         if(response.ok === false)
//         throw new Error("ERROR WHILE FETCHING DATA");
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//     console.error(error);
//     }
// }

// fetchData();






// ----------- PROMISES --------------

// function fetchData()
// {
//     fetch("https://animechan.xyz/api/random/character?name=itachi").then(response => {
//         if(!response.ok)
//         {
//             throw new Error("FETCHING FAILED ");
//         }
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.error(error);
//     });
// }

// fetchData();
