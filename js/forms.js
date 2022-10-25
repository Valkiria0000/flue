document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    if (error === 0) {
      let response = await fetch("#");
      if (response.ok) {
        alert("Форма успешно отправлена!");

        form.reset();
      } else {
        alert("Ошибка отправки данных");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("tel")) {
        if (telValidate(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add("error");
  }
  function formRemoveError(input) {
    input.classList.remove("error");
  }

  function telValidate(input) {
    return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
  }
});
