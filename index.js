

const form= document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const Inputpeso= document.getElementById('peso')
    const InputAltura= document.getElementById('altura')

    const peso= Number(Inputpeso.value);
    const altura=Number(InputAltura.value)
    if(!peso){
      rresultado('peso invalido',false)
      return
    }
    if(!altura){
      rresultado('altura invalida', false)
      return
    }
    const imc= getImc(peso, altura)
    const nivelImc=getNivelImc(imc)

    const msg= `seu imc é ${imc} (${nivelImc}). `
    rresultado(msg, true)
});


function getImc(peso, altura){
  const imc=peso/altura**2
  return imc.toFixed(2)
}

function getNivelImc(imc){
  const nivel=['Abaixo do peso','Peso normal','Sobrepeso','Obesidade Grau I','Obesidade Grau II','Obesidade Grau III']

if (imc>=39.9) return nivel[5]
if (imc>=34.5)return nivel[4]
if (imc>=29.9)return nivel[3]
if (imc>=24.9)return nivel[2]
if(imc>=18.5)return nivel[1]
if (imc<18.5)return nivel[0]

}


function CriarP(){
  const p = document.createElement('p')
  return p
}

function rresultado(msg, validade){
  const  resultado=document.getElementById('resultado')
 resultado.innerHTML=''
  const p= CriarP()

  if (validade){
    p.classList.add('paragrafo')
  }
  else {
    p.classList.add('bad')
  }
  p.innerHTML=msg
  resultado.appendChild(p)
}

