const displayAll = function() {
        $.ajax({
            url: `api/product/`,
            method: 'GET'
        }).then(function(result) {
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                $('#show').append('<tr><td>' + result[i].id + '</td><td>' + result[i].product_name + '</td><td>' + result[i].department_name + '</td><td>' + result[i].price + '</td><td>' + result[i].stock_quantity + '</td></tr>');
            }
        });
    }
    ///timer to call yourself again or refresh the page
displayAll(); //may have to be called more times


//function for ordering goods
const placeOrder = function() {
    let id = $('#id').val();
    let quantity = $('#quantity').val();
    let totalPrice = 0;
    // if ((id && quantity) || (id > 0 && quantity > 0)) 
    //AJAX call to get the total price of an item that is purchased
    $.ajax({
        url: `/api/product/${id}`,
        method: 'GET'
    }).then(function(result) {
        totalPrice += result.stock_quantity * result.price;
        document.getElementById('totalPrice').innerText = totalPrice;
    })

    //AJAX call to get the stock quantity of given id
    $.ajax({
        url: `/api/product/${id}`,
        method: 'GET'
    }).then(function(response) {
        let newQuantity = response.stock_quantity - quantity;
        console.log(newQuantity);

        if (newQuantity >= 0) {
            let data = {
                    stock_quantity: newQuantity
                }
                //AJAX call to post updated value
            $.ajax({
                url: `/api/product/${id}`,
                method: 'PUT',
                data: data
            }).then(function(data) {
                // return data;
                console.log(data);
            });

            $('#id').val('');
            $('#quantity').val('');
            $('#purchaseMade').modal();
        } else {
            $('#id').val('');
            $('#quantity').val('');
            $('#insufficientQuantity').modal();
        }
    });
}

//thank you function
const thankYou = function() {
    $('#thankYou').modal();
}

//click function to place order
$('#placeOrder').on('click', placeOrder);

//click function to thank customer
$('#checkout').on('click', thankYou);



//function to add a brand new product
const addProduct = function() {
    let newProduct = $('#productName').val().trim();
    let departmentName = $('#departmentName').val().trim();
    let price = $('#price').val();
    let stockQuantity = $('#stockQuantity').val();
    const result = {
        product_name: newProduct,
        department_name: departmentName,
        price: price,
        stock_quantity: stockQuantity
    }
    $.ajax({
        url: `/api/product`,
        method: 'POST',
        data: result
    }).then(function(result) {
        console.log(result);
    });
}

$('#addProduct').on('click', addProduct);


//function to delete a product from the database
const removeProduct = function() {
    let result = {
        id: id
    }
    $.ajax({
        url: `/api/product/${id}`,
        method: 'DELETE'
    }).then(function(result) {

    });
}




//  List a set of menu options:
//     View Products for Sale
//     View Low Inventory
//     Add to Inventory

//     Add New Product
// If a manager selects`View Products for Sale`, the page should list every available item: the item IDs, names, prices, and quantities.
// If a manager selects`View Low Inventory`, then it should list all items with an inventory count lower than five.
// If a manager selects`Add to Inventory`, your app should display an input that will let the manager "add more" of any item currently in the store.
// If a manager selects`Add New Product`, it should allow the manager to add a completely new product to the store.