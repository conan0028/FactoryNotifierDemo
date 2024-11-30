//Classe concreta para e-mail
//------------------------------------------------------------------
import { Notifier } from "./Notifier";
import { EmailNotification } from "./Notification";

// Implementação concreta do Notifier para e-mail
export class EmailNotifier extends Notifier {
  createNotification(): EmailNotification {
    return new EmailNotification();
  }
}
