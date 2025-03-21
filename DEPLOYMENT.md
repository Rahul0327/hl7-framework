# Deployment Guide for HL7 Framework Website

This document provides step-by-step instructions for deploying the HL7 Framework Master Data Model website to GitHub and Vercel.

## GitHub Deployment

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., "hl7-framework")
   - Choose public or private visibility
   - Click "Create repository"

2. **Initialize Git and Push to GitHub**
   ```bash
   # Navigate to your project directory
   cd /path/to/hl7-framework
   
   # Initialize Git repository
   git init
   
   # Add all files
   git add .
   
   # Commit changes
   git commit -m "Initial commit"
   
   # Add remote repository
   git remote add origin https://github.com/yourusername/hl7-framework.git
   
   # Push to GitHub
   git push -u origin main
   ```

## Vercel Deployment

1. **Sign Up for Vercel**
   - Go to [Vercel](https://vercel.com) and sign up or log in
   - Connect your GitHub account

2. **Import Your Repository**
   - Click "Add New..." and select "Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Project**
   - Project Name: Choose a name for your deployment
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next

4. **Environment Variables (for Authentication)**
   - Add the following environment variables if you want to change the authentication credentials:
     - `AUTH_USERNAME`: Your desired username
     - `AUTH_PASSWORD`: Your desired password

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Once complete, you'll receive a URL like `your-project.vercel.app`

## Custom Domain (Optional)

1. **Add Custom Domain in Vercel**
   - Go to your project in Vercel
   - Click "Settings" > "Domains"
   - Add your domain
   - Follow Vercel's instructions to configure DNS

## Updating Your Site

1. **Make Changes Locally**
   ```bash
   # Make your changes
   
   # Commit changes
   git add .
   git commit -m "Update description"
   
   # Push to GitHub
   git push
   ```

2. **Automatic Deployment**
   - Vercel will automatically detect changes and redeploy your site

## Troubleshooting

- **Build Errors**: Check the build logs in Vercel
- **Authentication Issues**: Verify middleware.js is correctly configured
- **Styling Problems**: Ensure all CSS files are properly imported
