# Background Image Setup Guide

## Directory Structure

```
new-site/
├── index.html (homepage)
├── contact.html
├── about.html
├── programs.html
├── outcomes.html
├── gallery.html
│
├── dmit.html
├── brain-yoga.html
├── chetna-jagruti.html
├── study-yoga.html
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── bg-1.jpg (Meditation scene 1 - currently in use)
│       ├── bg-2.jpg (Meditation scene 2 - background with mist)
│       └── bg-3.jpg (Meditation scene 3 - mountain landscape)
```

## Image Placement

**Upload your three meditation background images to:**
```
c:\Brain yoga\new-site\assets\images\
```

Name them:
- `bg-1.jpg` - Serene meditation by water (first image - primary)
- `bg-2.jpg` - Misty meditation scene (second image)
- `bg-3.jpg` - Mountain meditation (third image)

## CSS Classes Available

### For Pages in Root (`index.html`, `contact.html`, `about.html`, etc.)
```html
<body class="with-bg-image">
    <div class="page-bg-wrapper bg-meditation-home"></div>
    <div class="page-bg-overlay"></div>
    <!-- page content -->
</body>
```

### For Pages in `/pages/` or Nested Folders
```html
<body class="with-bg-image">
    <div class="page-bg-wrapper bg-meditation-1"></div>
    <div class="page-bg-overlay"></div>
    <!-- page content -->
</body>
```

## Usage Examples

### Using Background 1 (Default Meditation Scene)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brain Yoga</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="with-bg-image">
    <!-- Background wrapper with overlay -->
    <div class="page-bg-wrapper bg-meditation-1"></div>
    <div class="page-bg-overlay"></div>
    
    <!-- Header and content -->
    <header><!-- navigation --></header>
    <section class="hero"><!-- content --></section>
    
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Using Background 2 (Misty Scene)
```html
<body class="with-bg-image">
    <div class="page-bg-wrapper bg-meditation-2"></div>
    <div class="page-bg-overlay"></div>
    <!-- content -->
</body>
```

### Using Background 3 (Mountain Scene)
```html
<body class="with-bg-image">
    <div class="page-bg-wrapper bg-meditation-3"></div>
    <div class="page-bg-overlay"></div>
    <!-- content -->
</body>
```

## Implementation Instructions

### Step 1: Upload Images
Place your three meditation images in `assets/images/` folder:
- `bg-1.jpg`
- `bg-2.jpg`
- `bg-3.jpg`

### Step 2: Add to HTML Pages

Add these lines to the `<body>` tag of any page that needs a background:

```html
<body class="with-bg-image">
    <div class="page-bg-wrapper bg-meditation-1"></div>
    <div class="page-bg-overlay"></div>
    
    <!-- Rest of page content -->
</body>
```

### Step 3: Choose Background Variant

- `bg-meditation-home` - For root level pages (index.html)
- `bg-meditation-1` - For nested pages (brain-yoga.html, etc.)
- `bg-meditation-2` - Alternative background
- `bg-meditation-3` - Another alternative

## CSS Features

✅ **Dark overlay (50% opacity)** - Ensures text readability
✅ **Fixed background** - Stays in place while scrolling (parallax effect)
✅ **Responsive** - Works on all screen sizes
✅ **Semi-transparent sections** - Content areas have white background with slight transparency
✅ **Smooth scrolling** - Background parallax creates visual depth

## Performance Notes

- Background images are set to `background-attachment: fixed` for parallax effect
- Use compressed images (optimize for web)
- Recommended image size: 1920x1080px or larger
- File size: 200-500KB each for optimal loading

## Dark Overlay Strength

Current overlay is `rgba(0, 0, 0, 0.50)` (50% opacity).

To adjust darkness:
- Lighter (30%): `rgba(0, 0, 0, 0.30)`
- Default (50%): `rgba(0, 0, 0, 0.50)` 
- Darker (70%): `rgba(0, 0, 0, 0.70)`

Edit in `styles.css` line ~704:
```css
.page-bg-overlay {
    background: linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50));
}
```

## Example: Full Page Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Study Yoga - Brain Yoga & Chetna Jagruti</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="with-bg-image">
    <!-- Background with meditation image -->
    <div class="page-bg-wrapper bg-meditation-2"></div>
    <div class="page-bg-overlay"></div>
    
    <!-- Header (becomes semi-transparent white) -->
    <header>
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    Brain Yoga
                    <span class="logo-tagline">Every Child is a Born Genius</span>
                </a>
                <nav><!-- nav items --></nav>
            </div>
        </div>
    </header>
    
    <!-- Page content (white sections on background) -->
    <section class="hero">
        <div class="container">
            <h1>Study Yoga</h1>
        </div>
    </section>
    
    <footer><!-- footer --></footer>
    
    <script src="assets/js/main.js"></script>
</body>
</html>
```

## Next Steps

1. ✅ Images folder created at `c:\Brain yoga\new-site\assets\images\`
2. ⏳ Upload your 3 meditation images here
3. ⏳ Update HTML pages to add background wrappers
4. ⏳ Test on different pages
5. ⏳ Adjust overlay opacity if needed

## Support

- Background images are optional - site works fine without them
- All content is readable with or without backgrounds
- Overlay ensures text legibility
- Mobile performance optimized

---

**Status**: CSS ready ✅ | Images folder ready ✅ | Awaiting image upload ⏳
