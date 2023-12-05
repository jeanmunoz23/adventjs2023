function decode(message) {
    const regex = /\(([^()]*)\)/;

    while (regex.test(message)) {
        message = message.replace(regex, (match, text) => text.split('').reverse().join(''));
    }

return message;
}