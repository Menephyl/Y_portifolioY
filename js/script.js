document.getElementById('currentYear').textContent = new Date().getFullYear();

const e1 = document.querySelector('.oi');
const e2 = document.querySelector('.funcao');


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
    origin:"bottom",
  
})



window.revelar = ScrollReveal({reset:false})

revelar.reveal('.fadeToUpFunc',{
    duration:2000,
    distance:"50px",

})

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.fadeToUp-delay',{
    duration:2000,
    distance:"80px",
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






const  nProject = document.getElementById('nProjects')
let cont = 0
let tPro = setInterval(() => {
    cont+=1
nProject.textContent=cont

if(cont===32){
    clearInterval(tPro)
}
},100
);

const numero = document.getElementById('numero')
let c = 0
let t=setInterval(() => {
    c +=1
    numero.textContent=c

    if(c===99){
        clearInterval(t)
    }
},80
);


const nClients = document.getElementById("nClients")

let cClients = 0
let tClients = setInterval(()=>{
    cClients+=1
    nClients.textContent=cClients
    if(c===52){
        clearInterval(tClients)
    }

},80
);

const nPartners = document.getElementById("nPartners")

let cPartners = 0
let tPartners = setInterval(()=>{
    cPartners+=1
    nPartners.textContent=cPartners
    if(c===28){
        clearInterval(tPartners)
    }

},80
);

const courses = document.querySelector(".panel-body")

const btnSh = document.querySelector(".btn-show-hide")
const btnSh2 = document.querySelector('.btn-show-hide2')
const btnSh3 = document.querySelector('.btn-show-hide3')
const panelBody = document.querySelector(".panel-body")
const panelBody2 = document.querySelector(".panel-body2")
const panelBody3 = document.querySelector(".panel-body3")
   
const minus = document.querySelector('#iMenos')

let  el = document.createElement("i")
el.classList = "fa-solid fa-plus";




btnSh.addEventListener("click",() => {
if(panelBody.style.display === 'flex'){
        
        panelBody.style.display = 'none';
        btnSh.classList.remove('active')


        btnSh.appendChild(el,minus)

}else{
     panelBody.style.display = 'flex'
    btnSh.classList.add('active')
   btnSh.appendChild(minus,el)
   btnSh.removeChild(el)
}
})

const iMais = document.querySelector('#iMais')

let elMinus = document.createElement('i')
elMinus.classList = "fa-solid fa-minus";

btnSh2.addEventListener("click",() => {
    if(panelBody2.style.display === 'flex'&& 
    btnSh2.classList.contains('active')){
        btnSh2.appendChild(iMais,elMinus)
        btnSh2.classList.remove('active')
        panelBody2.style.display = 'none'
       btnSh2.removeChild(elMinus)
        
        
        
       
    }else{
        panelBody2.style.display = 'flex'
        btnSh2.classList.add('active')
        btnSh2.appendChild(elMinus,iMais)
        btnSh2.removeChild(iMais)
    }
    })

    const iMais2 = document.querySelector('#iMais2')

    let elMinus2 = document.createElement('i')
    elMinus2.classList = "fa-solid fa-minus";


    btnSh3.addEventListener("click",() => {
        if(panelBody3.style.display === 'flex'){
                /// issue on toggle fa-minus to fa.plus
            if(btnSh3.classList.contains('active')){
                btnSh3.classList.remove('active')
                panelBody3.style.display = 'none';
                btnSh3.appendChild(elMinus2,iMais2)
                btnSh3.appendChild(iMais2,elMinus2)
               

            }else{
             btnSh3.classList.add('active')
             btnSh3.appendChild(iMais2,elMinus2)

            }
        }else{
             panelBody3.style.display = 'flex'
            btnSh3.classList.add('active')
            btnSh3.appendChild(elMinus2,iMais2)
            btnSh3.removeChild(iMais2)
        }
        })



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


let isEnglish = false

const portuguese = {
    aboutMe: 'Sobre mim...',
    description: 'Sou Yan Isonel Pereira. Soluciono problemas do dia a dia com as tecnologias Front-End e estou em busca da minha primeira oportunidade. ',
    home:'Olá, eu sou o Yan'


}

const english = {
    aboutMe: 'About me...',
    description: 'I am Yan Isonel Pereira. Currently, I specialize in HTML | CSS | JAVASCRIPT (JS) | React.js and constantly strive to improve my skills. Therefore, I have experience with some technologies like AWS, Git and also GitHub.I am passionate about building successful products and work well in a team environment. I always seek to simplify processes to enhance the customer experience and efficiently solve project issues with front-end technology and I have in search to my first opportunity.'

}


