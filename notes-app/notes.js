const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (p) {
    if (p.textContent.includes('the')) {
        p.remove()
    }
})

const newPara =  document.createElement('p')
    
newPara.textContent = 'This is a new element from JavaScript.'

document.querySelector('body').appendChild(newPara)