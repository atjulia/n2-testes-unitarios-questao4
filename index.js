// Você deve implementar uma função chamada encryptThis(message) que criptografa uma mensagem de texto seguindo as regras especificadas abaixo:
// 1: A mensagem é uma string contendo palavras separadas por espaços.
// 2: Cada palavra na mensagem deve ser criptografada da seguinte maneira:
//   2.1: O primeiro caractere da palavra deve ser convertido para o seu código ASCII.
//   2.2: O segundo caractere da palavra deve ser trocado com o último caractere.
//   2.3: A função deve retornar a mensagem criptografada, mantendo a mesma estrutura de palavras separadas por espaços.

"use strict";

function encryptThis(message) {
    // Divide a mensagem por espaços
    const words = message.split(' ');

    // Função auxiliar para criptografar uma única palavra
    const encryptWord = (word) => {
        // Caso a palavra seja vazia, retorna vazio
        if (word.length === 0)
            return '';

        // Retorna o código ASCII da primeira letra da palavra
        const firstChar = word.charCodeAt(0).toString();
        
        // Monta a palavra criptografada
        const encryptedWord = [
            firstChar,
            word[word.length - 1],
            word.slice(2, -1),
            word[1],
        ].join('');

        return encryptedWord;
    };

    // Mapeia cada palavra, criptografa e junta as palavras novamente com os espaços
    const encryptedMessage = words.map(encryptWord).join(' ');
    return encryptedMessage;
}

// Testes unitários
function testEncryptThis() {
    // Espera o resultado 72olle
    const result1 = encryptThis("Hello");
    console.assert(result1 === '72olle', `Erro no Teste 1. Resultado: ${result1}`);
  
    // Espera o resultado ser 103doo
    const result2 = encryptThis("good");
    console.assert(result2 === '103doo', `Erro no Teste 2. Resultado: ${result2}`);
  
    // Espera o resultado ser 104olle 119drlo
    const result3 = encryptThis("hello world");
    console.assert(result3 === '104olle 119drlo', `Erro no Teste 3. Resultado: ${result3}`);
  
    // String vazia deve retornar vazio
    const result4 = encryptThis("");
    console.assert(result4 === '', `Erro no Teste 4. Resultado: ${result4}`);
  
    // Espera o resultado ser 97a
    const result5 = encryptThis("a");
    console.assert(result5 === '97a', `Erro no Teste 5. Resultado: ${result5}`);
}
  
testEncryptThis();