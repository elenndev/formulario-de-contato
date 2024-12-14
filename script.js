let adm_tel = null
let adm_email = null

function cleanForms(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach((e)=>{
        e.value = ''
    })
    adm_tel, adm_email = null
}

document.querySelector('#infoForm').addEventListener('submit', function(event) {
    event.preventDefault()
    adm_tel = document.querySelector('#infoForm>#admTel').value
    adm_email = document.querySelector('#infoForm>#admEmail').value

    const forms = document.querySelectorAll('.blockForm')
    forms.forEach((form)=> {
        form.classList.remove('blockForm')
    })
})

document.querySelectorAll(".contactForm").forEach((e)=>{
    e.addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target
        const name = form.querySelector('#name').value
        const email = form.querySelector('#email').value
        const tel = form.querySelector('#tel').value
        const message = form.querySelector('#message').value
        if (!form.classList.contains('blockForm')){
            if (form.classList.contains('email')){
                console.log('form de email')
                const subject = `Contato para mais informações e orçamento de ${name}`
                const body = `Nome: ${name} | Telefone: ${tel} | Email: ${email}\n\nMensagem: ${message}`;
                const mailtoUrl = `mailto:${adm_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
            } else {
                const whatsappUrl = `https://wa.me/${adm_tel}?text=${encodeURIComponent(
                    `Nome: ${name} | Telefone: ${tel} | Email: ${email}\n\nMensagem: ${message}`
                )}`;
            
            window.open(whatsappUrl, "_blank");
    
            }
        }
    });

})
