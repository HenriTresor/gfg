#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up GFG Server...\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
        console.log('📋 Creating .env file from env.example...');
        fs.copyFileSync(envExamplePath, envPath);
        console.log('✅ .env file created! Please update it with your database credentials.\n');
    } else {
        console.log('⚠️  env.example not found. Please create a .env file manually.\n');
    }
} else {
    console.log('✅ .env file already exists.\n');
}

// Create logs directory
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    console.log('📁 Creating logs directory...');
    fs.mkdirSync(logsDir);
    console.log('✅ Logs directory created.\n');
} else {
    console.log('✅ Logs directory already exists.\n');
}

// Create uploads directory
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    console.log('📁 Creating uploads directory...');
    fs.mkdirSync(uploadsDir);
    console.log('✅ Uploads directory created.\n');
} else {
    console.log('✅ Uploads directory already exists.\n');
}

// Generate Prisma client
console.log('🔧 Generating Prisma client...');
try {
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('✅ Prisma client generated.\n');
} catch (error) {
    console.log('❌ Failed to generate Prisma client:', error.message);
}

console.log('🎉 Setup complete!\n');
console.log('Next steps:');
console.log('1. Update your .env file with database credentials');
console.log('2. Create your PostgreSQL database');
console.log('3. Run: npm run prisma:migrate');
console.log('4. (Optional) Run: npm run db:seed');
console.log('5. Start development server: npm run dev');
console.log('\nHappy coding! 🚀');

