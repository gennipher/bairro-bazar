module.exports = {
    // Define o ambiente de teste para ambiente Node.js
    testEnvironment: 'node',
    // Define os diretórios raiz para os testes
    roots: ['<rootDir>/src'],
    // Define os padrões de nome de arquivo de teste
    testMatch: ['**/__tests__/**/*.test.js'],
    // Opções adicionais podem ser adicionadas aqui conforme necessário
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '\\.(js|jsx)$': 'babel-jest',
        '\\.(scss)$': 'jest-transform-stub',
      },
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.png\\.[^\\\/]+$"
      ],
    testEnvironment: 'jsdom'
  };