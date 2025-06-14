#!/bin/bash

# Diretório raiz do recomendador-rd-station
ROOT_DIR=$(pwd)

# Diretório do backend
BACKEND_DIR="${ROOT_DIR}/backend"

# Diretório do frontend
FRONTEND_DIR="${ROOT_DIR}/frontend"

echo "Instalando dependências do recomendador-rd-station..."
yarn install

echo "Instalando dependências do backend..."
cd "$BACKEND_DIR" || exit
yarn install

echo "Instalando dependências do frontend..."
cd "$FRONTEND_DIR" || exit
yarn install

echo "Instalação concluída em todos os projetos!"

