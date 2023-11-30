const WebSocket      = require('ws');
const { SerialPort } = require('serialport');

// Criando um servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

// Criando uma conexão serial com o Arduino
const arduino = new SerialPort({path:'COM3', baudRate:9600});

wss.on('connection', (ws) => {
    console.log('Servidor WebSocket em execução na porta 8080');

    arduino.on('data', (data) => {
        ws.send(JSON.stringify({ arduinoData: data.toString() }));
    });

});

