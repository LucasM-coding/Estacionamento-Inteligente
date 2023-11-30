const vagas = document.querySelectorAll('.vaga');
const buttons = document.querySelectorAll('.button-style');

const vaga_livre_img = new Image(500, 500);
vaga_livre_img.src = 'assets/images/Livre.jpg';
vaga_livre_img.style.marginTop = '20px';

const vaga_ocupada_img = new Image(500, 500);
vaga_ocupada_img.src = 'assets/images/Ocupada.jpg';
vaga_ocupada_img.style.marginTop = '20px';

const ws = new WebSocket('ws://localhost:8080'); // Conectando ao servidor WebSocket

ws.onopen = () => {
    console.log('Conexão estabelecida com o servidor WebSocket');
};

ws.onmessage = (event) => {

    const { arduinoData } = JSON.parse(event.data)
    const [valor1, valor2] = arduinoData.split('\r\n')

    const vetor = [valor1, valor2]

    const valor_arduino = vetor.map(valor => parseInt(valor))


    for (let i = 0; i < vagas.length; i++) {
        if (valor_arduino[i] <= 7) {
            vagas[i].src = vaga_ocupada_img.src;
            buttons[i].setAttribute('data-status', 'inativo');
            buttons[i].innerHTML = 'Ocupada';
        } else {
            vagas[i].src = vaga_livre_img.src;
            buttons[i].setAttribute('data-status', 'ativo');
            buttons[i].innerHTML = 'Livre';
        }
    }
    
};

ws.onclose = () => {
    console.log('Conexão encerrada com o servidor WebSocket');
};

ws.onerror = (error) => {
    console.error('Erro na conexão WebSocket:', error);
};