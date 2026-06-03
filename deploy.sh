#!/bin/bash

set -e

echo "==================================="
echo "Starting deployment..."
echo "==================================="

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Restarting application..."

pm2 restart portfolio || pm2 start "npx vite preview --host 0.0.0.0" --name portfolio

pm2 save

echo "==================================="
echo "Deployment completed successfully!"
echo "==================================="