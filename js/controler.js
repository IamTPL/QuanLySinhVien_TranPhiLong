function getInfo() {
    var id = document.getElementById('txtMaSV').value;
    var name = document.getElementById('txtTenSV').value;
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPass').value;
    var toan = document.getElementById('txtDiemToan').value * 1;
    var ly = document.getElementById('txtDiemLy').value * 1;
    var hoa = document.getElementById('txtDiemHoa').value * 1;

    return new SinhVien(id, name, email, password, toan, ly, hoa);
}

function render(stList) {
    var htmlContent = stList
        .map((e) => {
            return `
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.getAverage()}</td>
            <td><button onclick="xoaSV('${
                e.id
            }')" class="btn btn-danger">Xoá</button></td>
            <td><button onclick="suaSV('${
                e.id
            }')" class="btn btn-danger">Sửa</button></td>
        </tr>
        `;
        })
        .join('');

    document.getElementById('tbodySinhVien').innerHTML = htmlContent;
}

function addMethodAverage(stList) {
    stList.forEach((e) => {
        e.getAverage = function () {
            return Math.round((this.toan + this.ly + this.hoa) / 3);
        };
    });
}

function saveToLocal(stList) {
    localStorage.setItem('StudentList', JSON.stringify(stList));
}
