const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (p) {
    if (p.textContent.includes('the')) {
        p.remove()
    }
})
