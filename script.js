let isEnglish = false

const portuguese = {
    aboutMe: 'Sobre mim',
    description: 'Sou Yan Isonel Pereira. tenho prática com tecnologia front-end e estou em busca da primeira oportunidade'
}

const english = {
    aboutMe: 'About me',
    description: 'I am Yan Isonel Pereira. I have practice with technology front-end and I have in search to the first opportunity '
}

const changeLanguage = () => {
    isEnglish = !isEnglish
    document.querySelector('.about-me').innerHTML = isEnglish ? english.aboutMe : portuguese.aboutMe
    document.querySelector('.about-me-text').innerHTML = isEnglish ? english.description : portuguese.description
}

const home = () => {
 document.querySelector('.about-me-text').innerHTML = "This is the initial page."
document.querySelector('.about-me-text').innerHTML+= img
}
