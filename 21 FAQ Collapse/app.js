const faqToggleBtns = document.querySelectorAll('.faq-toggle')

faqToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // btn.parentElement.classList.toggle('active')
        btn.parentNode.classList.toggle('active')
    })
})