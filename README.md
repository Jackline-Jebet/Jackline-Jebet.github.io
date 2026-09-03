# Jackline Jebet — Portfolio

Personal site: research, projects and writing on capital markets, portfolio construction and risk.

**Live:** https://jackline-jebet.github.io

## Stack

Static HTML and CSS. No framework, no build step, no dependencies. Open `index.html` in a browser to work on it locally.

## Structure

```
index.html        Home
about.html        Background and approach
skills.html       Skills and certifications
projects.html     Research and software projects
notes.html        Writing on markets
education.html    Education timeline
experience.html   Experience timeline
contact.html      Contact details
assets/
  style.css       All styling (CSS variables at the top)
  site.js         Mobile nav toggle
  portrait.jpg    Profile photo
```

## Editing

Colours and fonts are CSS variables in the `:root` block at the top of `assets/style.css`. Change them there rather than hunting through the file.

Breakpoints: 1100px, 900px (nav collapses), 640px, 400px.

## Deployment

Pushing to `main` publishes automatically via GitHub Pages. Allow a minute for the build.