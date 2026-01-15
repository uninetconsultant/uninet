# GitHub Pages Deployment Instructions

## 🚀 Quick Setup

### 1. Initialize Git and Push to GitHub

```bash
# Navigate to your project directory
cd "D:\Campaign website\uninet consultant\uninet-connected-pages-main"

# Initialize git (if not already done)
git init

# Add GitHub remote
git remote add origin https://github.com/uninetconsultant/uninet.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit with GitHub Pages deployment setup"

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/uninetconsultant/uninet
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow is already configured and will deploy automatically

### 3. Custom Domain Configuration

Your CNAME file is already set up for `uninetconsultant.com`. In GitHub Pages settings:

1. Under **Custom domain**, enter: `uninetconsultant.com`
2. Enable **Enforce HTTPS**
3. Wait for DNS check to complete

### 4. DNS Configuration

Make sure your domain DNS is configured with:

```
Type: CNAME
Name: www (or @)
Value: uninetconsultant.github.io
```

Or for apex domain:
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

## ⚡ Automatic Deployment

- Every push to `main` branch triggers automatic deployment
- Build takes ~2-3 minutes
- Changes appear at https://uninetconsultant.com

## 🔧 Files Added/Modified

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration  
- `public/.nojekyll` - GitHub Pages optimization
- `vite.config.ts` - Updated for GitHub Pages
- `package.json` - Added missing dependencies

## 📝 Next Steps

1. Push code to GitHub using commands above
2. Wait for first deployment to complete
3. Visit https://uninetconsultant.com to see your live site
4. Any future pushes to main will automatically update the live site

Your website will be live and automatically updating! 🎉