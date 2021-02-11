const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeOtherClasses()
        panel.classList.add('active')
    })
})

function removeOtherClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}