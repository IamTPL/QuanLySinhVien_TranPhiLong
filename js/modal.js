function SinhVien(id, name, email, password, toan, ly, hoa) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    (this.toan = toan),
        (this.ly = ly),
        (this.hoa = hoa),
        (this.getAverage = function () {
            return Math.round((this.toan + this.ly + this.hoa) / 3);
        });
}
