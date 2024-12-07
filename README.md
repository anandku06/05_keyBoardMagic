# Event KeyCodes

A simple and interactive project that displays key press information on the screen in a tabular format using **HTML**, **CSS**, and **JavaScript**. This project leverages **DOM manipulation** and **event listeners** to dynamically update the UI whenever a key is pressed.

## Features

- Captures and displays the following details for each key press:
  - Key Name
  - Key Code
  - Event Type (e.g., `keydown`, `keyup`)
- Dynamically updates the table in real time.
- Clean and responsive design.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the table and the layout.
- **JavaScript**: For implementing the logic using DOM manipulation and event listeners.

## How It Works

1. The project listens for `keydown` and `keyup` events using JavaScript.
2. When a key is pressed, the following information is captured:
   - The key's name (e.g., `A`, `Enter`, `Space`).
   - The key's code (e.g., `65` for `A`, `13` for `Enter`).
   - The event type (`keydown` or `keyup`).
3. This information is displayed in a tabular format on the webpage.
4. New rows are added to the table for every key event.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anandku06/event-keycodes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd event-keycodes
   ```

## Usage

1. Open the `index.html` file in any modern web browser.
2. Press any key on your keyboard, and the details will appear in the table.

## Project Structure

```
event-keycodes/
├── index.html        # HTML file
├── style.css         # CSS file for styling
├── script.js         # JavaScript file for logic
└── README.md         # Project documentation
```

### Initial View:
The page loads with a blank table and a message prompting the user to press any key.

### After Pressing Keys:
| Key Name  | Key Code | Event Type |
|-----------|----------|------------|
| A         | 65       | keydown    |
| A         | 65       | keyup      |
| Enter     | 13       | keydown    |

## Future Enhancements

- Add a "Clear Table" button to reset the data.
- Allow filtering or sorting of table entries.
- Support exporting the table data as a CSV file.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy coding! 🚀
