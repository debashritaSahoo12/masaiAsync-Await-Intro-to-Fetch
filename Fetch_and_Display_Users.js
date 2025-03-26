// Create a webpage that fetches a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and displays their names in console.
// Key Requirements:

//     Fetch the user data
//     Display the names in console.


function userName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((res)=>{
       let names= res.map(ele => {
        return ele.name
       });
       console.log(names);
    })
    .catch((error)=>{
        console.log("error:",error)
    })
}
userName()
  //output
//  [
//   'Leanne Graham',
//   'Ervin Howell',
//   'Clementine Bauch',
//   'Patricia Lebsack',
//   'Chelsey Dietrich',
//   'Mrs. Dennis Schulist',
//   'Kurtis Weissnat',
//   'Nicholas Runolfsdottir V',
//   'Glenna Reichert',
//   'Clementina DuBuque'
// ]
