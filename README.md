# Otra forma de integrar Django y Vue
## Dependencias :gear:
[![docker-v19.03.12-green](https://img.shields.io/badge/docker-v19.03.12-green)](https://docs.docker.com/engine/) [![docker-compose-v1.24.1-green](https://img.shields.io/badge/docker--compose-v1.24.1-green)](https://docs.docker.com/compose/) [![node-v12.16.1-green](https://img.shields.io/badge/node-v12.16.1-green)](https://nodejs.org/es/docs/) [![git-v2.28.0-green](https://img.shields.io/badge/git-v2.28.0-green)](https://git-scm.com/doc)

 > Recomiendo usar [nvm](https://github.com/nvm-sh/nvm) para manejar distintas versiones de node

## Iniciar :rocket:
1. Clonar repositorio
```sh
git clone https://github.com/ihleonel/vuedjango.git
```
2. Instalar dependencias
```sh
npm install
```
3. Construir bundle
```sh
npm run build
```
4. Variables de entorno
```sh
cp .env.example .env
```
5. Levantar contenedores
```sh
docker-compose up
```
6. Si todo salió bien el proyecto debería estar corriendo en http://localhost:8000
