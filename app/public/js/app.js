var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener("click",function(){

    if (iconMenu.getAttribute("src") == 'imagens/menu.svg') {
        iconMenu.setAttribute("src","imagens/close.svg");
    }else{
        iconMenu.setAttribute("src","imagens/menu.svg");
    }

   menu.classList.toggle('active');
});

// IMC

const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''
        if (imc < 18.5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Acima do peso'
        } else if (imc < 35) {
            classification = 'Obesidade grau I'
        } else if (imc < 41) {
            classification = 'Obesidade grau II'
        } else {
            classification = 'Obesidade grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})` 
        } else {
            resultado.innerHTML = 'Preencha os campos!'
        }
    
    }

// Água

const resultado_agua = document.querySelector('#resultado_agua')
const peso_agua = document.querySelector('#peso_agua')

const calcAGUA = () => {
    if (peso_agua.value !== '') {
        const agua = (peso_agua.value*35/1000).toFixed(2)
        

        resultado_agua.innerHTML = `Você deve ingerir ${agua} litros de água por dia.` 
        } else {
            resultado_agua.innerHTML = 'Preencha os campos!'
        }
}

// Água

const resultado_homem = document.querySelector('#resultado_homem')
const peso_homem = document.querySelector('#peso_homem')
const altura_homem = document.querySelector('#altura_homem')
const idade_homem = document.querySelector('#idade_homem')

const calcTAXA = () => {
    if (peso_homem.value !== '' && altura_homem.value !== '' && idade_homem.value !== '') {
        const taxa = (66+(13.8*peso_homem.value)+(5*altura_homem.value)-(6.8*idade_homem.value)).toFixed(2)
        

        resultado_homem.innerHTML = `Sua taxa basal é de: ${taxa}.` 
        } else {
            resultado_homem.innerHTML = 'Preencha os campos!'
        }
}






