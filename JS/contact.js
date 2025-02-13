document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".myform");
  const nameInput = document.querySelector('input[name="name"]');
  const mobileInput = document.querySelector('input[name="mobile"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || mobile === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      `Successful!\nThank you for your message, ${name}! We will get back to you soon.`
    );

    nameInput.value = "";
    mobileInput.value = "";
    messageInput.value = "";
  });
});
