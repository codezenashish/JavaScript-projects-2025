function qrCodeGenarter() {
  const qrBox = document.querySelector("#image-box");
  const qrImage = document.querySelector("#qrimage");
  const qrText = document.querySelector("#qrText");
  const button = document.querySelector("#button");
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrBox.classList.add("qrcode");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
