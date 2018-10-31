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
        let newQ = response.stock_quantity - quantity;
        console.log(newQ);

        if (newQ >= 0) {
            let data = {
                    stock_quantity: newQ
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


const thankYou = function() {
    $('#thankYou').modal();
}


$('#placeOrder').on('click', placeOrder);
$('#checkout').on('click', thankYou);