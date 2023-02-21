function showMessage(idTag, message) {
    document.getElementById(idTag).innerText = message;
}

function kiemTraTrung(id, stList) {
    var isOverlap = stList.findIndex((e) => {
        return e.id == id;
    });
    if (isOverlap != -1) {
        showMessage('spanMaSV', 'Mã sinh viên đã tồn tại');
        return false;
    } else {
        showMessage('spanMaSV', '');
        return true;
    }
}

function validEmail(email) {
    var re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email)) {
        showMessage('spanEmailSV', '');
        return true;
    } else {
        showMessage('spanEmailSV', 'email không hợp lệ');
        return false;
    }
}

function validLength(text, min, max) {
    if (text.length >= min && text.length <= max) {
        showMessage('spanMaSV', '');
        return true;
    } else {
        showMessage('spanMaSV', `Nhập từ ${min} đến ${max} ký tự`);
        return false;
    }
}

function onlyString(text) {
    var re = /^[a-zA-Z_ ]*$/;
    if (re.test(text)) {
        showMessage('spanTenSV', '');
        return true;
    } else {
        showMessage('spanTenSV', 'Nhập tên chỉ chứa chữ');
        return false;
    }
}
