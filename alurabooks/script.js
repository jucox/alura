async function getAddress (cep) {
    const errorMessage = document.querySelector('#error');

    try {
        const viacepQuery = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        const address = await viacepQuery.json();

        if (address.erro) {
            throw Error('Invalid CEP!')
        }

        const city = document.querySelector('#cidade');
        const street = document.querySelector('#endereco');
        const state = document.querySelector('#estado');

        city.value = address.localidade;
        street.value = address.logradouro;
        state.value = address.uf;

        console.log(address);
        return address;
    } catch (error) {
        errorMessage.innerHTML = '<p>Invalid CEP! Try again.</p>';
        console.log(error);
    }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => getAddress(cep.value));