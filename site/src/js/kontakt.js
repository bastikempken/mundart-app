const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    const partialEncoded = []
    formData.forEach((value, key) => {
        let partial = key + '=' + encodeURIComponent(value)
        partialEncoded.push(partial)
    })

    fetch("/.netlify/functions/emailSubmit", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: partialEncoded.join('&'),
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            alert('Email send')
        })
        .catch((error) => alert(error));
};

document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);