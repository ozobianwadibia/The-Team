//FUNCTION to display all team members
const displayAll = function() {
    $('#show').empty();
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
displayAll();

//FUNCTION to refresh the DOM 
const refreshDOM = function() {
    location.reload();
}


//--------------------------------------
//consider the use for this new function
//--------------------------------------
const displayOne = function() {
    $.ajax({
        url: `api/product/${id}`,
        method: 'GET'
    }).then(function(result) {
        console.log(result);
        $('#show').append('<tr><td>' + result.id + '</td><td>' + result.product_name + '</td><td>' + result.department_name + '</td><td>' + result.price + '</td><td>' + result.stock_quantity + '</td></tr>');
    });
}




//FUNCTION for ordering goods
const placeOrder = function() {
    let id = $('#id').val();
    let quantity = $('#quantity').val();
    let totalPrice = 0;
    // if ((id && quantity) || (id > 0 && quantity > 0)) 
    //AJAX call to get the total price of an item that is purchased

    //AJAX call to get the stock quantity of given id
    $.ajax({
        url: `/api/product/${id}`,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        totalPrice += response.price * quantity;
        console.log(quantity);
        document.getElementById('totalPrice').innerText = totalPrice;
        console.log(totalPrice);
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
            refreshDOM();
            $('#id').val('');
            $('#quantity').val('');
            // $('#purchaseMade').modal();
            refreshDOM();
        } else {
            $('#id').val('');
            $('#quantity').val('');
            // $('#insufficientQuantity').modal();
            // refreshDOM();
        }
    });
}

//thank you function
const thankYou = function() {
    $('#thankYou').modal();
}

//Place Order Function
$('#placeOrder').on('click', placeOrder);

//click function to thank customer
$('#checkout').on('click', thankYou);


//useful for access to system
const username = "Admin";
const password = "Bamazon";
const manager = function() {
    let userInput = $('#username').val().trim();
    let passInput = $('#password').val().trim();

    if (userInput !== username && passInput !== password) {
        alert('Hey');
    } else {
        $('.managerAccess').css('display', 'block');
    }
}

$('#managerAccess').on('click', manager);


//FUNCTION to add a brand new product
const addProduct = function() {
    let newProduct = $('#productName').val().trim();
    let departmentName = $('#departmentName').val().trim();
    let price = $('#price').val();
    let stockQuantity = $('#stockQuantity').val();
    if (newProduct && departmentName && price && stockQuantity) {
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
        refreshDOM();
    } else {
        // UIkit.modal.alert('Please provide an ID');
    }
    // $('#productName').val('');
    // $('#departmentName').val('');
    // $('#price').val('');
    // $('#stockQuantity').val('');


}

$('#addProduct').on('click', addProduct);


//FUNCTION to delete a product from the database
const removeProduct = function() {
    let id = $('#deleteItem').val();
    if (id) {
        $.ajax({
            url: `/api/product/${id}`,
            method: 'DELETE'
        }).then(function(result) {
            console.log(result);
        });
        refreshDOM();

    } else {
        // UIkit.modal.alert('Hey man');
    }

}

$('#delete').on('click', removeProduct);

//FUNCTION to update a product in the database
const updateFarm = function() {
    let un = $('#updPdtName').val().trim();
    let dn = $('#updDeptName').val().trim();
    let pr = $('#updPrice').val();
    let sq = $('#updStkQuantity').val();
    let id = $('#updateInput').val();

    if (id) {
        let data = {
            product_name: un,
            department_name: dn,
            price: pr,
            stock_quantity: sq
        }
        $.ajax({
            url: `/api/product/${id}`,
            method: 'PUT',
            data: data
        }).then(function(data) {
            console.log(data);
        });
        refreshDOM();

    } else {
        // UIkit.modal.alert('Please provide an ID');
    }
}
$('#update').on('click', updateFarm);