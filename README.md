# Simon Says Game 🎮

A classic memory game built with HTML, CSS, and JavaScript! Test your memory by following the sequence of colored buttons that light up.

## 🎯 How to Play

1. **Start the Game**: Press any key to begin
2. **Watch the Sequence**: The game will flash a colored button
3. **Repeat the Sequence**: Click the buttons in the same order they flashed
4. **Level Up**: Successfully complete each sequence to advance to the next level
5. **Game Over**: Make a mistake and see your final score!

## ✨ Features

- **Progressive Difficulty**: Each level adds one more button to the sequence
- **Visual Feedback**: Buttons flash white when the game shows the sequence
- **User Feedback**: Buttons flash green when you click them
- **Score Tracking**: See what level you reached when the game ends
- **Responsive Design**: Clean and simple interface
- **Game Over Animation**: Screen flashes red when you make a mistake

## 🎨 Game Colors

The game features four colorful buttons:
- 🔴 Red
- 🟡 Yellow  
- 🟣 Purple
- 🟢 Green

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jaypatwa21/simon-says-game.git
   cd simon-says-game
   ```

2. **Open the game**:
   - Simply open `index.html` in your web browser
   - Or use a live server for development

### File Structure
```
simon-says-game/
│
├── index.html          # Main HTML structure
├── style.css           # Game styling and layout
├── script.js           # Game logic and functionality
└── README.md           # This file
```

## 🎮 Game Logic

- The game generates a random sequence of button presses
- Players must repeat the sequence in the correct order
- Each successful completion adds another button to the sequence
- The game tracks your progress and displays your current level
- Making a mistake ends the game and shows your final score

## 🛠️ Technologies Used

- **HTML5**: Game structure and layout
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, DOM manipulation, and event handling

## 🎯 Game Mechanics

### Starting the Game
- Press any key to start
- Game initializes with level 1

### Button Interactions
- **Game Flash**: Buttons flash white to show the sequence
- **User Flash**: Buttons flash green when clicked by the player
- **Error State**: Screen flashes red on wrong input

### Scoring
- Your score is based on the highest level reached
- Try to beat your personal best!

## 🚀 Future Enhancements

Potential features to add:
- [ ] Sound effects for each button
- [ ] High score persistence using localStorage
- [ ] Different difficulty modes (speed variations)
- [ ] Mobile touch optimization
- [ ] Multiplayer mode
- [ ] Different color themes

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Enjoy Playing!

Challenge yourself and see how many levels you can complete. Good luck! 🍀

---
*Made with ❤️ and JavaScript*
