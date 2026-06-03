#!/bin/bash

set -e

echo "==================================="
echo "Starting deployment..."
echo "==================================="

cd ~/swaroop-dev-space

echo "Syncing with GitHub..."
git fetch origin
git reset --hard origin/main

echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Restarting application..."

if pm2 describe portfolio > /dev/null 2>&1; then
    pm2 restart portfolio
else
    pm2 start "npx vite preview --host 0.0.0.0" --name portfolio
fi

pm2 save

echo "==================================="
echo "Deployment completed successfully!"
echo "==================================="