var localStudentList = localStorage.getItem('StudentList');

if (localStudentList == null) var stList = [];
else {
    var stList = JSON.parse(localStudentList);
    addMethodAverage(stList);
    render(stList);
}

function addStudent() {
    var student = getInfo();
    var isValid =
        kiemTraTrung(student.id, stList) && validLength(student.id, 3, 20);
    isValid &= validEmail(student.email, stList);
    isValid &= onlyString(student.name);

    if (isValid) {
        stList.push(student);
        render(stList);
        saveToLocal(stList);
        resetForm();
    }
}

function resetForm() {
    document.getElementById('formQLSV').reset();
}

function capNhatSv() {
    render(stList);
}

function suaSV(id) {
    var index = stList.findIndex((e) => {
        return e.id == id;
    });
    var newStudent = getInfo();
    stList[index] = newStudent;
    saveToLocal(stList);
}

function xoaSV(id) {
    var index = stList.findIndex((e) => {
        return e.id == id;
    });
    stList.splice(index, 1);
    saveToLocal(stList);
    render(stList);
}

document.getElementById('btnSearch').onclick = function () {
    var nameSearch = document.getElementById('txtSearch').value;
    var index = stList.findIndex((e) => {
        return e.name == nameSearch;
    });
    if (index != -1) {
        var listFind = [stList[index]];
        render(listFind);
    } else {
        alert('Tên sinh viên không tồn tại');
        render(stList);
    }
};
