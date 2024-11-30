"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotifier = void 0;
//Classe concreta para SMS
//------------------------------------------------------------------
const Notifier_1 = require("./Notifier");
const Notification_1 = require("./Notification");
// Implementação concreta do Notifier para SMS
class SMSNotifier extends Notifier_1.Notifier {
    createNotification() {
        return new Notification_1.SMSNotification();
    }
}
exports.SMSNotifier = SMSNotifier;
