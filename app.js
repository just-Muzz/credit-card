const cardNo = document.querySelector(".card-no")
const cvc = document.querySelector(".cvc")
const date = document.querySelector(".date")
const submit = document.querySelector(".submit")
let inputHyphen;

cardNo.focus()

cardNo.addEventListener("keyup", function (keys) {

  const bd = keys.key;
  if (bd == "Backspace" || bd == "Delete") {
    return false;
  }
  else {
    if (cardNo.value.length == 4 || cardNo.value.length == 9) {
      insertHyphen = cardNo.value + " ";
      cardNo.value = insertHyphen;
    }

    else if (cardNo.value.length > 13) {
      cvc.focus();
    }
  }

}
)
cvc.addEventListener("keyup", function () {

  if (cvc.value.length > 2) {
    date.focus();
  }
})

date.addEventListener("keyup", function (e) {
  const b = e.key;
  if (b == "Backspace" || b == "Delete") {
    return false;
  }
  else {
    if (date.value.length == 2) {
      insertSlash = date.value + "/";
      date.value = insertSlash;
    }

    else if (date.value.length > 4) {
      submit.focus();
    }
  }

})