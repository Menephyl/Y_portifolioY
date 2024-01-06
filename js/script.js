let isEnglish = false

const portuguese = {
    aboutMe: 'Sobre mim',
    description: 'Eu sou gay por que nenhuma mulher me quis.'
}

const english = {
    aboutMe: 'About me',
    description: 'I\'m gay because none woman wants me.'
}

const changeLanguage = () => {
    isEnglish = !isEnglish
    document.querySelector('.about-me').innerHTML = isEnglish ? english.aboutMe : portuguese.aboutMe
    document.querySelector('.about-me-text').innerHTML = isEnglish ? english.description : portuguese.description
}