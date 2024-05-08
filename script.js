document.getElementById('currentYear').textContent = new Date().getFullYear()

/* home -> funcao - slider vertical  com set interval em 5s A CADA 5 segundos (5000ms) VAI TROCAR AS DIVS.
1-  verficar o clique no radio 1 ou 2 e mostrar a div home para radio 1 e funcao para radio2.
 1- definir as variaveis ok
 2- criar função ao clicar com o mouse no radio 1, mostrar div 1. ( ativo ?)ok
 3 criar funcao ao clicar com o mouse no radio 2, mostrar div 2 ( funcao)
 4- transição 1s entre essas divs.

2 - transicionar eternamente a cada 5s entre esses dois blocos automaticamente 
    1- set interval 
   2 funcao if ( radio 1 ) mostrar (radio 2 ) e vice versa 
   3 nao dar comando de parada


ÁREA HOME - TROCAR ENTRE OI E FUNCAO A CADA 3s

1- pegar oi e funcao area  

2-  definir troca manual entre essas duas caixas 

3- definir troca interativa em cada 3s ou 2s entre cada área.


*/
const e1 = document.querySelector('.oi');
const e2 = document.querySelector(".funcao");


const mostrarFunc = () => {
    
  if( e1.style.display == "block"){
    e1.style.display = "none";
    e2.style.display = "block";
  
  }else{
    e1.style.display = "block";  
    e2.style.display = "none";
  }
}
setInterval(mostrarFunc,4000);



window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp',{
    duration:2000,
    distance:"30px",
    origin:"bottom"
   
}) 



window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUpFunc',{
    duration:2000,
    distance:"90px",
   
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay',{
    duration:2000,
    distance:"90px",
    delay:500
}) 
    

window.revelar = ScrollReveal({reset:true})
// topo do projeto
revelar.reveal('.fadeToUp-delay2',{
    duration:2000,
    distance:"90px",
    delay:600
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay3',{
    duration:2000,
    distance:"90px",
    delay:700
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay4',{
    duration:2000,
    distance:"90px",
    delay:800
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay5',{
    duration:2000,
    distance:"90px",
    delay:900
}) 
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay6',{
    duration:2000,
    distance:"90px",
    delay:1000
}) 
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToRight',{
    duration:2000,
    distance:"90px",
    // delay:500,
    origin:"left"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToRight-2',{
    duration:2000,
    distance:"90px",
     delay:700,
    origin:"left"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToRight-3',{
    duration:2000,
    distance:"90px",
     delay:900,
    origin:"left"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToRight-4',{
    duration:2000,
    distance:"90px",
     delay:1100,
    origin:"left"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToRight-5',{
    duration:2000,
    distance:"90px",
     delay:1200,
    origin:"left"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToLeft',{
    duration:2000,
    distance:"90px",
     delay:500,
    origin:"right"
}) 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToLeft-2',{
    duration:2000,
    distance:"90px",
     delay:800,
    origin:"right"
})

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToLeft-3',{
    duration:2000,
    distance:"90px",
     delay:1000,
    origin:"right"
})

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToLeft-4',{
    duration:2000,
    distance:"90px",
     delay:1200,
    origin:"right"
})

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToLeft-5',{
    duration:2000,
    distance:"90px",
     delay:1500,
    origin:"right"
})



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





// fontes de orientação : 

//elementoPlataformas.classList.add('ativo')
// botao.addEventListener.toggle(`ativo`)
/* 
if(elementoPlataformas.classList.contains("ativo")){
    elementoPlataformas.classList.remove('ativo')
}else{
    elementoPlataformas.classList.add('ativo')


   */

/*
// botao para direita
// const rightAction = () => {
//     const $image = document.querySelector('.seletor-da-imagem')
//     imagem.style = 'margin-left: 200px' // os pixels deve ser do tamanho da imagem
//   } 
// lembrando, o css da div pai tem que ter o overflow hidden, para quando a imagem filha der a margin, a imagem que foi trocada sumir
// tem varias formas de fazer
// tem uma mais facil:
 
// // botao para direita
// const rightAction = () => {
//   const $image = document.querySelector('.seletor-da-imagem')
//   imagem.setAttribute('href', 'URL DA NOVA IMAGEM AQUI')
// }
// ai tu pode criar um array de links de imagens
// const images = ['link 1', 'link 2', 'link 3']

// // ISSO DEFINE QUAL IMAGEM ESTA SENDO USADA
// let imageIndex = 0 
 
// setInterval(() => {
//     // troca a imgem aqui
// //  }, 5000) 
*/