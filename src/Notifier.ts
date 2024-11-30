//Classe abstrata
//------------------------------------------------------------------
import { Notification } from "./Notification";

// Classe abstrata Notifier (Fábrica)
export abstract class Notifier {
  // Método Factory que deve ser implementado pelas subclasses
  abstract createNotification(): Notification;

  // Método para enviar a notificação
  sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}
