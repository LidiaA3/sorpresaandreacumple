const click = document.getElementById("revel");

click.addEventListener("click", () => {
    click.classList.remove("revel-hidden")
    click.classList.add("revel-active")
    click.removeEventListener("click", null)
})