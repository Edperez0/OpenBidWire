(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Free sample form: send in the background and show a message in place.
  // Without JavaScript the form still posts normally to Formspree.
  var form = document.getElementById("sample-form");
  var status = document.getElementById("form-status");
  if (!form || !status || !window.fetch) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var button = form.querySelector("button[type=submit]");
    status.className = "form-status";
    status.textContent = "Sending...";
    button.disabled = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          status.className = "form-status ok";
          status.textContent = "Thanks. We got your request and will email you the current issue.";
        } else {
          throw new Error("bad response");
        }
      })
      .catch(function () {
        status.className = "form-status err";
        status.textContent = "Something went wrong. Please email theperezproject0912@gmail.com and we will send it that way.";
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();
