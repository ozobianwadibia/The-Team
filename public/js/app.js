//prices of the products
const id1 = 990;
const id2 = 250;
const id3 = 1200;
const id4 = 299;
const id5 = 11;
const id6 = 16;
const id7 = 15;
const id8 = 14;
const id9 = 9;
const id10 = 20;

const displayAll = function() {
        $.ajax({
            url: `api/product`,
            method: 'GET'
        }).then(function(result) {
            console.log(result);
            for (let i = 0; i < 10; i++) {
                $('#show').append('<tr><td>' + result[i].product_name + '</td><td>' + result[i].department_name + '</td><td>' + result[i].price + '</td><td>' + result[i].stock_quantity + '</td></tr>');
            }
        })
    }
    ///timer to call yourself again or refresh the page
displayAll(); //may have to be called more times


//function for ordering goods
const placeOrder = function() {
    let id = $('#id').val();
    let quantity = $('#quantity').val();
    let totalPrice = 0;
    if ((id && quantity) || (id > 0 && quantity > 0)) {
        if (id == 1) {
            totalPrice += (id1 * quantity);
            console.log(totalPrice);
        } else if (id == 2) {
            totalPrice += (id2 * quantity);
        } else if (id == 3) {
            totalPrice += (id3 * quantity);
        } else if (id == 4) {
            totalPrice += (id4 * quantity);
        } else if (id == 5) {
            totalPrice += (id5 * quantity);
        } else if (id == 6) {
            totalPrice += (id6 * quantity);
        } else if (id == 7) {
            totalPrice += (id7 * quantity);
        } else if (id == 8) {
            totalPrice += (id8 * quantity);
        } else if (id == 9) {
            totalPrice += (id9 * quantity);
        } else if (id == 10) {
            totalPrice += id10 * quantity;
        }
    }
    //assigning the value of totalPrice to the given id
    document.getElementById('totalPrice').innerText = totalPrice;

    //ajax call to get the stock quantity of given id
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
                //ajax call to post updated value
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


const addMore = function() {



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