async function mainAdmin() {
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    //for each object in books (fetched array) the content book is used to run adminList()
    books.forEach(adminList);
    console.log(books)
  }
  
  function adminList(book){

    //selects the query with the ID of 'adminish'
    let root = document.querySelector('#adminish')

    // sets variable li to create element <li></li>
    // variables text content is the book title from the data fetched in mainAdmin()
    let li = document.createElement('li')
    li.textContent = book.title

    //creates a variable with a value of a '<input></input>' prefilled with the value of book.quantity
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    //creates a save button (text content of sa)
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    //adds an event listener to the button. 
    //When clicked, the function will PATCH the 
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.append(li)

    /*
    let adminContainer = document.getElementById('adminish');
    $(adminContainer).append(`
      <li>${book.title}</li>
      <input type="text" class="inventory">
      <button class="saveButton">Save</button>
    `);
  
  
  $('.saveButton').on('click', async function(e) {
    e.preventDefault(); 
    let myFieldValue = $(this).siblings('.inventory').val();
  
    await fetch('http://localhost:3001/listBooks',{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'quantity' : myFieldValue
      }),
    })
  
    
  })*/
}
  mainAdmin();
  