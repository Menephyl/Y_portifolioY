/*    4- utilizar js para inserção das informações do projeto.
    modify contents
*/

// RETORNAR ANO ATUAL 
document.getElementById('currentYear').textContent = new Date().getFullYear()



let isEnglish = false

const portuguese = {
    aboutMe: 'Sobre mim...',
    description: 'Sou Yan Isonel Pereira. Soluciono problemas do dia a dia com as tecnologias Front-End e estou em busca da minha primeira oportunidade. ',
    home:'Olá, eu sou o Yan'
   
    
}

const english = {
    aboutMe: 'About me...',
    description: 'I am Yan Isonel Pereira. Currently, I specialize in HTML | CSS | JAVASCRIPT (JS) | React.js and constantly strive to improve my skills. Therefore, I have experience with some technologies like AWS, Git and also GitHub.I am passionate about building successful products and work well in a team environment. I always seek to simplify processes to enhance the customer experience and efficiently solve project issues with front-end technology and I have in search to my first opportunity.'
/* Amante da tecnologia desde 1999.  */

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
document.querySelector('.about-me-text').innerHTML="Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Interagi no mé, cursus quis, vehicula ac nisi. Aenean aliquam molestie leo, vitae iaculis nisl."

}
const skills=()=>{
document.querySelector('.about-me-text').innerHTML="Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Interagi no mé, cursus quis, vehicula ac nisi. Aenean aliquam molestie leo, vitae iaculis nisl."
}
const education= () => {
document.querySelector('.about-me-text').innerHTML="Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Interagi no mé, cursus quis, vehicula ac nisi. Aenean aliquam molestie leo, vitae iaculis nisl."
}
const contact= ( ) => {
document.querySelector('.about-me-text').innerHTML="Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius."
}


