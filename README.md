# TravelGo ✈️

A luxury travel booking web app — pure HTML, CSS & JavaScript. No build tools, no dependencies. Deploy anywhere in seconds.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, destinations, experiences, stats |
| Property | `pages/property.html` | Villa detail, gallery, booking sidebar |
| Booking | `pages/booking.html` | 4-step checkout with payment form |
| Confirm | `pages/confirm.html` | Booking confirmation screen |
| Dashboard | `dashboard.html` | User dashboard with trips & rewards |

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Visit `https://yourusername.github.io/repo-name`

## Local Preview

Just open `index.html` in your browser — no server needed.

Or use VS Code Live Server extension for hot reload.

## Tech Stack

- HTML5 + CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter + Playfair Display)
- Unsplash images (no API key needed)

## Structure

```
travelgo/
├── index.html          # Home page
├── dashboard.html      # User dashboard
├── css/
│   ├── style.css       # Global styles & shared components
│   ├── home.css        # Home page styles
│   ├── property.css    # Property detail styles
│   ├── booking.css     # Booking/payment styles
│   └── dashboard.css   # Dashboard styles
├── js/
│   ├── main.js         # Shared JS (home)
│   ├── booking.js      # Booking page interactions
│   └── dashboard.js    # Dashboard interactions
└── pages/
    ├── property.html   # Property detail page
    ├── booking.html    # Booking/payment page
    └── confirm.html    # Confirmation page
```
