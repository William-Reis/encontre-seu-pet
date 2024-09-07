function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Preencha o campo de pesquisa</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = "";
    let especie = "";
    let raca = "";
    let caracteristicas ="";
    let tags ="";
    
    for (let dado of animais) {
      especie = dado.especie.toLowerCase()
      raca = dado.raca.toLowerCase()
      caracteristicas = dado.caracteristicas.toLowerCase()
      tags = dado.tags.toLowerCase()

        if(especie.includes(campoPesquisa)||
        caracteristicas.includes(campoPesquisa) ||
        raca.includes(campoPesquisa)||
        tags.includes(campoPesquisa)) {

          resultados += `
          <div class="item-resultado">
            <img src="${dado.imagem}" class="imagem-animal">
            <h2><a href="#" target="_blank">${dado.especie}</a></h2>
            <h3 class="descricao-meta">Raça: ${dado.raca}</h3>
            <p class="descricao-meta">Sobre: ${dado.caracteristicas}</p>
            <h5 class="descricao-meta">Cidade: ${dado.cidade}</h5>
            <a href="form.html" target="_blank">entre em contato"</a>
          </div>`;
      };
    };

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
  };