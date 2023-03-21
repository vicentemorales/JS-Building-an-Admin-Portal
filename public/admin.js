
// Your Code Here
async function mainAdmin() {


    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    
    

    async function updateInventory(){
    await fetch('http://localhost:3001/listBooks',{
        method: "PATCH",
        headers: "application/json",
        body:JSON.stringify({
            'quantity' : document.getElementsByName('inventory').value
        }),
    })
    
    };

    const sbutton = document.querySelector('#saveButton');

    books.forEach(adminHub);

    sbutton.addEventListener('click', updateInventory);

    books.forEach(amdminList)
}

function amdminList(book){
 let adminContainer = document.getElementById('adminish')

for (let i = 0; i < book.length; i++) {
    $(adminContainer).append(`<li>${book.title[i]}<li>`);
    
}

}

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