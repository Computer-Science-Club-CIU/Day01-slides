---
theme: seriph
background: /bg.jpg
class: 'text-center with-overlay'
highlighter: shiki
lineNumbers: true
info: |
  ## DevOps for Beginners
  A comprehensive guide for beginners entering the world of DevOps.
drawings:
  persist: false
css: unocss
colorSchema: 'dark'
---

<style>
.with-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Adjust the opacity as needed */
  z-index: -1;
}

.footer {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 6px;
  left: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
}


.footer a {
  color: #fff;
  text-decoration: underline;
}
.footer img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;

}

.footer .name {
  font-size: 20px;
  font-weight: bold;
}

.name-container{
  justify: center;
}
.footer .job-description {
  font-size: 16px;
}
.small-code {
  font-size: 0.8em;
}
</style>

# DevOps Fundamentals
### A Comprehensive Guide for Beginners

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer custom-button" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="footer">
  <img src="/3BEN0-5.jpg" alt="benjys">
  <div class="name-container">
  <div class="name">Benjamin Oguntoye</div>
  <div class="job-description">DevOps Enginer <a href="https://pageit.io">@Pageit</a></div>
  </div>
</div>

<!--
Welcome to our comprehensive DevOps training course. This presentation covers fundamental concepts and practical skills.
-->

---
layout: intro
---

# Course Overview
<div class="py-4"></div>
<div class="grid grid-cols-2 gap-4">

<div>

## What We'll Cover
- DevOps Fundamentals
- Linux Essentials
- Version Control
- CI/CD Pipelines
- Best Practices
- Hands-on Exercises

</div>

<div>

## Learning Objectives
- Understand DevOps principles
- Master essential tools
- Implement automation
- Deploy applications
- Monitor systems

</div>

</div>

---
# layout: two-cols
---

# What is DevOps?

<div class="mt-4">

DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to:


<v-clicks>

- 🚀 Shorten development lifecycle
- 🔄 Enable continuous delivery
- 💪 Ensure high software quality
- 🤝 Foster collaboration

</v-clicks>

<v-after>
<div class="pl-4 mt-12">
```mermaid {scale: 0.7}
graph LR
    A[Plan] --> B[Code]
    B --> C[Build]
    C --> D[Test]
    D --> E[Deploy]
    E --> F[Operate]
    F --> G[Monitor]
    G --> A
```
</div>
</v-after>
</div>



---
layout: default
---

# Core DevOps Principles

<div class="grid grid-cols-3 gap-4 mt-8">

<div v-click class="p-4 bg-blue-500 bg-opacity-10 rounded">
  <carbon:continuous-integration class="text-3xl mb-2 text-blue-400"/>
  <h3 class="text-blue-400">Continuous Integration</h3>
  <p class="text-sm">Frequently merge code changes into a central repository</p>
</div>

<div v-click class="p-4 bg-green-500 bg-opacity-10 rounded">
  <carbon:delivery class="text-3xl mb-2 text-green-400"/>
  <h3 class="text-green-400">Continuous Delivery</h3>
  <p class="text-sm">Automate software release process</p>
</div>

<div v-click class="p-4 bg-purple-500 bg-opacity-10 rounded">
  <carbon:cloud-monitoring class="text-3xl mb-2 text-purple-400"/>
  <h3 class="text-purple-400">Monitoring</h3>
  <p class="text-sm">Continuous system observation and improvement</p>
</div>

</div>

---
layout: default
---

# DevOps Tools Ecosystem

<div class="grid grid-cols-3 gap-4 mt-4">

<div v-click class="p-4 border rounded">
  <h3 class="text-blue-400">Version Control</h3>
  <ul class="text-sm mt-2">
    <li>Git</li>
    <li>GitHub</li>
    <li>GitLab</li>
  </ul>
</div>

<div v-click class="p-4 border rounded">
  <h3 class="text-green-400">CI/CD</h3>
  <ul class="text-sm mt-2">
    <li>Jenkins</li>
    <li>GitHub Actions</li>
    <li>CircleCI</li>
  </ul>
</div>

<div v-click class="p-4 border rounded">
  <h3 class="text-purple-400">Containers</h3>
  <ul class="text-sm mt-2">
    <li>Docker</li>
    <li>Kubernetes</li>
    <li>Podman</li>
  </ul>
</div>

<div v-click class="p-4 border rounded">
  <h3 class="text-yellow-400">Infrastructure</h3>
  <ul class="text-sm mt-2">
    <li>Terraform</li>
    <li>Ansible</li>
    <li>CloudFormation</li>
  </ul>
</div>

<div v-click class="p-4 border rounded">
  <h3 class="text-red-400">Monitoring</h3>
  <ul class="text-sm mt-2">
    <li>Prometheus</li>
    <li>Grafana</li>
    <li>ELK Stack</li>
  </ul>
</div>

<div v-click class="p-4 border rounded">
  <h3 class="text-orange-400">Cloud</h3>
  <ul class="text-sm mt-2">
    <li>AWS</li>
    <li>Azure</li>
    <li>GCP</li>
  </ul>
</div>

</div>

---
layout: section
---

# Linux Fundamentals
Essential Commands for DevOps Engineers

---

# Essential Linux Commands

<div class="grid grid-cols-2 gap-4">

<div>

## File Operations
```bash
# List files
ls -la

# Change directory
cd /path/to/dir

# Create/Remove directories
mkdir new_dir
rmdir empty_dir

# Copy/Move files
cp source dest
mv old_name new_name
```

</div>

<div>

## System Operations
```bash
# Check system resources
top
htop

# View disk space
df -h
du -sh *

# Process management
ps aux
kill <pid>
```

</div>

</div>

---
layout: two-cols

---

# User Management


<div class="mt-4">


## Commands
```bash
# Add new user
sudo useradd username

# Set password
sudo passwd username

# Add to group
sudo usermod -aG group username

# Switch user
su - username
```

</div>

<div class="mt-2">

## Explanation of 775:
- Owner: Full read, write, and execute (rwx = 7).
- Group: Full read, write, and execute (rwx = 7).
- Others: Read and execute only (r-x = 5).
</div>

::right::

<div class="mt-14 mx-2">

## File Permissions
```bash
# Change ownership
chown user:group file

# Modify permissions
chmod 755 file

# Permission structure
rwx rwx rwx
│   │   └── Others
│   └────── Group
└────────── Owner
```
</div>

---
layout: default
---

# Package Management

<div class="grid grid-cols-2 gap-4">

<div>

## APT (Debian/Ubuntu)
```bash
# Update package list
apt update

# Install package
apt install package-name

# Remove package
apt remove package-name

# Search packages
apt search keyword
```

</div>

<div>

## YUM/DNF (RHEL/CentOS)
```bash
# Update package list
yum update

# Install package
yum install package-name

# Remove package
yum remove package-name

# Search packages
yum search keyword
```

</div>

</div>

---
layout: default
---

# Version Control with Git

<div class="grid grid-cols-2 gap-4">

<div>

## Basic Commands
```bash
# Initialize repository
git init

# Stage changes
git add .

# Commit changes
git commit -m "message"

# Push to remote
git push origin main
```

</div>

<div>

## Branching Strategy
```mermaid {scale: 0.7}
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
```

</div>

</div>

---
layout: default
---

# Advanced Git Operations

<div class="grid grid-cols-2 gap-4">

<div>

## Branching & Merging
```bash
# Create branch
git checkout -b feature

# Merge branch
git merge feature

# Rebase branch
git rebase main

# Cherry-pick commit
git cherry-pick commit-hash
```

[git detailed turorial](https://www.alexeble.de/talks/git-most-wanted/26)
</div>

<div>

## Collaboration
```bash
# Fetch updates
git fetch origin

# Pull changes
git pull origin main

# Create PR
gh pr create

# Review PR
gh pr review
```

</div>

</div>

---
layout: two-cols
---

# CI/CD Pipeline Implementation

<div class="mt-4">

## GitHub Actions Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
```

</div>

::right::

<div class="mt-4">

## Pipeline Stages

```mermaid {scale: 0.7}
graph TD
    A[Code Push] --> B[Build]
    B --> C[Test]
    C --> D[Deploy to Staging]
    D --> E[Integration Tests]
    E --> F[Deploy to Production]
```

</div>

---
layout: default
---

# Best Practices

<div class="grid grid-cols-2 gap-4">

<div>

## Code Management
- Use version control
- Write clean code
- Document thoroughly
- Review code regularly
- Follow style guides

</div>

<div>

## DevOps Practices
- Automate everything
- Monitor continuously
- Test extensively
- Deploy frequently
- Maintain security

</div>

</div>

---
layout: default
---

# Monitoring and Logging

<div class="grid grid-cols-2 gap-4">

<div>

## Key Metrics
- System performance
- Application health
- Error rates
- Response times
- Resource usage

</div>

<div>

## Tools
```bash
# Prometheus queries
rate(http_requests_total[5m])

# Grafana dashboard
grafana-cli dashboard install

# ELK Stack
filebeat setup
```

</div>

</div>

---
layout: section
---

# Practice Time
CI/CD pipeline and deploying an app
---
layout: cover
---

# Overview

<div class="grid grid-cols-2 gap-4">

<div>

## Topics Covered
- Server Requirements
- GitHub Repository Setup
- CI/CD Pipeline
- Nginx Configuration
- DNS Management
- Deployment Verification

</div>

<div>

## Learning Objectives
- Understand deployment architecture
- Set up secure CI/CD pipelines
- Configure web servers
- Manage DNS and SSL
- Monitor deployments

</div>

</div>

---
layout: center
class: "text-center"
---

# Hands-on Exercise

<div class="grid grid-cols-2 gap-4 mt-8">

<div class="text-left">

## Task
Create a simple CI/CD pipeline that:
1. Builds a react application
2. Runs unit tests
3. Deploys to staging
4. Runs integration tests
5. Deploys to production

</div>

<div class="text-left">

## Solution Template
```yaml
name: Exercise Pipeline
on: [push]
jobs:
  pipeline:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      # Add your steps here
```

</div>

</div>

---
layout: default
---

# Exercise Server Deployment Overview

<div class="grid grid-cols-2 gap-4">

<div>

## Basic Requirements
- 2+ CPU cores
- 2GB+ RAM
- 20GB+ SSD storage
- Ubuntu 22.04 LTS
- Secure SSH access

</div>

<div>

## Architecture Overview
```mermaid {scale: 0.5}
graph TD
    A[GitHub Repository] -->|Push| B[GitHub Actions]
    B -->|Build & Test| C[Build Artifacts]
    C -->|Deploy| D[Web Server]
    D -->|Serve| E[Cloudflare]
    E -->|Deliver| F[Users]
    G[Monitoring] -->|Watch| D
```

</div>

</div>

---
layout: two-cols
---

# GitHub Repository Setup

<div class="mt-4">

## Repository Structure
```bash
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── __test__/
├── ├── components/
│   ├── hooks/
│   └── types/
├── tests/
└── package.json
```

## Branch Protection
```yaml
main:
  - Require pull request reviews
  - Require status checks
  - No force push
  - Include administrators
```

</div>

::right::

<div class="mt-4">

## github Secrets
- `DEPLOY_HOST`
- `DEPLOY_USERNAME`
- `DEPLOY_PASSWORD`

## Best Practices
- Use environment variables
- Rotate secrets regularly
- Limit secret access
- Audit secret usage

</div>

---
layout: default
---

# CI/CD Pipeline Configuration

<div class="grid grid-cols-2 gap-8">

<div>

```yaml {class="small-code"}
name: Deploy Application
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: |
          npm install
          npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USERNAME }}
          password: ${{ secrets.DEPLOY_PASSWORD }}
          script: |
```

</div>

<div>

## Pipeline Stages

```mermaid {scale: 0.7}
graph TD
    A[Code Push] --> B[Install Dependencies]
    B --> C[Run Tests]
    C --> D[Build Application]
    D --> E[Deploy to Server]
    E --> F[Health Check]
```
</div>

</div>

---
layout: default
---

# Nginx Web Server Configuration

<div class="grid grid-cols-2 gap-4">

<div>

## Installation
```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Nginx
sudo apt install nginx -y

# Install Node.js (using NodeSource)
curl -fsSL https://deb.nodesource.com/20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 process manager
sudo npm install -g pm2

# Verify PM2 installation
pm2 -v

# Run app with PM2
pm2 start "npx vite preview" --name "vite-preview"
```


</div>
<div>

## Server Block
```nginx
server {
    listen 80;
    listen [ip-address];
    server_name domain_name;
    location / {
        proxy_pass http://localhost:PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Restart nginx
```bash
# Update system
sudo ngnix -t
sudo systemctl reload nginx
```
</div>
</div>

---
layout: default
---

# DNS Management with Cloudflare

<div class="grid grid-cols-2 gap-4">

<div>

## DNS Records Setup
```plaintext
Type    Name    Content         Proxy
A       @       1.2.3.4        Yes
CNAME   www     example.com    Yes
CNAME   api     example.com    Yes
TXT     @       v=spf1...      No
```

## SSL/TLS Settings
- Mode: Full (strict)
- Min TLS: 1.2
- Opportunistic Encryption: On
- TLS 1.3: On
- HSTS: Enabled

</div>

<div>

## Performance Settings
- Auto Minify: CSS, JS, HTML
- Brotli Compression: On
- HTTP/2: Enabled
- HTTP/3: Enabled
- Early Hints: On
- Rocket Loader: On

## Security Settings
- WAF: Enabled
- Bot Fight Mode: On
- Browser Integrity Check: On
- Email Obfuscation: On
- Hotlink Protection: On

</div>

</div>

---
layout: default
---

# Deployment Verification

<div class="grid grid-cols-2 gap-4">

<div>

## Health Checks
```bash
# Check server status
systemctl status nginx

# Test Nginx config
nginx -t

# SSL verification
curl -vI https://example.com

# DNS propagation
dig example.com
```

## Monitoring Setup
- Server metrics (CPU, RAM, Disk)
- Application logs
- Error rates
- Response times
- SSL certificate expiry
- Security alerts

</div>

<div>

## Troubleshooting Steps
1. Check application logs
   ```bash
   journalctl -u nginx
   ```

2. Verify permissions
   ```bash
   ls -la /var/www/example.com
   ```

3. Test connectivity
   ```bash
   netstat -tulpn
   ```

4. Monitor resources
   ```bash
   htop
   df -h
   ```

5. Review security
   ```bash
   sudo fail2ban-client status
   ```

</div>

</div>

---
layout: default
---

# Deployment Checklist

<div class="grid grid-cols-2 gap-4">

<div>

## Pre-Deployment
- [ ]  Code review completed
- [ ]  Tests passing
- [ ]  Dependencies updated
- [ ]  Security scan clean
- [ ]  Backup created
- [ ]  Rollback plan ready

## During Deployment
- [ ]  Zero-downtime strategy
- [ ]  Database migrations
- [ ]  Cache clearing
- [ ]  SSL verification
- [ ]  DNS propagation check

</div>

<div>

## Post-Deployment
- [ ]  Health checks passing
- [ ]  Monitoring active
- [ ]  Performance metrics
- [ ]  Error rates normal
- [ ]  User verification
- [ ]  Documentation updated

## Emergency Procedures
- Rollback triggers
- Incident response
- Communication plan
- Support escalation
- Recovery steps

</div>

</div>

---
layout: end
---

# Thank You!

<!--
This concludes our comprehensive deployment guide. Remember to always follow security best practices and maintain proper documentation.
-->

---
layout: cover
---
# Day 2: Deploying a Simple Page on a Server



---
layout: default
---

# How to Deploy a static page with Nginx Webserver

<div class="grid grid-cols-2 gap-4">

<div>

## Topics Covered
- ssh access to a server
- creating website files
- Nginx Configuration
- Deployment Process

</div>

<div>

## Learning Objectives
- Configure Nginx for deployment
- Deploy a simple page
</div>
</div>

---
layout: default
---

# User Registration and Subdomain Creation

<div class="grid grid-cols-2 gap-4">

<div>

## Registration Process
1. Visit the registration page [register](https://csclub.benjys.me)
2. Fill in the required details
3. Submit the form
4. ssh to the server with the instruction provided after registration

</div>

<div>

## or scan qr code
![QR Code](/benjst.png)

</div>

</div>

---
layout: default
---

# Accessing Your Server

<div class="grid grid-cols-2 gap-4">

<div>

## SSH Access
```bash
# Connect to your server
ssh username@server-ip

# Example:
ssh student1@192.168.1.100
```

## Initial Setup
```bash
# Navigate to home directory
cd ~

# Create index.html
nano index.html
```

</div>

<div>

## Important Notes
- Replace 'username' with your provided username
- Use the password provided to you
- Keep your credentials secure
- Change password after first login

</div>

</div>

---
layout: default
---

# Customizing Your Profile

<div class="grid grid-cols-2 gap-4">

<div>

## Required Changes
1. Profile Image
   ```html
   <img src="/your-image.jpg" alt="Your Name" />
   ```

2. Personal Details
   ```html
   <h1>Your Name</h1>
   <p>
     Your Role at
     <a href="your-company-url" class="company">
       @CompanyName
     </a>
   </p>
   ```

</div>

<div>

## Additional Customization
```html
<!-- Update Skills -->
<ul class="skills">
  <li>Your Skill 1</li>
  <li>Your Skill 2</li>
  <li>Your Skill 3</li>
</ul>

<!-- Update Social Link -->
<a href="https://github.com/yourusername"
   class="cta">
  Visit my GitHub
</a>
```

</div>

</div>

---
layout: default
---

# Profile Setup Steps

<div class="grid grid-cols-2 gap-4">

<div>

## 1. Upload Your Image
```bash
# From your local machine
scp your-image.jpg username@server-ip:~/

# Rename if needed
mv your-image.jpg profile.jpg
```

## 2. Edit index.html
```bash
# Open editor
nano index.html

# Copy the template
# Replace the following:
# - Image path
# - Your name
# - Your role
# - Company details
# - Skills list
# - GitHub link
```

</div>

<div>

## 3. Verify Changes
```bash
# Check file permissions
ls -l index.html

# View your changes
curl http://username.example.com

# Test image loading
curl -I http://username.example.com/your-image.jpg
```

## Common Issues
- Image not loading
- Incorrect file permissions
- Syntax errors in HTML
- Broken links
- Missing closing tags

</div>

</div>

---
layout: default
---

# Testing Your Profile

<div class="grid grid-cols-2 gap-4">

<div>

## Visual Checks
- Profile image loads correctly
- All text is visible
- Links work properly
- Skills are displayed
- Layout is responsive

## Browser Testing
```bash
# Get your subdomain URL
echo "http://username.example.com"

# Test in different browsers
# - Chrome
# - Firefox
# - Safari
# - Mobile devices
```

</div>

<div>

## Troubleshooting
```bash
# Check file ownership
ls -l ~/index.html

# Fix permissions if needed
chmod 644 ~/index.html

# Validate HTML
curl -s localhost | html5validator

# Check logs
tail -f /var/log/nginx/error.log
```

</div>

</div>
---
layout: default
---

# Nginx Configuration Guide

<div class="grid grid-cols-2 gap-4">

<div>

## Step 1: Create Config File
```bash
# Create config file with your username
sudo nano /etc/nginx/sites-available/<username>
```

## Step 2: Add Configuration
```nginx
server {
    listen 80;
    server_name <username>.benjys.me;

    root /home/<username>;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

</div>

<div>

## Step 3: Create Symbolic Link
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/<username> \
    /etc/nginx/sites-enabled/<username>
```

## Step 4: Test & Reload
```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

</div>

</div>

---
layout: default
---

# Configuration Steps Explained

<div class="grid grid-cols-2 gap-4">

<div>

## File Locations
```mermaid {scale: 0.7}
graph TD
    A[/etc/nginx/sites-available/] -->|symlink| B[/etc/nginx/sites-enabled/]
    C[/home/username/] -->|serves| D[index.html]
```

## Important Notes
- Replace 'username' with your actual username
- Ensure proper file permissions
- Keep backup of original files
- Follow naming conventions

</div>

<div>

## Verification Steps
```bash
# Check site status
curl -I http://username.benjys.me

# View error logs
sudo tail -f /var/log/nginx/error.log

# View access logs
sudo tail -f /var/log/nginx/access.log

# Check permissions
ls -la /home/username/index.html
```

</div>

</div>

---
layout: default
---

# Troubleshooting Common Issues

<div class="grid grid-cols-2 gap-4">

<div>

## Permission Issues
```bash
# Set correct ownership
sudo chown -R username:username /home/username

# Set correct permissions
chmod 755 /home/username
chmod 644 /home/username/index.html
```

## 404 Errors
- Verify file exists
- Check file permissions
- Confirm correct path in config
- Validate server_name

</div>

<div>

## Configuration Errors
```bash
# Common fixes
sudo nginx -t
# Look for specific errors

# Check syntax
sudo nginx -t -c /etc/nginx/nginx.conf

# View detailed errors
journalctl -u nginx.service
```

## Quick Fixes
- Restart Nginx: `sudo systemctl restart nginx`
- Clear cache: `sudo rm -rf /var/cache/nginx/*`
- Reset permissions: `sudo chmod -R 755 /var/www`

</div>

</div>

---
layout: default
---

# Security Best Practices

<div class="grid grid-cols-2 gap-4">

<div>

## File Permissions
```bash
# Secure directory permissions
find /home/username -type d -exec chmod 755 {} \;

# Secure file permissions
find /home/username -type f -exec chmod 644 {} \;

# Protect configuration
sudo chmod 600 /etc/nginx/sites-available/username
```

</div>

<div>

## Additional Security
```nginx
# Add to your server block
server {
    # Prevent directory listing
    autoindex off;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";

    # Limit request size
    client_max_body_size 1m;
}
```

</div>

</div>

---
layout: end
---

# Your Site is Live!

<div class="text-center">
Visit http://username.benjys.me to see your website
</div>

<div class="pt-8 text-gray-400">
Remember to replace 'username' with your actual username
</div>
