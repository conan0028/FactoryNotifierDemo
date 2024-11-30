//index.ts
//----------------------------------------------------------------
import { EmailNotifier } from "./EmailNotifier";
import { SMSNotifier } from "./SMSNotifier";

// Exemplo de uso:
const emailNotifier = new EmailNotifier();
emailNotifier.sendNotification("Esta é uma mensagem de teste para e-mail");

const smsNotifier = new SMSNotifier();
smsNotifier.sendNotification("Esta é uma mensagem de teste para SMS");
