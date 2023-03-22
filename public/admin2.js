
// Your Code Here
async function mainAdmin() {


    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
   
    


/*
    async function updateInventory(){
    await fetch('http://localhost:3001/listBooks',{
        method: "PATCH",
        headers: "application/json",
        body:JSON.stringify({
            'quantity' : document.getElementsById('inventory').value
        }),
    })
    */
   
/*
    const sbutton = document.querySelector('#saveButton');
    /*
    books.forEach(adminHub);
*/
    books.forEach(adminList)
    /*
    sbutton.addEventListener('click', updateInventory);
*/
}

function adminList(book){
 let adminContainer = document.getElementById('adminish')
    $(adminContainer).append(`<li>${book.title}</li>
        <input type="text" id="inventory">
        <button id="saveButton">Save</button>`
    )
 


    
/*
    let newItem = $('<li>');
    let newInput = $(`${book.title}`);
    newItem.append(newInput);
    adminContainer.append(newItem);

 */

}


$(document).ready(async function() {
        await $('saveButton').on('submit', function(e) {
          e.preventDefault(); 
          // prevent the default form submission behavior
      
          // get the value of the input field
          let myFieldValue = $('inventory').val();}),

        await fetch('http://localhost:3001/listBooks',{
            method: "PATCH",
            headers: "application/json",
            body:JSON.stringify({
                'quantity' : myFieldValue
            }),

            })
            
        })
/*

function adminHub(book){
    console.log(book)
    let adminContainer = document.getElementById('adminish')
    adminContainer.innerHTML +=`
        
            <ul>
                <li>${book.title}</li>
                <input type="text" name="inventory">
                <button id="saveButton">Save</button>
            </ul>
        
    
    
    `

}
*/

mainAdmin()