var tap = Tapjsli('pk_test_WhawgZ7epdJyfAiqLktbK12o');

var elements = tap.elements({});

var style = {
    base: {
        color: '#535353',
        lineHeight: '18px',
        fontFamily: 'sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: 'rgba(0, 0, 0, 0.26)',
            fontSize: '15px'
        }
    },
    invalid: {
        color: 'red'
    }
};
// input labels/placeholders
var labels = {
    cardNumber: "Card Number",
    expirationDate: "MM/YY",
    cvv: "CVV",
    cardHolder: "Card Holder Name"
};
//payment options
var paymentOptions = {
    currencyCode: ["KWD", "USD", "SAR"],
    labels: labels,
    TextDirection: 'ltr'
}
//create element, pass style and payment options
var card = elements.create('card', { style: style }, paymentOptions);
//mount element
card.mount('#element-container');
//card change event listener
card.addEventListener('change', function (event) {
    if (event.loaded) {
        console.log("UI loaded :" + event.loaded);
        console.log("current currency is :" + card.getCurrency());

    }
    var displayError = document.getElementById('error-handler');
    if (event.error) {
        displayError.textContent = event.error.message;

    } else {
        displayError.textContent = '';

    }
});
// Handle form submission
var form = document.getElementById('form-container');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    tap.createToken(card).then(function (result) {
        console.log(result);

        if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('error-handler');
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server
            var errorElement = document.getElementById('success');
            errorElement.style.display = "block";
            var tokenElement = document.getElementById('token');
            tokenElement.textContent = result.id;

            setTimeout(function () {
                window.location.href = './video2/index.html';
            }, 1500);

            tapTokenHandler(token);


        }
    });
});

function tapTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'tapToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);


    // Submit the form
    form.submit();




}

card.addEventListener('change', function (event) {
    if (event.BIN) {
        console.log(event.BIN);

    }


    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;


    } else {
        displayError.textContent = '';

    }
});