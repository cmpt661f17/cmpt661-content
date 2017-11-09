document.addEventListener("DOMContentLoaded", function () {
    displayCart()
})

function SaveItem() {
    let name = document.querySelector("#productName").value
    let quantity = document.querySelector("#quantity").value
    localStorage.setItem(name, quantity)
    displayCart()

}

function RemoveItem() {
    let name = document.querySelector("#productName").value
    localStorage.removeItem(name)
    document.querySelector("#productName").value = ""
    document.querySelector("#quantity").value = ""
    displayCart()
}

function ClearAll() {
    localStorage.clear()
    displayCart()
}

function displayCart() {
    let list = "<tr><th>Name</th><th>Quantity</th></tr>\n"

    for (let i = 0; i <= localStorage.length - 1; i++) {
        let key = localStorage.key(i)
        list += `<tr><td> ${key} </td>
            	<td> ${localStorage.getItem(key)} </td></tr>`
    }

    document.getElementById('list').innerHTML = list
}