#!/bin/bash

# ETEMS Project Setup Script
# Run this to initialize the full development environment

echo "🚀 Setting up ETEMS (Enterprise Employee Travel & Expense Management System)"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed. Please install Node.js 20 LTS first."
  exit 1
fi

echo "✅ Node.js $(node --version) found"

# Check for MongoDB
if ! command -v mongod &> /dev/null; then
  echo "⚠️  MongoDB is not installed. Please install MongoDB 7+ to run the backend."
  echo "   Visit: https://www.mongodb.com/try/download/community"
fi

# Check for Redis
if ! command -v redis-server &> /dev/null; then
  echo "⚠️  Redis is not installed. Please install Redis to run job queues."
  echo "   Visit: https://redis.io/download"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔑 Setting up environment variables..."
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ Created .env file. Please update it with your actual values."
else
  echo "✅ .env file already exists."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Update .env with your MongoDB, Redis, and JWT keys"
echo "  2. Start MongoDB: mongod"
echo "  3. Start Redis: redis-server"
echo "  4. Run: npm run dev"
echo ""
echo "For more details, see README.md and Agent/Rules/"
