"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotifier = void 0;
//Classe concreta para e-mail
//------------------------------------------------------------------
const Notifier_1 = require("./Notifier");
const Notification_1 = require("./Notification");
// Implementação concreta do Notifier para e-mail
class EmailNotifier extends Notifier_1.Notifier {
    createNotification() {
        return new Notification_1.EmailNotification();
    }
}
exports.EmailNotifier = EmailNotifier;
