

function validateForm() {
    var guestname = document.getElementById('guestname').value;
    var checkin = new Date(document.getElementById('checkin').value);
    var checkout = new Date(document.getElementById('checkout').value);

    if (guestname === '' || checkin.toString() === 'Invalid Date' || checkout.toString() === 'Invalid Date') {
        alert('جميع الحقول يجب أن تمتلئ');
        return false;
    }

    if (checkout <= checkin) {
        alert('تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول');
        return false;
    }

    var confirmed = confirm('هل أنت متأكد من تقديم الحجز ؟');

    if (confirmed) {
        sendToWhatsapp();
        return true;
    } else {
        return false;
    }
}



function sendToWhatsapp() {
    let number = "+201004782834";
    let name = document.getElementById('guestname').value;
    let phone1 = document.getElementById('phone').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let roomtype = document.getElementById('roomtype').value;
    let time = document.getElementById('time').value;
    let payment = document.getElementById('payment').value;
    let location = document.getElementById('location').value;
    let specialOrders = document.getElementById('special_orders').value;

    var url = "https://wa.me/" + number + "?text="
        + "الاسم : " + name + "%0a"
        + "رقم الهاتف : " + phone1 + "%0a"
        + "تاريخ الوصول: " + checkin + "%0a"
        + "تاريخ المغادره : " + checkout + "%0a"
        + "معاد الوصول : " + time + "%0a"
        + "نوع الغرفه : " + roomtype + "%0a"
        + "طريقه الدفع : " + payment + "%0a"
        + "ارسال الموقع : " + location + "%0a";
    
    if (specialOrders.trim() !== '') {
        url += "طلبات خاصة : " + specialOrders.trim() + "%0a";
    }

    window.open(url, '_blank').focus();
}

