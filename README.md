# Piper Picasso Gallery

A modern, responsive web gallery showcasing Piper Picasso's artwork collection with auto-flipping gallery display.

## Features

- **Static Gallery**: Pre-loaded collection of Piper Picasso paintings
- **4x2 Grid Display**: Images are displayed in a 4-column by 2-row grid
- **Auto-Flipping**: Gallery automatically advances to the next page every 5 seconds
- **Manual Navigation**: Previous/Next buttons for manual control
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Full-Screen View**: Click on any image to view it in full screen with details
- **Keyboard Navigation**: Use arrow keys to navigate between pages

## Gallery Collection

The gallery features 16 original Piper Picasso paintings including:

- The Blue Period (2020)
- Cubist Dreams (2021)
- Rose Period Reimagined (2021)
- Modern Guernica (2022)
- Abstract Portraits (2022)
- Color Symphony (2023)
- Minimalist Forms (2023)
- Neo-Cubism (2024)
- Emotional Landscapes (2024)
- The Inner World (2024)
- Rhythm and Movement (2024)
- Contemporary Classics (2024)
- The Color Theory (2024)
- Abstract Realism (2024)
- The Modern Muse (2024)
- Digital Age Art (2024)

## How to Use

1. **Open the Website**: Open `index.html` in your web browser
2. **View Gallery**: The gallery displays 8 paintings per page in a 4x2 grid
3. **Navigate**: 
   - Use Previous/Next buttons
   - Use arrow keys (← →)
   - Gallery auto-flips every 5 seconds
4. **Full View**: Click on any painting to view it in full screen with title and description

## File Structure

```
piper-picasso-gallery/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and gallery data
└── README.md          # This file
```

## Technical Details

- **Grid Layout**: CSS Grid with 4 columns, responsive breakpoints
- **Image Sources**: High-quality images from Unsplash
- **Auto-Flip**: JavaScript interval that advances pages every 5 seconds
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Keyboard navigation and screen reader friendly

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

You can customize the website by modifying:

- **Auto-flip timing**: Change the interval in `script.js` (currently 5000ms)
- **Grid size**: Modify `imagesPerPage` in `script.js` (currently 8 for 4x2)
- **Gallery content**: Edit the `piperPicassoPaintings` array in `script.js`
- **Colors and styling**: Edit `styles.css` for visual customization

## Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Enjoy the Piper Picasso gallery!

## License

This project is open source and available under the MIT License. 