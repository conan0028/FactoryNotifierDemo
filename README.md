
# FactoryNotifierDemo

FactoryNotifierDemo é um exemplo prático de implementação do padrão de projeto Factory Method em TypeScript. 
Este projeto demonstra como criar um sistema para envio de notificações, utilizando uma arquitetura extensível
e polimórfica. As notificações são enviadas por diferentes canais, como e-mail e SMS.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Para execução do JavaScript gerado.
- **Padrão de Projeto Factory Method**: Base arquitetural do projeto.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:
```
FactoryNotifierDemo/
├── dist/                  # Arquivos JavaScript compilados
├── src/                   # Código-fonte TypeScript
│   ├── Notification.ts    # Interface e classes concretas de notificação
│   ├── Notifier.ts        # Classe abstrata para a fábrica
│   ├── EmailNotifier.ts   # Implementação concreta para notificações por e-mail
│   ├── SMSNotifier.ts     # Implementação concreta para notificações por SMS
│   └── index.ts           # Ponto de entrada do projeto
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências do projeto
```

## Instalação e Execução

Siga os passos abaixo para rodar o projeto:

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/FactoryNotifierDemo.git
cd FactoryNotifierDemo
```

### 2. Instalar dependências
Certifique-se de ter o Node.js e o npm instalados. Depois, instale as dependências do projeto:
```bash
npm install
```

### 3. Compilar o TypeScript
Compile os arquivos TypeScript para JavaScript:
```bash
npm run build
```

### 4. Executar o código
Após a compilação, rode o arquivo de saída gerado:
```bash
node dist/index.js
```

## Uso
O projeto cria instâncias de notificadores (e-mail ou SMS) utilizando o padrão Factory Method. O código no `index.ts` ilustra como usar as classes para enviar mensagens de teste:

- Notificação por e-mail:
```typescript
const emailNotifier = new EmailNotifier();
emailNotifier.sendNotification("Esta é uma mensagem de teste para e-mail");
```

- Notificação por SMS:
```typescript
const smsNotifier = new SMSNotifier();
smsNotifier.sendNotification("Esta é uma mensagem de teste para SMS");
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests*.

## Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
