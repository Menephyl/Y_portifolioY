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
 document.querySelector('.about-me-text').innerHTML = "HI! i'M Yan. "

}

const about = () => {
    document.querySelector('.about-me-text').innerHTML =" HI! I'm Yan Isonel Pereira.  On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and and the Little Blind Text should turn around and return to its own, safe country. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
}
const projects=() =>{
document.querySelector('.about-me-text').innerHTML="TESTE ABACATE COM LIMAO"

}
const skills=()=>{
document.querySelector('.about-me-text').innerHTML="TESTE ABACATE COM PERA"
}
const education=() => {
document.querySelector('.about-me-text').innerHTML="TESTE ABACATE COM AVEIA"
}
const contact=( ) => {
document.querySelector('.about-me-text').innerHTML="TESTE ABACATE COM PÃO"
}