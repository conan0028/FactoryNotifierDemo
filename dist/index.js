"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts
//----------------------------------------------------------------
const EmailNotifier_1 = require("./EmailNotifier");
const SMSNotifier_1 = require("./SMSNotifier");
// Exemplo de uso:
const emailNotifier = new EmailNotifier_1.EmailNotifier();
emailNotifier.sendNotification("Esta é uma mensagem de teste para e-mail");
const smsNotifier = new SMSNotifier_1.SMSNotifier();
smsNotifier.sendNotification("Esta é uma mensagem de teste para SMS");
