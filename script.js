let isEnglish = false

const portuguese = {
    aboutMe: 'Sobre mim',
    description: 'Verto é gay e gosta de dick.'
}

const english = {
    aboutMe: 'About me',
    description: 'Verto is gay and like rola.'
}

const changeLanguage = () => {
    isEnglish = !isEnglish
    document.querySelector('.about-me').innerHTML = isEnglish ? english.aboutMe : portuguese.aboutMe
    document.querySelector('.about-me-text').innerHTML = isEnglish ? english.description : portuguese.description
}