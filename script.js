/**
 * Prize Distribution Calculator - JavaScript Logic
 * 
 * Handles the calculation and display of fair prize distribution based on player scores.
 * Features:
 * - Proportional distribution based on scores
 * - Minimum score threshold (20 points)
 * - Real-time name updates in results
 * - Transfer calculation between players
 * 
 * @author compound0x
 * @version 1.0.0
 * @created September 2025
 */

function calculateDistribution() {
    // Clear previous results
    clearResults();
    
    // Get input values
    const players = [];
    for (let i = 1; i <= 4; i++) {
        const name = document.getElementById(`player${i}-name`).value.trim();
        const score = parseFloat(document.getElementById(`player${i}-score`).value);
        
        if (!name) {
            showError(`Please enter a name for Player ${i}`);
            return;
        }
        
        if (isNaN(score) || score < 0) {
            showError(`Please enter a valid score for ${name}`);
            return;
        }
        
        players.push({ name, score, originalPrize: 0, deservedPrize: 0 });
    }
    
    const prizePerPlayer = parseFloat(document.getElementById('prize-per-player').value);
    
    if (isNaN(prizePerPlayer) || prizePerPlayer <= 0) {
        showError('Please enter a valid prize amount');
        return;
    }
    
    // Calculate distribution
    const result = calculateFairDistribution(players, prizePerPlayer);
    
    // Display results
    displayResults(result);
}

function calculateFairDistribution(players, prizePerPlayer) {
    const minScore = 20;
    
    // Separate eligible and ineligible players
    const eligiblePlayers = players.filter(player => player.score >= minScore);
    const ineligiblePlayers = players.filter(player => player.score < minScore);
    
    // Calculate total prize pool based on ONLY eligible players
    const totalPrize = eligiblePlayers.length * prizePerPlayer;
    
    // Calculate total score of eligible players
    const totalEligibleScore = eligiblePlayers.reduce((sum, player) => sum + player.score, 0);
    
    // Calculate deserved amounts for eligible players
    eligiblePlayers.forEach(player => {
        player.originalPrize = prizePerPlayer;
        if (totalEligibleScore > 0) {
            player.deservedPrize = (player.score / totalEligibleScore) * totalPrize;
        } else {
            player.deservedPrize = 0;
        }
    });
    
    // Ineligible players get nothing and don't contribute to prize pool
    ineligiblePlayers.forEach(player => {
        player.originalPrize = 0; // They don't pay into the prize pool
        player.deservedPrize = 0;
    });
    
    // Calculate transfers needed
    const transfers = calculateTransfers([...eligiblePlayers, ...ineligiblePlayers]);
    
    return {
        eligiblePlayers,
        ineligiblePlayers,
        transfers,
        totalPrize,
        totalEligibleScore,
        minScore
    };
}

function calculateTransfers(allPlayers) {
    const transfers = [];
    
    // Create arrays of creditors (those who should receive money) and debtors (those who should pay)
    const creditors = [];
    const debtors = [];
    
    allPlayers.forEach(player => {
        const difference = player.deservedPrize - player.originalPrize;
        if (difference > 0) {
            creditors.push({ ...player, amount: difference });
        } else if (difference < 0) {
            debtors.push({ ...player, amount: Math.abs(difference) });
        }
    });
    
    // Sort creditors by amount needed (descending) and debtors by amount to pay (descending)
    creditors.sort((a, b) => b.amount - a.amount);
    debtors.sort((a, b) => b.amount - a.amount);
    
    // Match debtors with creditors
    let creditorIndex = 0;
    let debtorIndex = 0;
    
    while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
        const creditor = creditors[creditorIndex];
        const debtor = debtors[debtorIndex];
        
        const transferAmount = Math.min(creditor.amount, debtor.amount);
        
        if (transferAmount > 0.01) { // Only show transfers of more than 1 cent
            transfers.push({
                from: debtor.name,
                to: creditor.name,
                amount: transferAmount
            });
        }
        
        creditor.amount -= transferAmount;
        debtor.amount -= transferAmount;
        
        if (creditor.amount < 0.01) {
            creditorIndex++;
        }
        if (debtor.amount < 0.01) {
            debtorIndex++;
        }
    }
    
    return transfers;
}

function displayResults(result) {
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'block';
    
    // Store current player names for tracking changes
    for (let i = 1; i <= 4; i++) {
        const nameInput = document.getElementById(`player${i}-name`);
        if (nameInput) {
            nameInput.setAttribute('data-previous-value', nameInput.value.trim() || `Player ${i}`);
        }
    }
    
    // Display summary
    displaySummary(result);
    
    // Display eligible players
    displayEligiblePlayers(result.eligiblePlayers);
    
    // Display ineligible players (if any)
    if (result.ineligiblePlayers.length > 0) {
        displayIneligiblePlayers(result.ineligiblePlayers);
    }
    
    // Display distribution table
    displayDistributionTable([...result.eligiblePlayers, ...result.ineligiblePlayers]);
    
    // Display transfers
    displayTransfers(result.transfers);
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function displaySummary(result) {
    const summaryContent = document.getElementById('summary-content');
    summaryContent.innerHTML = `
        <p><strong>Total Prize Pool:</strong> $${result.totalPrize.toFixed(2)}</p>
        <p><strong>Eligible Players:</strong> ${result.eligiblePlayers.length} (score ≥ ${result.minScore})</p>
        <p><strong>Ineligible Players:</strong> ${result.ineligiblePlayers.length} (score < ${result.minScore})</p>
        <p><strong>Total Eligible Score:</strong> ${result.totalEligibleScore}</p>
    `;
}

function displayEligiblePlayers(players) {
    const content = document.getElementById('eligible-players-content');
    content.innerHTML = players.map(player => `
        <div class="player-card">
            <div class="player-info">
                <span class="player-name">${player.name}</span>
                <span class="player-score">${player.score}</span>
            </div>
            <div class="player-amount">$${player.deservedPrize.toFixed(2)}</div>
        </div>
    `).join('');
}

function displayIneligiblePlayers(players) {
    const section = document.getElementById('ineligible-section');
    const content = document.getElementById('ineligible-players-content');
    
    if (players.length > 0) {
        section.style.display = 'block';
        content.innerHTML = players.map(player => `
            <div class="player-card ineligible">
                <div class="player-info">
                    <span class="player-name">${player.name}</span>
                    <span class="player-score">${player.score}</span>
                </div>
                <div class="player-amount">$0.00</div>
            </div>
        `).join('');
    } else {
        section.style.display = 'none';
    }
}

function displayDistributionTable(players) {
    const content = document.getElementById('distribution-content');
    content.innerHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="background: #f5f5f5;">
                        <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Player</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Score</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Original Prize</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Deserved Prize</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Difference</th>
                    </tr>
                </thead>
                <tbody>
                    ${players.map(player => {
                        const difference = player.deservedPrize - player.originalPrize;
                        const differenceColor = difference > 0 ? '#2e7d32' : difference < 0 ? '#d32f2f' : '#666';
                        const differenceText = difference > 0 ? `+$${difference.toFixed(2)}` : 
                                             difference < 0 ? `-$${Math.abs(difference).toFixed(2)}` : '$0.00';
                        
                        return `
                            <tr>
                                <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">${player.name}</td>
                                <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">${player.score}</td>
                                <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">$${player.originalPrize.toFixed(2)}</td>
                                <td style="padding: 12px; border: 1px solid #ddd; text-align: center; font-weight: 600;">$${player.deservedPrize.toFixed(2)}</td>
                                <td style="padding: 12px; border: 1px solid #ddd; text-align: center; color: ${differenceColor}; font-weight: 600;">${differenceText}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function displayTransfers(transfers) {
    const content = document.getElementById('transfers-content');
    
    if (transfers.length === 0) {
        content.innerHTML = '<div class="success">No transfers needed! All players deserve exactly what they originally received.</div>';
        return;
    }
    
    content.innerHTML = transfers.map(transfer => `
        <div class="transfer-item">
            <strong>${transfer.from}</strong> pays <span class="transfer-amount">$${transfer.amount.toFixed(2)}</span> to <strong>${transfer.to}</strong>
        </div>
    `).join('');
}

function showError(message) {
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = `<div class="error">${message}</div>`;
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function clearResults() {
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'none';
}

// Add auto-update functionality for player names
function updatePlayerNameInResults(playerId, newName) {
    // Update all instances of the player name in the results section
    const playerNameElements = document.querySelectorAll('.player-name');
    const transferItems = document.querySelectorAll('.transfer-item');
    const distributionTable = document.querySelector('#distribution-content table');
    
    // Get the original name from the input's previous value to find and replace
    const nameInput = document.getElementById(`player${playerId}-name`);
    const originalName = nameInput.getAttribute('data-previous-value') || nameInput.defaultValue;
    
    // Update player cards
    playerNameElements.forEach(element => {
        if (element.textContent === originalName) {
            element.textContent = newName;
        }
    });
    
    // Update transfer items
    transferItems.forEach(element => {
        element.innerHTML = element.innerHTML.replace(
            new RegExp(`<strong>${escapeRegExp(originalName)}</strong>`, 'g'),
            `<strong>${newName}</strong>`
        );
    });
    
    // Update distribution table
    if (distributionTable) {
        const rows = distributionTable.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const nameCell = row.querySelector('td:first-child');
            if (nameCell && nameCell.textContent === originalName) {
                nameCell.textContent = newName;
            }
        });
    }
    
    // Store the new name as the previous value for future updates
    nameInput.setAttribute('data-previous-value', newName);
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Add enter key support and name update listeners
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateDistribution();
            }
        });
    });
    
    // Add event listeners for player name inputs
    for (let i = 1; i <= 4; i++) {
        const nameInput = document.getElementById(`player${i}-name`);
        if (nameInput) {
            // Store initial value
            nameInput.setAttribute('data-previous-value', nameInput.value);
            
            // Add input event listener for real-time updates
            nameInput.addEventListener('input', function() {
                const newName = this.value.trim() || `Player ${i}`;
                updatePlayerNameInResults(i, newName);
            });
            
            // Update on blur to handle edge cases
            nameInput.addEventListener('blur', function() {
                const newName = this.value.trim() || `Player ${i}`;
                updatePlayerNameInResults(i, newName);
            });
        }
    }
});