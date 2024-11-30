"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = exports.EmailNotification = void 0;
// Classe concreta de notificação por e-mail
class EmailNotification {
    send(message) {
        console.log(`Enviando e-mail: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
// Classe concreta de notificação por SMS
class SMSNotification {
    send(message) {
        console.log(`Enviando SMS: ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
