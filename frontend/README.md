# Остановить контейнеры

docker stop backend-container frontend-container

# Удалить контейнеры

docker rm backend-container frontend-container

# Backend (5001)

Перейти в папку backend
cd backend

Пересобрать образ backend
docker build -t backend-app .

Запустить backend на порту 5001
docker run -d -p 5001:5000 --name backend-container backend-app

Проверка backend: curl http://localhost:5001/api/message

# Frontend (3000)

Перейти в папку frontend
cd frontend

Пересобрать образ frontend
docker build -t frontend-app .

Запустить frontend на порту 3000
docker run -d -p 3000:3000 --name frontend-container frontend-app

Проверка frontend: curl http://localhost:3000
