# Estacionamento-Inteligente
Projeto do segundo período do curso de Ciência da Computação:

A base do Estacionamento Inteligente reside na utilização de sensores ultrassônicos, especificamente dois sensores HC-SR04 por vaga. Estes sensores são posicionados estrategicamente para medir a distância total da vaga. Quando um veículo entra na vaga, alterando a distância medida pelos sensores, o sistema reconhece automaticamente a vaga como ocupada. Se a distância permanece inalterada, a vaga é considerada livre. Essa detecção é realizada em tempo real, proporcionando informações precisas sobre o status de cada vaga.

O Arduino Uno R3 SMD CH340 atua como o cérebro do sistema, coordenando a leitura dos sensores e a transmissão dos dados. O Arduino envia o valor da distância pela porta serial, garantindo uma transmissão eficiente.

Simultaneamente, o projeto inclui uma interface web projetada em HTML e CSS. Esta interface oferece aos usuários uma visualização intuitiva do status de ocupação das vagas. As melhorias gráficas e a implementação de um script em JavaScript garantem uma experiência do usuário mais fluida e responsiva. A atualização dinâmica do status das vagas na página web é integrada ao código Arduino, garantindo que as mudanças sejam refletidas em tempo real.


![image](https://github.com/LucasM-coding/Estacionamento-Inteligente/assets/131298511/bf6bad71-6b8d-4e3b-9f8a-84865890d500)
