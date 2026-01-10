# Website Documentation

## Overview

This is a personal academic/research website built with Jekyll 4.4.1 using the al-folio theme. The site showcases research work, blog posts, projects, and creative content (photography, poetry, cooking).

**Live Site:** https://sukuya.github.io/

## Site Structure

### Core Pages (`_pages/`)

- **about.md** - Homepage/About page with bio, news, and selected publications
- **profiles.md** - Reflections landing page (photography, cooking, quotes, poetry)
- **projects.md** - Projects showcase
- **blog.md** - Blog post index
- **publications.md** - Full publications list
- **repositories.md** - GitHub repositories showcase
- **cv.md** - Curriculum Vitae
- **teaching.md** - Teaching experience

### Collections

#### 1. Blog Posts (`_posts/`)
Standard Jekyll blog posts with date-based naming:
- `YYYY-MM-DD-title.md`
- Displayed on `/blog/`

#### 2. Projects (`_projects/`)
Project showcase items numbered by importance:
- `1_project.md`, `2_project.md`, etc.
- Each has: title, description, img, importance, category
- Displayed on `/projects/`

#### 3. Reflections (`_reflections/`)
Creative content organized by category:

**1_gallery.md** - Photography
- Nature and travel photos
- Importance: 1

**2_cooking.md** - Cooking
- Culinary adventures and food photography
- Importance: 4 (displays last)

**3_quotes.md** - Quotes
- Visual quotes and reflections
- Importance: 2

**4_poetry.md** - Poetry
- Original poems (2003-2020)
- Includes table of contents
- Importance: 3

All reflection items use Bootstrap grid layout with zoomable images (Medium Zoom).

#### 4. News (`_news/`)
Brief news announcements sorted by date:
- `announcement_1.md`, `announcement_2.md`, etc.

#### 5. Books (`_books/`)
Book reviews/notes:
- `the_godfather.md`

### Assets Structure

```
assets/
├── img/
│   ├── reflections/
│   │   ├── gallery/     # 10 photos (1.jpg - 10.jpg)
│   │   ├── cooking/     # 10 photos (1.jpg - 10.jpg)
│   │   ├── quotes/      # 19 photos (1.jpg - 19.jpg, profile.jpg)
│   │   └── poetry/      # 3 images (dear-winter.jpg, ektarfa_mohabbat.jpg, need-or-passion.jpg)
│   ├── publication_preview/
│   ├── book_covers/
│   └── prof_pic.jpeg
├── css/
├── js/
└── bibliography/
```

### Configuration Files

- **_config.yml** - Main Jekyll configuration
  - Site metadata
  - Theme settings
  - Collections definition
  - Plugin configuration
  - Social media links

- **Gemfile** - Ruby dependencies
- **Gemfile.lock** - Locked dependency versions (includes x86_64-linux platform)

### GitHub Actions Workflow

**`.github/workflows/deploy.yml`** - Automated deployment
- Triggers on push to `main` branch
- Builds Jekyll site with Ruby 3.3.5
- Installs ImageMagick for image processing
- Runs PurgeCSS to optimize CSS
- Deploys to `gh-pages` branch

## Key Features

### 1. Responsive Images
- ImageMagick generates 480px, 800px, 1400px WebP versions
- Automatic srcset generation
- Lazy loading support

### 2. Zoomable Images
- Medium Zoom integration (`enable_medium_zoom: true`)
- Click to zoom gallery images to full resolution

### 3. Collections
Defined in `_config.yml`:
- `projects` - Project showcase
- `reflections` - Creative content (replaces old photoblog)

### 4. Navigation Structure

```
Navbar:
├── about (/)
├── blog (/blog/)
├── projects (/projects/)
└── reflections (/reflections/)
    ├── Photography
    ├── Quotes
    ├── Poetry
    └── Cooking
```

## Development Workflow

### Local Development

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Run local server:**
   ```bash
   export PATH=.venv/bin:$PATH
   bundle exec jekyll serve --port 4000
   ```

3. **View site:**
   - Local: http://localhost:4000
   - Auto-regenerates on file changes

### Deployment Workflow

1. **Make changes** - Edit content files
2. **Commit changes** - `git add . && git commit -m "message"`
3. **Push to main** - `git push origin main`
4. **Automatic deployment** - GitHub Actions builds and deploys
5. **Wait for CDN** - GitHub Pages CDN updates (5-15 minutes)

### Branch Structure

- **main** - Source code (work here)
- **gh-pages** - Built site (auto-generated, don't touch)

## Content Guidelines

### Adding a Blog Post

Create `_posts/YYYY-MM-DD-title.md`:
```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS
description: Brief description
tags: tag1 tag2
categories: category
---

Your content here...
```

### Adding a Project

Create `_projects/N_project.md`:
```yaml
---
layout: page
title: Project Title
description: Project description
img: assets/img/project-image.jpg
importance: N
category: work
---

Project details...
```

### Adding Reflections Content

#### Photography
Add images to `assets/img/reflections/gallery/`
Update `_reflections/1_gallery.md` with new images.

#### Poetry
Add to `_reflections/4_poetry.md`:
- Update table of contents
- Add poem with `<br>` tags for line breaks
- Separate poems with `<hr>` tags

## Theme Customization

### Color Scheme
Edit `_sass/_themes.scss` for custom colors.

### Layout
- `_layouts/` - Page templates
- `_includes/` - Reusable components
  - `reflections.liquid` - Reflection card template

### Typography
Configure in `_config.yml` under `typography` section.

## Important Notes

1. **Image Formats**
   - Original: JPG/PNG
   - Auto-generated: WebP (480px, 800px, 1400px)

2. **Poetry Formatting**
   - Use `<br>` tags for line breaks
   - Use styled `<hr>` for separators

3. **Collections Order**
   - Controlled by `importance` field
   - Lower number = higher priority

4. **Platform Compatibility**
   - Gemfile.lock includes both darwin (Mac) and linux platforms
   - Required for GitHub Actions (Linux) to work

## Maintenance

### Update Dependencies
```bash
bundle update
```

### Rebuild with Clean Cache
```bash
rm -rf _site .jekyll-cache
bundle exec jekyll build
```

### Check for Broken Links
GitHub Actions includes broken link checking workflow.

## Troubleshooting

### Site Not Updating
1. Check GitHub Actions tab for build status
2. Hard refresh browser (Cmd+Shift+R / Ctrl+F5)
3. Wait 5-15 minutes for CDN propagation
4. Try incognito mode

### Build Failures
- Check `.github/workflows/deploy.yml` logs
- Verify Gemfile.lock includes x86_64-linux platform
- Ensure all image paths are correct

### Local Build Issues
- Verify Ruby version (3.3.5)
- Run `bundle install`
- Check for missing dependencies

## Credits

- **Theme:** [al-folio](https://github.com/alshedivat/al-folio)
- **Generator:** Jekyll 4.4.1
- **Hosting:** GitHub Pages
- **Author:** Sunil Kumar Yadav
