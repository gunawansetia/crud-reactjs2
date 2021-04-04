const UserValidation = (values) => {
  const errors = {};

  if (!values.namaLengkap || values.namaLengkap === "") {
    errors.namaLengkap = "Nama harus diisi";
  }

  if (!values.posisi || values.posisi === "") {
    errors.posisi = "Posisi harus diisi";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }

  if (!values.provinsi || values.provinsi === "") {
    errors.provinsi = "Provinsi harus diisi";
  }

  if (!values.kota || values.kota === "") {
    errors.kota = "Kota harus diisi";
  }


  return errors
};

export default UserValidation;
