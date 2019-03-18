function DanhSachSinhVien() {
    this.DSSV = [];

    this.ThemmoiSV = function (svAdd) {
        this.DSSV.push(svAdd);
    }

    this.XoaSV = function (listMaSvDel) {
        for (var i = 0; i < listMaSvDel.length; i++) {
            for (var j = 0; j < this.DSSV.length; j++) {
                var sv = this.DSSV[j];

                if (listMaSvDel[i] == sv.MaSV) {
                    this.DSSV.splice(j, 1);
                }
            }
        }
    }

    this.XoaSvTheoMaSV = function (maSVDel) {
        for (var i = 0; i < this.DSSV.length; i++) {
            var sv = this.DSSV[i];
            if (sv.MaSV == maSVDel) {
                this.DSSV.splice(i, 1);
            }
        }
    }

    this.CapnhatSV = function (svUpd) {
        for (var i = 0; i < this.DSSV.length; i++) {
            var sv = this.DSSV[i];
            if (svUpd.MaSV == sv.MaSV) {
                sv.HoTen = svUpd.HoTen;
                sv.DiaChi = svUpd.DiaChi;
                sv.SoDT = svUpd.SoDT;
                sv.Email = svUpd.Email;
            }
        }
    }

    this.TimKiemTheoTenSV = function (tenSV) {
        var listSvTimKiem = new DanhSachSinhVien();

        for (var i = 0; i < this.DSSV.length; i++) {
            var sv = this.DSSV[i];

            if (sv.HoTen.toLowerCase().indexOf(tenSV.toLowerCase()) > -1) {
                listSvTimKiem.ThemmoiSV(sv);
            }
        }

        return listSvTimKiem;
    }

    this.TimSV = function (maSVFind) {
        for (var i = 0; i < this.DSSV.length; i++) {
            var sv = this.DSSV[i];
            if (sv.MaSV == maSVFind) {
                return sv;
            }
        }
        return null;
    }
}