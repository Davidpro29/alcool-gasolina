function calcularPreco(){
        
  let precoAlcool = document.getElementById('alcool').value
  let precoGasolina = document.getElementById('gasolina').value
  if(precoAlcool != ""){
    if(precoGasolina != ""){

      let resultado = precoAlcool / precoGasolina
      if(resultado >= 0.7){
        //alert('Melhor usar gasolina')
        document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina"

      }else{
        //alert('Melhor usar alcool')
        document.getElementById('resultado').innerHTML = "Melhor utilizar alcool"
      }

    }else{
      alert('Preencha o preço da gasolina')
    }
  }else{
    alert('Preencha o preço do alcool')
  }
  }