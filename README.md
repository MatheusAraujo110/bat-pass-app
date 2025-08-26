# Bat Pass App

Aplicativo mobile desenvolvido em React Native com Expo, inspirado no universo do Batman, para geração de senhas seguras de forma divertida e estilizada.

## Funcionalidades
- Tela inicial com logo do Batman e título personalizado
- Estrutura modular de componentes e estilos
- Suporte a assets (imagens, ícones)
- Base pronta para expansão de funcionalidades

## Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do Projeto
```
├── App.tsx
├── package.json
├── assets/
│   └── bat-logo.png
├── src/
│   ├── components/
│   │   └── BatLogo/
│   └── screens/
│       └── Home/
│           ├── index.tsx
│           └── style.tsx
```

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
2. Inicie o projeto:
   ```bash
   npx expo start
   ```
3. Escaneie o QR code com o app Expo Go no seu celular (Android ou iOS).

## Observações
- Certifique-se de que seu dispositivo está na mesma rede Wi-Fi do computador.
- Para iOS, não é necessário Xcode se for usar o Expo Go.

---
Desenvolvido por Matheus Araújo para o desafio DIO.
