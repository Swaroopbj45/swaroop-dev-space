#!/bin/bash

set -e

echo "==================================="
echo "Starting deployment..."
echo "==================================="

cd ~/swaroop-dev-space

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm i

echo "Building application..."
npm run build

echo "Restarting application..."

if pm2 describe portfolio > /dev/null; then
    pm2 restart portfolio
else
    pm2 start "npx vite preview --host 0.0.0.0" --name portfolio
fi

pm2 save

echo "==================================="
echo "Deployment completed successfully!"
echo "==================================="