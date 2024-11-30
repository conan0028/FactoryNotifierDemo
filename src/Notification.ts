//Interface e classes concretas
//------------------------------------------------------------------
// Interface para notificação
export interface Notification {
  send(message: string): void;
}

// Classe concreta de notificação por e-mail
export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando e-mail: ${message}`);
  }
}

// Classe concreta de notificação por SMS
export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}
