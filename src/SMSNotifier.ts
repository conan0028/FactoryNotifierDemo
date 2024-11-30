//Classe concreta para SMS
//------------------------------------------------------------------
import { Notifier } from "./Notifier";
import { SMSNotification } from "./Notification";

// Implementação concreta do Notifier para SMS
export class SMSNotifier extends Notifier {
  createNotification(): SMSNotification {
    return new SMSNotification();
  }
}
