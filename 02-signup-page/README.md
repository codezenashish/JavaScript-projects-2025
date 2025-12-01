# Sign-In Page

A modern, responsive sign-in page built with HTML and Tailwind CSS.

## Features

- Modern glassmorphism design
- Responsive layout that works on all devices
- Social login buttons (Apple, Google, Twitter)
- Clean form inputs with focus states
- Gradient backgrounds and blur effects
- Interactive JavaScript functionality
- Form validation (coming soon)
- Login authentication system (coming soon)

## Technologies Used

- HTML5
- Tailwind CSS
- Font Awesome icons
- JavaScript (ES6+)

## JavaScript Functionality

The `app.js` file contains the interactive functionality for the sign-in page:

- Form handling and validation
- Interactive button states
- Smooth animations and transitions
- Event listeners for user interactions
- Social login button functionality (integration pending)

### Upcoming Features

- **User Authentication**: Complete login system with backend integration
- **Form Validation**: Real-time validation for email and password fields
- **Social Login Integration**: Working authentication with Apple, Google, and Twitter
- **Password Strength Indicator**: Visual feedback for password security
- **Remember Me Functionality**: Option to save login credentials
- **Error Handling**: User-friendly error messages and feedback

## Project Structure

```
sign-js/
├── app.js              # JavaScript functionality
├── sign.html           # Main HTML file
├── input.css           # Tailwind CSS input file
├── package.json        # Project dependencies
├── src/
│   ├── output.css      # Compiled Tailwind CSS
│   └── img/            # Social media logos
│       ├── Apple.png
│       ├── Google.png
│       └── Twitter.png
└── .gitignore          # Git ignore file
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open `sign.html` in your browser to view the sign-in page

## Development

This project uses Tailwind CSS for styling and vanilla JavaScript for functionality. If you need to make changes:

### CSS Changes:
1. Edit the `input.css` file
2. Rebuild the CSS using Tailwind CLI
3. The compiled CSS will be output to `src/output.css`

### JavaScript Development:
1. Edit the `app.js` file for adding new functionality
2. Test changes by refreshing the browser
3. Follow ES6+ standards for consistency

### Future Development Plans:
- Backend API integration for user authentication
- Database setup for user management
- Enhanced security features
- Mobile app version consideration

## License

This project is open source and available under the [MIT License](LICENSE).
