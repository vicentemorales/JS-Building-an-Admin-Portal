async function mainAdmin() {
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    books.forEach(adminList);
    console.log(books)
  }
  
  function adminList(book){
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
  
    
  });
}
  mainAdmin();
  