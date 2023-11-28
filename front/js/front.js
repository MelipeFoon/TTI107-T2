const protocolo = 'http://';
const host = 'localhost:3000';

async function pesquisarCidade(){
    const endpoint = '/pesquisar';
    const cidadeEndpoint = document.querySelector("#cidadeInput").value;
    const urlcompleta = `${protocolo}${host}${endpoint}/${cidadeEndpoint}`;
    let cidade = document.querySelector("#cidadeInput").value

    try{
        if (cidade){
        cidadeInput.value = "";
        const dados = (await axios.get(urlcompleta)).data;
        let tabela = document.querySelector(".coordenadas");
        let corpoTabela = tabela.getElementsByTagName('tbody')[0];
        corpoTabela.innerHTML = "";

        let linha = corpoTabela.insertRow();
        let celulaCidade = linha.insertCell(0);
        let celulaLatitude = linha.insertCell(1);
        let celulaLongitude = linha.insertCell(2);
        let celulaSensacaoTermica = linha.insertCell(3);
        let celulaDescricao = linha.insertCell(4);
        celulaCidade.innerHTML = dados.cidade;
        celulaLatitude.innerHTML = dados.coord.lat;
        celulaLongitude.innerHTML = dados.coord.lon;
        celulaSensacaoTermica.innerHTML = dados.senT;
        celulaDescricao.innerHTML = dados.descricao;
        }

        else{
            let alert = document.querySelector('#alert');
            alert.classList.add('show');
            alert.classList.remove('d-none');
            setTimeout(() => {
                alert.classList.add('d-none')
                alert.classList.remove('show')
            }, 10000)
        }
    }
    catch(error){
        let alert = document.querySelector('.alert');
        alert.classList.add('show');
        alert.classList.remove('d-none');
        setTimeout(() => {
            alert.classList.add('d-none')
            alert.classList.remove('show')
        }, 10000)
    }
}