const int TRIG[2] = {2, 4};  // Pinos TRIG para os sensores
const int ECHO[2] = {3, 5};

long tempo[2];
float distancia[2];
int mapeamento[2];

void setup() {
  Serial.begin(9600);
  
  pinMode(TRIG[0], OUTPUT);
  pinMode(ECHO[0], INPUT);
  
  pinMode(TRIG[1], OUTPUT);
  pinMode(ECHO[1], INPUT);
  
}

void loop() {
    /* Sensor 1 */

  digitalWrite(TRIG[0], LOW);
  delayMicroseconds(5);
  digitalWrite(TRIG[0], HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG[0], LOW);
  tempo[0] = pulseIn(ECHO[0], HIGH);
  distancia[0] = (tempo[0] / 2) * 0.034;
  mapeamento[0] = map(distancia[0], 50, 150, 2, 1);

  
    /* Sensor 2 */

  digitalWrite(TRIG[1], LOW);
  delayMicroseconds(5);
  digitalWrite(TRIG[1], HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG[1], LOW);
  tempo[1] = pulseIn(ECHO[1], HIGH);
  delayMicroseconds(5);  
  distancia[1] = (tempo[1] / 2) * 0.034;
  mapeamento[1] = map(distancia[1], 50, 150, 2, 1);


  /* Leitura da Variavel Distancia*/

  if(distancia[0] <= 249){

    if(mapeamento[0] == 1){

      Serial.println (distancia[0]);
      
    } else if(mapeamento[0] == 2){

      Serial.println (distancia[0]);
    }
  }

  if(distancia[1] <= 249){

    if(mapeamento[1] == 1){

      Serial.println (distancia[1]);
      
    } else if(mapeamento[1] == 2){

      Serial.println (distancia[1]);
    }
  }

  delay(5000);
}