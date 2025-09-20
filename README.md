# 🏆 Prize Distribution Calculator

**Author:** compound0x  
**Version:** 1.0.0  
**Created:** September 2025

A simple web application that fairly distributes prizes among team members based on their individual scores.

## 🎯 Problem It Solves

When a team wins a prize, it's often divided equally among all members. However, this doesn't account for different contribution levels. This calculator ensures fair distribution by:

- Only including players who meet the minimum score requirement (≥20)
- Distributing prizes proportionally based on individual scores
- Calculating exact transfer amounts between players

## 🚀 Features

- **Eligibility Check**: Only players with scores ≥ 20 receive prizes
- **Proportional Distribution**: Higher scorers receive more, lower scorers less
- **Transfer Calculator**: Shows exactly who pays whom and how much
- **User-Friendly Interface**: Clean, responsive design that works on all devices
- **Real-time Calculation**: Instant results with detailed breakdown

## 📋 How to Use

1. **Enter Player Information**:
   - Fill in names for all 4 players
   - Enter their respective scores
   - Set the prize amount per player

2. **Calculate Distribution**:
   - Click "Calculate Fair Distribution"
   - View the results breakdown

3. **Review Results**:
   - See eligible vs ineligible players
   - Check each player's deserved amount
   - Follow the transfer instructions

## 🧮 Example Calculation

**Input:**
- Player A: 87 points
- Player B: 85 points  
- Player C: 78 points
- Player D: 130 points
- Prize per player: $1.25

**Output:**
- Total prize pool: $5.00
- Total eligible score: 380 points

**Fair Distribution:**
- Player A deserves: $1.14 (87/380 × $5.00)
- Player B deserves: $1.12 (85/380 × $5.00)
- Player C deserves: $1.03 (78/380 × $5.00)
- Player D deserves: $1.71 (130/380 × $5.00)

**Required Transfers:**
- Player A pays $0.11 to Player D
- Player B pays $0.13 to Player D
- Player C pays $0.22 to Player D

## 🌐 Hosting on GitHub Pages

### Option 1: Upload Files Directly

1. Create a new repository on GitHub
2. Upload these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your calculator will be available at: `https://yourusername.github.io/repository-name`

### Option 2: Using Git Commands

```bash
# Create a new repository on GitHub first, then:
git init
git add .
git commit -m "Initial commit: Prize Distribution Calculator"
git branch -M main
git remote add origin https://github.com/yourusername/prize-calculator.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🏗️ Project Structure

```
prize-calculator/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # Calculator logic and UI interactions
└── README.md       # This documentation
```

## 🔧 Technical Details

- **Pure Frontend**: No server required, runs entirely in the browser
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern JavaScript**: ES6+ features for clean, readable code
- **CSS Grid & Flexbox**: Modern layout techniques for optimal display

## 🎨 Customization

You can easily customize the calculator by modifying:

- **Minimum Score**: Change the `minScore` variable in `script.js`
- **Number of Players**: Adjust the HTML structure and loop in JavaScript
- **Styling**: Modify colors, fonts, and layout in `style.css`
- **Currency**: Update display formatting in the JavaScript functions

## 📱 Browser Compatibility

Works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all input fields are filled correctly
3. Verify that scores are numeric values
4. Make sure the prize amount is a positive number

---

**Enjoy fair prize distribution! 🎉**