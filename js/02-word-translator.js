langCodees = prompt("Enter the lanuage : es/de/en/fr")

if (langCode === 'es') {
    console.log("Hola mundo!"); //spanish
} else if (langCode === 'de'){
    console.log("Hallo Welt!"); //german
} else if (langCode === 'fr'){
    console.log("Bonjour le monde!"); //french
} else {
    console.log('Hello world!') // default English
}