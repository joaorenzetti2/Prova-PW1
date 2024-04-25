function changePageTitle(title) {
    document.title = title
}

function generateInfoSection(UF) {
    const section = document.querySelector('#lista-estados')

    section.appendChild(a)
}

async function getUF() {
    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
        `)
    
        const jsonData = await data.json()
    
        generateInfoSection(jsonData.UF)
      } catch (error) {
        console.error(error)
      }
}

function getSearchParams() {
    if (!location.search) {
      return
    }
  
    const urlSearchParams = new URLSearchParams(location.search)
  
    const UF = urlSearchParams.get('UF')
  
    changePageTitle(`Municipio de ${UF}`)
    getUF(UF)
  }
  

document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
})