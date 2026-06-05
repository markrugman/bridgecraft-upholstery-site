# Bridgecraft Upholstery Static Site

Production static website for Bridgecraft Upholstery.

## Local Preview

```powershell
python -m http.server 8080
```

Open `http://localhost:8080/index.html`.

## Checks

```powershell
npm.cmd test
```

## Deployment

Deploy the repository root as a static site. The contact form is prepared for Netlify Forms via `data-netlify="true"` and posts to `thank-you.html`.

If deploying somewhere other than Netlify, connect `contact.html` to the host's form handling service or replace the form action with the preferred endpoint.
