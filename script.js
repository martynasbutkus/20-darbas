const API_URL = `https://open-long-puck.glitch.me`
const form = document.getElementById("form")
const modelInput = document.getElementById("model")
const brandInput = document.getElementById("brand")

fetch(API_URL, {
    method: "GET"
})
    .then(resp => resp.json())
    .then(data => {
        const table = document.getElementById("dataTable")
        data.forEach(x => {
            const newTr = table.insertRow(table.rows.length)

            const cell1 = newTr.insertCell(0);
            const cell2 = newTr.insertCell(1);

            cell1.textContent = x.brand
            cell2.textContent = x.model
        })
    })
    .catch(error => console.error('Error fetching data:', error))

const submitData = (e) => {
    e.preventDefault()

    if (!modelInput.value || !brandInput.value) {
        alert("Uzpildykite laukelius!")
    } else {
        alert("Duomenis sekmingai issaugoti")
    }

    const car = {
        brand: brandInput.value,
        model: modelInput.value
    }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    })
        .then(resp => resp.json())
        .then(data => {
            brandInput.value = ''
            modelInput.value = ''
        })
}

form.addEventListener("submit", submitData)
