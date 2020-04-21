var push = require('web-push');

let vapidKeys = {
    publicKey: 'BFiotPrbxsNvsvP0F0A6cuOWNe4rRQp7EtEICqgNBupUFcNi_7hraj58_7GzljjCS9OAP9q33MgEQ6-9pTKi8Ms',
    privateKey: 'FnMFQH4bhEZy_Ratqdyf18vAGj8R4lIZbEUT13Qz58I'
}





push.setVapidDetails('mailto:test@code.com.mk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message');
