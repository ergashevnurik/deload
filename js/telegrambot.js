// Telegram Bot Contact Request

document.querySelector('.submit-btn').onclick = function() {
    let firstName = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;

    if (firstName === "" && firstName.length < 1) {
        alert("Please fill the first name input");
    } else if (email.length <= 1) {
        alert("Please fill the email input");
    } else if (phone.length <= 1 && phone === "") {
        alert("Please fill the phone input");
    } else {
        let xHttp = new XMLHttpRequest();
        let message = "First Name: " + firstName + " " + "Phone: " + phone + " " + "Email: " + email;

        const token = "5808655244:AAHPAKSOofZejxqBpGFd6fqfJP9Ki6qM80w";
        const chatId = "-875566459";
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&text=';
        xHttp.open("GET", url + message, true);
        xHttp.send();

        alert('Successfully sent');
    }

}