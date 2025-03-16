// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Poker hand rankings data with example hands
const handRankings = [
    {
        name: "High Card",
        description: "When you don't make any poker hand, your highest card plays",
        detailedDescription: "High card occurs when you can't make any poker hand. While common, it's the weakest possible hand. In this example, your Ace-high beats opponent's King-high. When comparing high card hands, you look at the highest card first, then the second highest, and so on until you find a difference. Remember that an Ace is the highest card in poker.",
        strength: "1/2 hands (50% of hands)",
        holeCards: [
            { rank: "A", suit: "hearts" },
            { rank: "7", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "K", suit: "spades" },
            { rank: "J", suit: "diamonds" },
            { rank: "8", suit: "hearts" },
            { rank: "4", suit: "clubs" },
            { rank: "2", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "Q", suit: "spades" },
            { rank: "10", suit: "hearts" }
        ],
        winningCards: [0, 2, 3, 4, 1],
        opponentWinningCards: [0, 1, 2, 3, 4]
    },
    {
        name: "One Pair",
        description: "Two cards of the same rank",
        detailedDescription: "One pair is formed when you have two cards of the same rank. In this example, your pair of 3's beats opponent's Ace-high. While the opponent has a higher card (Ace), a pair always beats any high card hand. When comparing pairs, the higher pair wins. If pairs are equal, compare the highest remaining card (kicker).",
        strength: "1/2.37 hands (42.2% of hands)",
        holeCards: [
            { rank: "K", suit: "hearts" },
            { rank: "3", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "10", suit: "spades" },
            { rank: "Q", suit: "clubs" },
            { rank: "J", suit: "diamonds" },
            { rank: "8", suit: "hearts" },
            { rank: "3", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "A", suit: "hearts" },
            { rank: "4", suit: "diamonds" }
        ],
        winningCards: [0, 1, 3, 4, 6],
        opponentWinningCards: [0, 2, 3, 4, 5]
    },
    {
        name: "Two Pair",
        description: "Two different pairs",
        detailedDescription: "Two pair occurs when you have two different pairs. Here, your Jacks and Eights beat opponent's single pair of Queens. When comparing two pair hands, look at the highest pair first, then the second pair, and finally the remaining card (kicker). Two pair is a strong hand that will win against any single pair or high card.",
        strength: "1/21 hands (4.75% of hands)",
        holeCards: [
            { rank: "J", suit: "hearts" },
            { rank: "8", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "J", suit: "spades" },
            { rank: "7", suit: "clubs" },
            { rank: "10", suit: "diamonds" },
            { rank: "5", suit: "hearts" },
            { rank: "8", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "Q", suit: "spades" },
            { rank: "Q", suit: "hearts" }
        ],
        winningCards: [0, 2, 1, 6, 4],
        opponentWinningCards: [0, 1,2,4,6]
    },
    {
        name: "Three of a Kind",
        description: "Three cards of the same rank",
        detailedDescription: "Three of a kind (trips) consists of three cards of the same rank. Your three Kings beat opponent's two pair Queens and Jacks. This is a powerful hand that beats any two pair, one pair, or high card. When comparing three of a kind hands, the higher ranking three of a kind wins.",
        strength: "1/47 hands (2.11% of hands)",
        holeCards: [
            { rank: "K", suit: "hearts" },
            { rank: "K", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "J", suit: "spades" },
            { rank: "Q", suit: "clubs" },
            { rank: "2", suit: "diamonds" },
            { rank: "K", suit: "spades" },
            { rank: "7", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "Q", suit: "spades" },
            { rank: "J", suit: "hearts" }
        ],
        winningCards: [0, 1, 2, 3, 5],
        opponentWinningCards: [0, 1,2,3,5]
    },
    {
        name: "Straight",
        description: "Five consecutive cards of different suits",
        detailedDescription: "A straight is five consecutive cards of any suit. Your Queen-high straight (Q-J-10-9-8) beats opponent's three of a kind Jacks. Straights are strong hands that beat any three of a kind or lower. When comparing straights, the highest card in the sequence determines the winner. Aces can be used as both high (A-K-Q-J-10) and low (5-4-3-2-A) in straights.",
        strength: "1/254 hands (0.39% of hands)",
        holeCards: [
            { rank: "Q", suit: "hearts" },
            { rank: "10", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "J", suit: "diamonds" },
            { rank: "9", suit: "spades" },
            { rank: "A", suit: "hearts" },
            { rank: "6", suit: "diamonds" },
            { rank: "8", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "J", suit: "spades" },
            { rank: "J", suit: "clubs" }
        ],
        winningCards: [0, 1, 2, 3, 6],
        opponentWinningCards: [0, 1, 2,3,4]
    },
    {
        name: "Flush",
        description: "Any five cards of the same suit",
        detailedDescription: "A flush consists of any five cards of the same suit. Your King-high hearts flush beats opponent's straight. A flush always beats a straight, three of a kind, or any lower hand. When comparing flushes, look at the highest card, then the second highest, and so on.",
        strength: "1/508 hands (0.20% of hands)",
        holeCards: [
            { rank: "K", suit: "hearts" },
            { rank: "4", suit: "hearts" }
        ],
        communityCards: [
            { rank: "10", suit: "hearts" },
            { rank: "6", suit: "spades" },
            { rank: "Q", suit: "hearts" },
            { rank: "6", suit: "hearts" },
            { rank: "7", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "9", suit: "spades" },
            { rank: "8", suit: "diamonds" }
        ],
        winningCards: [2, 0, 5, 1, 4],
        opponentWinningCards: [0, 1, 2, 3, 6]
    },
    {
        name: "Full House",
        description: "Three of a kind plus a pair",
        detailedDescription: "A full house combines three of a kind with a pair. Your 10's full of 2's (three 10s and two 2s) beats opponent's flush. A full house is a very strong hand that beats any flush, straight, or lower hand. When comparing full houses, the rank of the three of a kind matters first, then the rank of the pair. For example, Aces full of 2s beats Kings full of Aces.",
        strength: "1/694 hands (0.14% of hands)",
        holeCards: [
            { rank: "10", suit: "hearts" },
            { rank: "10", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "2", suit: "spades" },
            { rank: "10", suit: "clubs" },
            { rank: "A", suit: "diamonds" },
            { rank: "8", suit: "diamonds" },
            { rank: "2", suit: "diamonds" }
        ],
        opponentCards: [
            { rank: "K", suit: "diamonds" },
            { rank: "7", suit: "diamonds" }
        ],
        winningCards: [2, 3, 6, 0, 1],
        opponentWinningCards: [0, 1,4,5,6]
    },
    {
        name: "Four of a Kind",
        description: "Four cards of the same rank",
        detailedDescription: "Four of a kind (quads) consists of all four cards of the same rank. Your quad Jacks beat opponent's full house. This is an extremely strong hand that only loses to a straight flush or royal flush. When comparing four of a kind hands, the higher rank wins.",
        strength: "1/4,165 hands (0.024% of hands)",
        holeCards: [
            { rank: "J", suit: "hearts" },
            { rank: "J", suit: "diamonds" }
        ],
        communityCards: [
            { rank: "J", suit: "spades" },
            { rank: "J", suit: "clubs" },
            { rank: "K", suit: "diamonds" },
            { rank: "Q", suit: "hearts" },
            { rank: "2", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "K", suit: "spades" },
            { rank: "K", suit: "hearts" }
        ],
        winningCards: [0, 1, 2, 3, 4],
        opponentWinningCards: [0, 1, 2, 3,4]
    },
    {
        name: "Straight Flush",
        description: "Five consecutive cards of the same suit",
        detailedDescription: "A straight flush is five consecutive cards of the same suit. Your King-high club straight flush beats opponent's four of a kind 5s. This is the second-best possible hand in poker, only losing to a royal flush. When comparing straight flushes, the highest card determines the winner, just like with regular straights.",
        strength: "1/72,193 hands (0.0014% of hands)",
        holeCards: [
            { rank: "K", suit: "clubs" },
            { rank: "10", suit: "clubs" }
        ],
        communityCards: [
            { rank: "J", suit: "clubs" },
            { rank: "5", suit: "diamonds" },
            { rank: "9", suit: "clubs" },
            { rank: "5", suit: "spades" },
            { rank: "Q", suit: "clubs" }
        ],
        opponentCards: [
            { rank: "5", suit: "clubs" },
            { rank: "5", suit: "hearts" }
        ],
        winningCards: [0, 1, 2, 6, 4],
        opponentWinningCards: [0, 1,5,3,6]
    },
    {
        name: "Royal Flush",
        description: "A-K-Q-J-10 of the same suit",
        detailedDescription: "The royal flush is the best possible hand in poker, consisting of A-K-Q-J-10 all in the same suit. Your spade royal flush beats any other hand in poker. It's the highest possible straight flush, combining the top five cards (Ace through 10) all in the same suit. This is an extremely rare hand - you'll see it on average only once every 649,740 hands!",
        strength: "1/649,740 hands (0.00015% of hands)",
        holeCards: [
            { rank: "Q", suit: "spades" },
            { rank: "K", suit: "spades" }
        ],
        communityCards: [
            { rank: "7", suit: "spades" },
            { rank: "10", suit: "spades" },
            { rank: "J", suit: "spades" },
            { rank: "8", suit: "hearts" },
            { rank: "A", suit: "spades" }
        ],
        opponentCards: [
            { rank: "9", suit: "spades" },
            { rank: "8", suit: "spades" }
        ],
        winningCards: [4, 3, 0, 1, 6],
        opponentWinningCards: [0, 1,2,3,4]
    }
];

// Function to create a playing card element
function createPlayingCard(card, isWinning = false, isOpponentWinning = false) {
    let winningClass = 'unused-card';
    if (isOpponentWinning) {
        winningClass = 'winning-card opponent-winning';
    } else if (isWinning) {
        winningClass = 'winning-card';
    }
    return `
        <div class="playing-card ${card.suit} ${winningClass}">
            <div class="card-value">${card.rank}</div>
            <div class="card-suit">${getSuitSymbol(card.suit)}</div>
        </div>
    `;
}

// Function to get suit symbol
function getSuitSymbol(suit) {
    const symbols = {
        hearts: '♥',
        diamonds: '♦',
        clubs: '♣',
        spades: '♠'
    };
    return symbols[suit];
}

// Populate hand rankings
const handRankingsGrid = document.querySelector('.hand-rankings-grid');
if (handRankingsGrid) {
    handRankingsGrid.innerHTML = '';
    // Keep hands in original order (High Card first)
    handRankings.forEach((hand, index) => {
        const handCard = document.createElement('div');
        handCard.className = 'hand-card';
        handCard.setAttribute('data-strength', index + 1);
        
        // Create front of card
        const frontContent = `
            <div class="hand-card-front">
                <h3>${hand.name}</h3>
                <p class="hand-description">${hand.description}</p>
                <p class="hand-probability">${hand.strength}</p>
            </div>
        `;

        // Create back of card with example hand
        const backContent = `
            <div class="hand-card-back">
                <h3>${hand.name}</h3>
                <div class="card-example">
                    <div class="players-section">
                        <div class="hole-cards">
                            ${hand.holeCards.map((card, idx) => 
                                createPlayingCard(card, hand.winningCards.includes(idx))
                            ).join('')}
                        </div>
                        <div class="opponent-cards">
                            ${hand.opponentCards.map((card, idx) => 
                                createPlayingCard(card, false, hand.opponentWinningCards.includes(idx))
                            ).join('')}
                        </div>
                    </div>
                    <div class="boards-section">
                        <div class="player-side">
                            <div class="community-cards">
                                ${hand.communityCards.map((card, idx) => 
                                    createPlayingCard(card, hand.winningCards.includes(idx + 2))
                                ).join('')}
                            </div>
                        </div>
                        <div class="opponent-side">
                            <div class="community-cards">
                                ${hand.communityCards.map((card, idx) => 
                                    createPlayingCard(card, false, hand.opponentWinningCards.includes(idx + 2))
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <p class="hand-description">${hand.detailedDescription}</p>
                </div>
            </div>
        `;

        handCard.innerHTML = frontContent + backContent;

        // Add click event for flipping
        handCard.addEventListener('click', () => {
            handCard.classList.toggle('flipped');
        });

        handRankingsGrid.appendChild(handCard);
    });
}

// Table Talk Terms
const tableTerms = {
    "All-in": "Betting all of your remaining chips",
    "Ace High": "A hand with an Ace as the highest card and no pair or better",
    "Action": "A player's turn to act or general betting activity at the table",
    "Ante": "A forced bet that all players must put into the pot before the hand begins",
    "Bad Beat": "Losing a hand where you were statistically favored to win",
    "Big Blind (BB)": "Mandatory bet posted by the player two seats left of the dealer button",
    "Small Blind (SB)": "Mandatory bet posted by the player one seat left of the dealer button",
    "Bluff": "Betting or raising with a weak hand to make opponents fold better hands",
    "Boat": "Another name for a Full House",
    "Button (BTN)": "The dealer position, considered the most advantageous position at the table",
    "Buy-in": "The amount of money needed to join a poker game",
    "Check-Raise": "Checking first then raising after an opponent bets",
    "Cooler": "A situation where a very strong hand loses to an even stronger hand",
    "Cutoff (CO)": "The position one seat to the right of the button",
    "Drawing Dead": "Having no chance to win the hand, even with more cards to come",
    "Fish": "A weak player who consistently loses money",
    "Fold Equity": "The additional value gained from the possibility that opponents will fold",
    "Gutshot": "A straight draw needing one specific card in the middle of the sequence",
    "Hijack (HJ)": "The position two seats to the right of the button",
    "ICM": "Independent Chip Model - a mathematical model for tournament decision making",
    "Implied Odds": "Potential future bets you might win in addition to the current pot",
    "Jam": "To go all-in with your chips",
    "Kicker": "A side card used to break ties between similar hands",
    "Limp": "Just calling the big blind preflop instead of raising",
    "Monster": "An extremely strong hand",
    "Muck": "To fold your hand face down",
    "Nit": "An extremely tight/conservative player",
    "Nuts": "The best possible hand at a given moment",
    "Open-Ended": "A straight draw with eight outs",
    "Orbit": "One complete round of the table",
    "Outs": "Cards that will improve your hand to a likely winner",
    "Overbet": "A bet that is larger than the size of the pot",
    "Pocket Pair": "Starting hand with two cards of the same rank",
    "Pot Committed": "Having invested too much to fold",
    "Pot Odds": "The ratio of the current pot size to the cost of a call",
    "Range": "The complete set of hands a player might have in a situation",
    "Rake": "The fee taken by the casino or poker room from each pot",
    "River Rat": "A player who wins by catching their only out on the river",
    "Runner-Runner": "Needing both turn and river to make a hand",
    "Satellite": "A tournament where the prize is entry to a larger tournament",
    "Set": "Three of a kind using a pocket pair and one board card",
    "Shark": "A skilled, winning player",
    "Short Stack": "Having relatively few chips compared to other players",
    "Stack Off": "Getting all your chips in the middle",
    "Steam": "Playing poorly due to emotional frustration (similar to tilt)",
    "String Bet": "An illegal betting motion made in multiple movements",
    "Tilt": "Playing poorly due to emotional frustration",
    "Time Bank": "Extra time to make a decision in online poker",
    "Under the Gun (UTG)": "First position to act preflop",
    "Value Bet": "Betting for value when you believe you have the best hand",
    "Variance": "The natural upswings and downswings in poker results",
    "Whale": "A wealthy player who loses large amounts of money",
    "3-Bet": "The third bet in a sequence (a reraise)",
    "4-Bet": "The fourth bet in a sequence",
    "5-Bet": "The fifth bet in a sequence, usually all-in",
    "Backdoor": "Drawing to a hand requiring both turn and river cards",
    "Donk Bet": "Leading into the previous betting round's aggressor",
    "GTO": "Game Theory Optimal - playing a mathematically perfect strategy",
    "Hero Call": "Calling with a marginal hand based on a strong read",
    "Image": "How other players perceive your playing style",
    "Leveling": "Thinking about what your opponent thinks you think",
    "Meta Game": "The broader strategy considerations beyond basic poker play",
    "Polarized": "A betting range consisting of very strong hands and bluffs",
    "Squeeze Play": "Reraising after a raise and one or more calls",
    "Triple Barrel": "Betting all three post-flop streets (flop, turn, river)",
    "Wet Board": "A board texture with many drawing possibilities",
    "Dry Board": "A board texture with few drawing possibilities"
};

// Function to populate table talk terms
function populateTableTalk() {
    const tableTalkGrid = document.querySelector('.table-talk-grid');
    if (!tableTalkGrid) return;

    tableTalkGrid.innerHTML = '';
    for (const [term, definition] of Object.entries(tableTerms)) {
        const termCard = document.createElement('div');
        termCard.className = 'hand-card';
        termCard.innerHTML = `
            <h3>${term}</h3>
            <p>${definition}</p>
        `;
        tableTalkGrid.appendChild(termCard);
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTableTalk();
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});