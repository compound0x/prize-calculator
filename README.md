# 🏆 Prize Distribution Calculator

**Author:** compound0x  
**Version:** 1.0.1  
**Created:** September 2025

A flexible web application that fairly distributes prizes among team members based on their individual scores with customizable player counts and eligibility thresholds.

## 🎯 Problem It Solves

When a team wins a prize, it's often divided equally among all members. However, this doesn't account for different contribution levels. This calculator ensures fair distribution by:

- Supporting flexible team sizes (2-10 players)
- Configurable minimum score requirement for eligibility
- Distributing prizes proportionally based on individual scores
- Calculating exact transfer amounts between players

## 🚀 Features

- **🔧 Configurable Settings**: Customize number of players (2-10) and minimum score threshold
- **📊 Dynamic Player Management**: Automatically generates input fields based on player count
- **✅ Eligibility Check**: Only players meeting the minimum score requirement receive prizes
- **📈 Proportional Distribution**: Higher scorers receive more, lower scorers receive less
- **💰 Transfer Calculator**: Shows exactly who pays whom and how much
- **🎨 User-Friendly Interface**: Clean, responsive design that works on all devices
- **⚡ Real-time Updates**: Player names update automatically throughout results
- **🔄 Instant Calculation**: Immediate results with detailed breakdown

## 📋 How to Use

1. **Configure Settings**:
   - Set the number of players (2-10)
   - Enter the prize amount per player ($)
   - Set the minimum score for eligibility

2. **Enter Player Information**:
   - Player input fields are automatically generated based on your configuration
   - Fill in names for all players (defaults to Player A, Player B, etc.)
   - Enter their respective scores

3. **Calculate Distribution**:
   - Click "Calculate Fair Distribution"
   - View the comprehensive results breakdown

4. **Review Results**:
   - See eligible vs ineligible players based on your minimum score
   - Check each player's deserved amount
   - Follow the transfer instructions to redistribute fairly

5. **Real-time Updates**:
   - Edit player names after calculation to see instant updates throughout all results
   - No need to recalculate when changing names

## 🧮 Example Calculation

**Configuration:**
- Number of players: 4
- Prize per player: $1.00
- Minimum score for eligibility: 20

**Input:**
- Player A: 87 points
- Player B: 85 points  
- Player C: 78 points
- Player D: 130 points

**Output:**
- Total prize pool: $4.00 (4 eligible players × $1.00)
- Total eligible score: 380 points

**Fair Distribution:**
- Player A deserves: $0.91 (87/380 × $4.00)
- Player B deserves: $0.89 (85/380 × $4.00)
- Player C deserves: $0.82 (78/380 × $4.00)
- Player D deserves: $1.37 (130/380 × $4.00)

**Required Transfers:**
- Player A pays $0.09 to Player D
- Player B pays $0.11 to Player D
- Player C pays $0.18 to Player D

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

The calculator is now highly customizable through the user interface:

- **Player Count**: Configure 2-10 players directly in the app
- **Minimum Score Threshold**: Set any minimum score for eligibility
- **Prize Amount**: Flexible decimal amounts supported
- **Styling**: Modify colors, fonts, and layout in `style.css`
- **Currency**: Update display formatting in the JavaScript functions

For advanced customization, you can modify the source code:
- Edit `script.js` for logic changes
- Update `style.css` for visual modifications
- Modify `index.html` for structural changes

## 📱 Browser Compatibility

Works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📝 Release Notes

### Version 1.0.1 (September 2025)
**🎉 Major Enhancement - Configurable Player Count & Eligibility**

**New Features:**
- ✨ **Dynamic Player Count**: Support for 2-10 players (previously fixed at 4)
- ✨ **Configurable Minimum Score**: Set custom eligibility threshold (previously fixed at 20)
- ✨ **Enhanced Configuration UI**: New configuration section with organized settings
- ✨ **Smart Input Generation**: Player fields automatically created/removed based on count
- ✨ **Dynamic Result Titles**: Eligibility sections update to show current minimum score

**Improvements:**
- 🔄 **Better Organization**: Configuration moved to top of interface
- 🎯 **Input Validation**: Enhanced validation for player count and score ranges
- 📱 **Responsive Config Layout**: Configuration section adapts to screen size
- 📖 **Updated Documentation**: Instructions reflect new customizable features

**Technical Changes:**
- Refactored JavaScript to handle dynamic player generation
- Added event listeners for configuration changes
- Updated CSS with new configuration section styles
- Modified result display functions to use configurable parameters

### Version 1.0.0 (September 2025)
**🚀 Initial Release**

**Core Features:**
- Fair prize distribution based on proportional scoring
- Fixed 4-player support with 20-point minimum threshold
- Real-time player name updates in results
- Transfer calculation between players
- Responsive web design
- Developer attribution and documentation

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