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
        let celulaLatitude = linha.insertCell(0);
        let celulaLongitude = linha.insertCell(1);
        celulaLatitude.innerHTML = `${dados.coord.lat}\u00B0`;
        celulaLongitude.innerHTML = `${dados.coord.lon}\u00B0`;
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



async function pesquisarDescricao(){
    const endpoint = '/pesquisar';
    const latEndpoint = document.querySelector("#latInput").value;
    const lonEndpoint = document.querySelector("#lonInput").value;
    const urlcompleta = `${protocolo}${host}${endpoint}/${latEndpoint}/${lonEndpoint}`;
    let lat = document.querySelector("#latInput").value
    let lon = document.querySelector("#lonInput").value

    try{
        if (lat && lon){
        cidadeInput.value = "";
        const dados = (await axios.get(urlcompleta)).data;
        let tabela = document.querySelector(".dados");
        let corpoTabela = tabela.getElementsByTagName('tbody')[0];
        corpoTabela.innerHTML = "";

        let linha = corpoTabela.insertRow();
        let celulaCidade = linha.insertCell(0);
        let celulaLatitude = linha.insertCell(1);
        let celulaLongitude = linha.insertCell(2);
        let celulaSensacaoTermica = linha.insertCell(3);
        let celulaDescricao = linha.insertCell(4);
        celulaCidade.innerHTML = dados.cidade;
        celulaLatitude.innerHTML = `${dados.latLon.lat}\u00B0`;
        celulaLongitude.innerHTML = `${dados.latLon.lon}\u00B0`;
        celulaSensacaoTermica.innerHTML = `${dados.senT}\u00B0C`;
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