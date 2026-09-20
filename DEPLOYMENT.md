
# AWS App Runner Deployment Guide

## Prerequisites
- AWS CLI configured (`aws configure`)
- GitHub account
- Node.js installed locally

## App Runner Configuration

| Setting | Value |
|---------|-------|
| Source | GitHub → your repo |
| Branch | `main` |
| Build command | `npm install && npm run build` |
| Start command | `npm run serve` |
| Port | `3000` |
| Auto-deploy | Enabled |

## Steps

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/amer123499/task-manager-app.git
   git push -u origin main
In AWS Console → App Runner → Create Service:

Source: GitHub

Repository: your repo

Branch: main

Deployment trigger: Automatic

Build: npm install && npm run build

Start: npm run serve

Wait ~5 minutes → live URL: https://xxxxx.awsapprunner.com

AI Prompt (paste into Cursor/Claude Code)
Deploy my React app to AWS App Runner completely:

Create a new GitHub repository for my app

Initialize git and push all my code to GitHub

Set up AWS App Runner service

Connect App Runner to my GitHub repo

Configure automatic deployments

Deploy my app using free tier settings

Give me the live public URL when done.
Handle all the technical setup for me automatically.
Important: My React app uses 'npm run build' to build and 'npm start'
for development.

Free Tier
2 million requests/month

100 GB data transfer/month

Enough for student projects

text

---

## 🚀 Quick Start Commands

```bash
# 1. Create project folder
mkdir task-manager-app && cd task-manager-app

# 2. Create the files above (copy/paste)

# 3. Install & run
npm install
npm start
# → http://localhost:3000