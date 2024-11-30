"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifier = void 0;
// Classe abstrata Notifier (Fábrica)
class Notifier {
    // Método para enviar a notificação
    sendNotification(message) {
        const notification = this.createNotification();
        notification.send(message);
    }
}
exports.Notifier = Notifier;
