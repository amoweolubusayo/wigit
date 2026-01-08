/* ==========================================
   WIG VIBE QUIZ - ENHANCED INTERACTIVE VERSION
   ========================================== */

// ==========================================
// WIG STYLE DEFINITIONS WITH SVG ILLUSTRATIONS
// ==========================================
const wigStyles = {
    laceFront: {
        name: "Lace Front Sleek Queen",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="laceFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a1a2e"/>
                    <stop offset="50%" style="stop-color:#16213e"/>
                    <stop offset="100%" style="stop-color:#0f0f23"/>
                </linearGradient>
            </defs>
            <ellipse cx="60" cy="25" rx="35" ry="15" fill="url(#laceFrontGrad)"/>
            <path d="M25 25 Q20 50 22 80 Q25 100 35 110 L45 110 Q40 95 42 70 L42 40 Q45 30 60 28 Q75 30 78 40 L78 70 Q80 95 75 110 L85 110 Q95 100 98 80 Q100 50 95 25 Q85 15 60 12 Q35 15 25 25" fill="url(#laceFrontGrad)"/>
            <path d="M42 40 L42 100" stroke="#2a2a4a" stroke-width="1" opacity="0.3"/>
            <path d="M78 40 L78 100" stroke="#2a2a4a" stroke-width="1" opacity="0.3"/>
            <path d="M55 30 L55 105" stroke="#2a2a4a" stroke-width="0.5" opacity="0.2"/>
            <path d="M65 30 L65 105" stroke="#2a2a4a" stroke-width="0.5" opacity="0.2"/>
        </svg>`,
        prices: ["₦25,000", "₦45,000"],
        tips: [
            "Use a lace-friendly adhesive for secure hold",
            "Wash every 7-10 days with mild shampoo",
            "Store on a mannequin head to maintain shape"
        ],
        affirmations: [
            "Sleek, sophisticated, unstoppable — that's your energy!",
            "When your edges are laid, the world takes notice!",
            "Boss vibes only. You're walking confidence today!"
        ]
    },
    boneStraight: {
        name: "Bone Straight Diva",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0a0a0a"/>
                    <stop offset="100%" style="stop-color:#1a1a1a"/>
                </linearGradient>
            </defs>
            <path d="M60 10 Q30 15 25 30 L20 115 L40 115 L42 35 Q50 25 60 23 Q70 25 78 35 L80 115 L100 115 L95 30 Q90 15 60 10" fill="url(#boneGrad)"/>
            <line x1="30" y1="40" x2="28" y2="110" stroke="#333" stroke-width="1"/>
            <line x1="50" y1="30" x2="48" y2="112" stroke="#333" stroke-width="0.5"/>
            <line x1="60" y1="25" x2="60" y2="115" stroke="#333" stroke-width="0.5"/>
            <line x1="70" y1="30" x2="72" y2="112" stroke="#333" stroke-width="0.5"/>
            <line x1="90" y1="40" x2="92" y2="110" stroke="#333" stroke-width="1"/>
        </svg>`,
        prices: ["₦20,000", "₦40,000"],
        tips: [
            "Use heat protectant spray before styling",
            "Avoid excessive heat to prevent damage",
            "Wrap at night with silk scarf to prevent tangling"
        ],
        affirmations: [
            "Straight to the point, straight to success!",
            "Smooth hair, smooth moves — you're gliding through life!",
            "That bone straight life? It's giving elegance!"
        ]
    },
    curlyBob: {
        name: "Curly Bob Baddie",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="curlyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#4a3728"/>
                    <stop offset="100%" style="stop-color:#2d1f15"/>
                </linearGradient>
            </defs>
            <ellipse cx="60" cy="20" rx="38" ry="12" fill="url(#curlyGrad)"/>
            <path d="M22 20 Q15 40 18 65 Q22 85 35 95 L85 95 Q98 85 102 65 Q105 40 98 20 Q88 12 60 10 Q32 12 22 20" fill="url(#curlyGrad)"/>
            <circle cx="32" cy="40" r="10" fill="#5d4037" opacity="0.7"/>
            <circle cx="50" cy="32" r="9" fill="#5d4037" opacity="0.7"/>
            <circle cx="70" cy="32" r="9" fill="#5d4037" opacity="0.7"/>
            <circle cx="88" cy="40" r="10" fill="#5d4037" opacity="0.7"/>
            <circle cx="28" cy="58" r="11" fill="#5d4037" opacity="0.6"/>
            <circle cx="45" cy="52" r="10" fill="#5d4037" opacity="0.6"/>
            <circle cx="60" cy="48" r="9" fill="#5d4037" opacity="0.6"/>
            <circle cx="75" cy="52" r="10" fill="#5d4037" opacity="0.6"/>
            <circle cx="92" cy="58" r="11" fill="#5d4037" opacity="0.6"/>
            <circle cx="35" cy="75" r="12" fill="#5d4037" opacity="0.5"/>
            <circle cx="55" cy="70" r="11" fill="#5d4037" opacity="0.5"/>
            <circle cx="75" cy="72" r="11" fill="#5d4037" opacity="0.5"/>
            <circle cx="90" cy="78" r="10" fill="#5d4037" opacity="0.5"/>
        </svg>`,
        prices: ["₦15,000", "₦30,000"],
        tips: [
            "Use curl-defining cream to enhance bounce",
            "Detangle gently with wide-tooth comb",
            "Refresh curls with water spray between washes"
        ],
        affirmations: [
            "Big curls, big energy — own your look today!",
            "Bouncy curls match your vibrant personality!",
            "Curly and confident? That's the winning combo!"
        ]
    },
    bodyWave: {
        name: "Body Wave Goddess",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2c1810"/>
                    <stop offset="100%" style="stop-color:#1a0f0a"/>
                </linearGradient>
            </defs>
            <path d="M60 8 Q28 12 22 28 Q18 45 20 70 Q22 95 30 115 L45 115 Q40 90 42 65 Q45 45 50 35 Q55 28 60 26 Q65 28 70 35 Q75 45 78 65 Q80 90 75 115 L90 115 Q98 95 100 70 Q102 45 98 28 Q92 12 60 8" fill="url(#waveGrad)"/>
            <path d="M28 50 Q35 45 42 55 Q50 65 55 58" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.4"/>
            <path d="M65 58 Q70 65 78 55 Q85 45 92 50" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.4"/>
            <path d="M25 75 Q35 68 45 78 Q55 88 60 80" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.4"/>
            <path d="M60 80 Q65 88 75 78 Q85 68 95 75" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.4"/>
            <path d="M30 100 Q40 92 50 102 Q55 108 60 105" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.3"/>
            <path d="M60 105 Q65 108 70 102 Q80 92 90 100" stroke="#3d2817" stroke-width="2" fill="none" opacity="0.3"/>
        </svg>`,
        prices: ["₦18,000", "₦35,000"],
        tips: [
            "Use moisturizing shampoo to maintain waves",
            "Air dry or use diffuser for best results",
            "Apply anti-frizz serum for smooth waves"
        ],
        affirmations: [
            "Waves like the ocean — deep, powerful, beautiful!",
            "Your waves are giving main character energy!",
            "Flowing through life with grace and style!"
        ]
    },
    braided: {
        name: "Braided Beauty",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="braidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a1a1a"/>
                    <stop offset="100%" style="stop-color:#0d0d0d"/>
                </linearGradient>
            </defs>
            <ellipse cx="60" cy="18" rx="32" ry="10" fill="url(#braidGrad)"/>
            <path d="M28 18 L22 115" stroke="url(#braidGrad)" stroke-width="12" stroke-linecap="round"/>
            <path d="M42 20 L38 115" stroke="url(#braidGrad)" stroke-width="10" stroke-linecap="round"/>
            <path d="M60 15 L60 115" stroke="url(#braidGrad)" stroke-width="8" stroke-linecap="round"/>
            <path d="M78 20 L82 115" stroke="url(#braidGrad)" stroke-width="10" stroke-linecap="round"/>
            <path d="M92 18 L98 115" stroke="url(#braidGrad)" stroke-width="12" stroke-linecap="round"/>
            <path d="M22 30 L28 35 L22 40 L28 45 L22 50 L28 55 L22 60 L28 65 L22 70 L28 75 L22 80 L28 85 L22 90 L28 95 L22 100 L28 105" stroke="#333" stroke-width="1" fill="none"/>
            <path d="M92 30 L98 35 L92 40 L98 45 L92 50 L98 55 L92 60 L98 65 L92 70 L98 75 L92 80 L98 85 L92 90 L98 95 L92 100 L98 105" stroke="#333" stroke-width="1" fill="none"/>
            <path d="M56 25 L64 30 L56 35 L64 40 L56 45 L64 50 L56 55 L64 60 L56 65 L64 70 L56 75 L64 80 L56 85 L64 90 L56 95 L64 100" stroke="#333" stroke-width="0.8" fill="none"/>
        </svg>`,
        prices: ["₦8,000", "₦20,000"],
        tips: [
            "Moisturize scalp regularly to prevent dryness",
            "Wrap with satin scarf at night",
            "Avoid styles that are too tight on edges"
        ],
        affirmations: [
            "Braids on point, confidence on fleek!",
            "Protective and stylish — you're playing 4D chess!",
            "That braided look? It's cultural excellence!"
        ]
    },
    colored: {
        name: "Color Pop Queen",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="colorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ec4899"/>
                    <stop offset="33%" style="stop-color:#8b5cf6"/>
                    <stop offset="66%" style="stop-color:#06b6d4"/>
                    <stop offset="100%" style="stop-color:#10b981"/>
                </linearGradient>
                <linearGradient id="colorGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#f59e0b"/>
                    <stop offset="50%" style="stop-color:#ef4444"/>
                    <stop offset="100%" style="stop-color:#ec4899"/>
                </linearGradient>
            </defs>
            <path d="M60 8 Q25 15 20 35 Q15 60 22 90 Q28 110 40 115 L80 115 Q92 110 98 90 Q105 60 100 35 Q95 15 60 8" fill="url(#colorGrad)"/>
            <path d="M35 25 Q30 45 32 70 Q35 90 42 105" stroke="url(#colorGrad2)" stroke-width="8" fill="none" opacity="0.7"/>
            <path d="M60 20 Q58 50 60 80 Q62 100 60 112" stroke="#fff" stroke-width="3" fill="none" opacity="0.3"/>
            <path d="M85 25 Q90 45 88 70 Q85 90 78 105" stroke="url(#colorGrad2)" stroke-width="8" fill="none" opacity="0.7"/>
            <circle cx="40" cy="45" r="5" fill="#fff" opacity="0.4"/>
            <circle cx="75" cy="55" r="4" fill="#fff" opacity="0.3"/>
            <circle cx="55" cy="75" r="6" fill="#fff" opacity="0.3"/>
        </svg>`,
        prices: ["₦22,000", "₦50,000"],
        tips: [
            "Use color-safe shampoo to preserve vibrancy",
            "Limit heat styling to prevent color fade",
            "Deep condition weekly for color-treated hair"
        ],
        affirmations: [
            "Life's too short for boring hair — slay with color!",
            "Bold colors for bold personalities!",
            "You're not just wearing color, you ARE the moment!"
        ]
    },
    halfWig: {
        name: "Half Wig Natural",
        svg: `<svg viewBox="0 0 120 120">
            <defs>
                <linearGradient id="halfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3d2914"/>
                    <stop offset="100%" style="stop-color:#1f1509"/>
                </linearGradient>
            </defs>
            <path d="M30 35 Q60 30 90 35" stroke="#1a1a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
            <path d="M25 38 Q20 55 22 80 Q25 100 35 115 L85 115 Q95 100 98 80 Q100 55 95 38 Q85 35 60 33 Q35 35 25 38" fill="url(#halfGrad)"/>
            <circle cx="35" cy="55" r="8" fill="#4d3319" opacity="0.5"/>
            <circle cx="55" cy="50" r="7" fill="#4d3319" opacity="0.5"/>
            <circle cx="75" cy="52" r="8" fill="#4d3319" opacity="0.5"/>
            <circle cx="30" cy="75" r="10" fill="#4d3319" opacity="0.4"/>
            <circle cx="50" cy="70" r="9" fill="#4d3319" opacity="0.4"/>
            <circle cx="70" cy="72" r="9" fill="#4d3319" opacity="0.4"/>
            <circle cx="90" cy="78" r="8" fill="#4d3319" opacity="0.4"/>
            <circle cx="40" cy="95" r="11" fill="#4d3319" opacity="0.3"/>
            <circle cx="65" cy="92" r="10" fill="#4d3319" opacity="0.3"/>
            <circle cx="85" cy="98" r="9" fill="#4d3319" opacity="0.3"/>
        </svg>`,
        prices: ["₦8,000", "₦18,000"],
        tips: [
            "Blend with your natural hair at the front",
            "Secure with clips for all-day hold",
            "Match texture to your natural hair for seamless look"
        ],
        affirmations: [
            "Natural vibes, effortless beauty!",
            "Blending the best of both worlds!",
            "Easy, breezy, beautiful — that's you!"
        ]
    }
};

// ==========================================
// QUIZ QUESTIONS
// ==========================================
const questions = [
    {
        id: 'vibe',
        emoji: '✨',
        question: 'Pick your vibe today',
        subtext: 'Tap the wig that speaks to your soul!',
        type: 'image-select',
        layout: 'two-column',
        options: [
            {
                id: 'sleek',
                text: 'Sleek & Polished',
                description: 'Clean lines, boss moves',
                wigType: 'laceFront',
                scores: { laceFront: 3, boneStraight: 3, bodyWave: 1 }
            },
            {
                id: 'bold',
                text: 'Fun & Bold',
                description: 'Bouncy and full of life',
                wigType: 'curlyBob',
                scores: { curlyBob: 3, bodyWave: 2, colored: 2 }
            },
            {
                id: 'textured',
                text: 'Textured & Natural',
                description: 'Protective and cultural',
                wigType: 'braided',
                scores: { braided: 3, halfWig: 2 }
            },
            {
                id: 'colorful',
                text: 'Playful & Colorful',
                description: 'Stand out from the crowd',
                wigType: 'colored',
                scores: { colored: 3, curlyBob: 1, bodyWave: 1 }
            }
        ]
    },
    {
        id: 'occasion',
        emoji: '🎯',
        question: 'What\'s the occasion?',
        subtext: 'Where are you taking this look?',
        type: 'emoji-select',
        layout: 'two-column',
        options: [
            {
                id: 'everyday',
                text: 'Everyday Hustle',
                description: 'Work, errands, daily life',
                emoji: '💼',
                scores: { boneStraight: 2, halfWig: 3, braided: 2, laceFront: 1 }
            },
            {
                id: 'datenight',
                text: 'Date Night',
                description: 'Time to turn heads!',
                emoji: '🌙',
                scores: { bodyWave: 3, curlyBob: 2, colored: 2, laceFront: 2 }
            },
            {
                id: 'formal',
                text: 'Church / Formal',
                description: 'Elegant and appropriate',
                emoji: '⛪',
                scores: { laceFront: 3, boneStraight: 3, bodyWave: 1 }
            },
            {
                id: 'content',
                text: 'Photoshoot',
                description: 'Camera-ready glam',
                emoji: '📸',
                scores: { colored: 3, curlyBob: 2, bodyWave: 2, laceFront: 2 }
            }
        ]
    },
    {
        id: 'maintenance',
        emoji: '🛠️',
        question: 'How much styling effort?',
        subtext: 'Be honest with yourself, queen!',
        type: 'slider',
        options: [
            { value: 1, label: 'Low', emoji: '😌', scores: { braided: 3, halfWig: 3, boneStraight: 1 } },
            { value: 2, label: 'Medium', emoji: '💅', scores: { bodyWave: 2, curlyBob: 2, halfWig: 1, boneStraight: 2 } },
            { value: 3, label: 'High', emoji: '👑', scores: { laceFront: 3, colored: 2, curlyBob: 1 } }
        ]
    },
    {
        id: 'confidence',
        emoji: '💪',
        question: 'What\'s your energy today?',
        subtext: 'How are you feeling right now?',
        type: 'emoji-select',
        layout: 'two-column',
        options: [
            {
                id: 'chill',
                text: 'Chill',
                emoji: '😎',
                description: 'Relaxed and easy-going',
                scores: { halfWig: 3, bodyWave: 2, braided: 2 }
            },
            {
                id: 'bold',
                text: 'Bold',
                emoji: '🔥',
                description: 'Ready to make moves',
                scores: { colored: 3, curlyBob: 2, laceFront: 2 }
            },
            {
                id: 'soft',
                text: 'Soft',
                emoji: '🌸',
                description: 'Gentle and approachable',
                scores: { bodyWave: 3, halfWig: 2, boneStraight: 1 }
            },
            {
                id: 'boss',
                text: 'Boss Mode',
                emoji: '👑',
                description: 'Taking charge today',
                scores: { laceFront: 3, boneStraight: 3, colored: 1 }
            }
        ]
    },
    {
        id: 'expression',
        emoji: '💇🏾‍♀️',
        question: 'Your favorite hair vibe?',
        subtext: 'What makes you feel most YOU?',
        type: 'image-select',
        layout: 'two-column',
        options: [
            {
                id: 'straight',
                text: 'Straight & Sleek',
                description: 'Polished perfection',
                wigType: 'boneStraight',
                scores: { boneStraight: 3, laceFront: 2 }
            },
            {
                id: 'curls',
                text: 'Big Curls & Waves',
                description: 'Volume and movement',
                wigType: 'bodyWave',
                scores: { bodyWave: 3, curlyBob: 3 }
            },
            {
                id: 'braids',
                text: 'Braided & Textured',
                description: 'Cultural and protective',
                wigType: 'braided',
                scores: { braided: 3, halfWig: 1 }
            },
            {
                id: 'colors',
                text: 'Colors & Highlights',
                description: 'Express yourself boldly',
                wigType: 'colored',
                scores: { colored: 3, curlyBob: 1 }
            }
        ]
    },
    {
        id: 'budget',
        emoji: '💰',
        question: 'What\'s your budget?',
        subtext: 'We\'ll find perfect options for you!',
        type: 'budget-select',
        layout: 'single-column',
        options: [
            {
                id: 'low',
                text: '₦5,000 – ₦15,000',
                description: 'Budget-friendly beauties',
                emoji: '💵',
                budgetLevel: 'low',
                scores: { halfWig: 2, braided: 2 }
            },
            {
                id: 'medium',
                text: '₦15,000 – ₦40,000',
                description: 'Quality meets value',
                emoji: '💳',
                budgetLevel: 'medium',
                scores: { bodyWave: 1, curlyBob: 1, boneStraight: 1 }
            },
            {
                id: 'high',
                text: '₦40,000+',
                description: 'Premium luxury wigs',
                emoji: '💎',
                budgetLevel: 'high',
                scores: { laceFront: 2, colored: 2 }
            }
        ]
    }
];

// ==========================================
// GAME STATE
// ==========================================
let currentQuestion = 0;
let answers = [];
let scores = {
    laceFront: 0,
    boneStraight: 0,
    curlyBob: 0,
    bodyWave: 0,
    braided: 0,
    colored: 0,
    halfWig: 0
};
let selectedBudget = 'medium';
let streak = 0;
let totalPoints = 0;

// ==========================================
// HAPTIC FEEDBACK (Visual)
// ==========================================
function triggerHaptic(type = 'light') {
    if ('vibrate' in navigator) {
        const patterns = {
            light: [10],
            medium: [20],
            heavy: [30, 10, 30],
            success: [10, 50, 10, 50, 10]
        };
        navigator.vibrate(patterns[type] || patterns.light);
    }
}

// ==========================================
// RIPPLE EFFECT
// ==========================================
function createRipple(event, element) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ==========================================
// PARTICLE BURST EFFECT
// ==========================================
function createParticleBurst(x, y, count = 12) {
    const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#fbbf24', '#10b981', '#f472b6'];
    const container = document.querySelector('.app-container');

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
        `;

        const angle = (i / count) * Math.PI * 2;
        const velocity = 80 + Math.random() * 60;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        container.appendChild(particle);

        let posX = 0, posY = 0, opacity = 1, scale = 1;
        const animate = () => {
            posX += vx * 0.02;
            posY += vy * 0.02 + 2; // gravity
            opacity -= 0.025;
            scale -= 0.015;

            particle.style.transform = `translate(${posX}px, ${posY}px) scale(${Math.max(0, scale)})`;
            particle.style.opacity = Math.max(0, opacity);

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        requestAnimationFrame(animate);
    }
}

// ==========================================
// SCREEN NAVIGATION
// ==========================================
function showScreen(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    const newScreen = document.getElementById(screenId);

    if (currentScreen) {
        currentScreen.classList.add('exit');
        setTimeout(() => {
            currentScreen.classList.remove('active', 'exit');
            newScreen.classList.add('active');
        }, 300);
    } else {
        newScreen.classList.add('active');
    }
}

// ==========================================
// START QUIZ
// ==========================================
function startQuiz() {
    triggerHaptic('medium');

    // Create burst effect from button
    const button = document.querySelector('.cta-button');
    const rect = button.getBoundingClientRect();
    createParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);

    // Reset state
    currentQuestion = 0;
    answers = [];
    scores = {
        laceFront: 0,
        boneStraight: 0,
        curlyBob: 0,
        bodyWave: 0,
        braided: 0,
        colored: 0,
        halfWig: 0
    };
    selectedBudget = 'medium';
    streak = 0;
    totalPoints = 0;

    setTimeout(() => {
        showScreen('quiz-screen');
        renderQuestion();
    }, 200);
}

// ==========================================
// RENDER QUESTION
// ==========================================
function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    // Update progress with animation
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1} of ${questions.length}`;

    let html = '';

    // Streak display
    html += `<div class="streak-container">`;
    html += `<div class="streak-badge ${streak < 2 ? 'hidden' : ''}">`;
    html += `<span class="streak-fire">🔥</span>`;
    html += `<span>${streak} streak!</span>`;
    html += `</div></div>`;

    html += `<div class="question-wrapper">`;
    html += `<span class="question-emoji">${question.emoji}</span>`;
    html += `<h2 class="question-text">${question.question}</h2>`;
    html += `<p class="question-subtext">${question.subtext}</p>`;

    if (question.type === 'slider') {
        html += renderSliderQuestion(question);
    } else {
        html += renderOptionsQuestion(question);
    }

    html += `</div>`;
    container.innerHTML = html;

    // Add event listeners
    if (question.type === 'slider') {
        setupSliderListeners();
    } else {
        setupOptionListeners();
    }
}

// ==========================================
// RENDER OPTIONS QUESTION
// ==========================================
function renderOptionsQuestion(question) {
    const layoutClass = question.layout === 'two-column' ? 'two-column' : 'single-column';
    let html = `<div class="options-grid ${layoutClass}">`;

    question.options.forEach((option, index) => {
        html += `<div class="option-card" data-index="${index}" data-id="${option.id}">`;

        if (option.wigType && wigStyles[option.wigType]) {
            html += `<div class="option-wig-image">${wigStyles[option.wigType].svg}</div>`;
        } else if (option.emoji) {
            html += `<span class="option-emoji">${option.emoji}</span>`;
        }

        html += `<span class="option-text">${option.text}</span>`;
        if (option.description) {
            html += `<span class="option-description">${option.description}</span>`;
        }
        html += `</div>`;
    });

    html += `</div>`;
    return html;
}

// ==========================================
// RENDER SLIDER QUESTION
// ==========================================
function renderSliderQuestion(question) {
    let html = `<div class="slider-container">`;
    html += `<div class="slider-track">`;
    html += `<input type="range" class="slider-input" id="maintenance-slider" min="1" max="3" value="2" step="1">`;
    html += `</div>`;
    html += `<div class="slider-labels">`;

    question.options.forEach((option, index) => {
        html += `<div class="slider-label" data-value="${option.value}">`;
        html += `<span class="slider-label-emoji">${option.emoji}</span>`;
        html += `<span>${option.label}</span>`;
        html += `</div>`;
    });

    html += `</div>`;
    html += `<div class="slider-value" id="slider-value">Medium — balanced effort! 💅</div>`;
    html += `<button class="next-button" onclick="submitSliderAnswer()">Continue →</button>`;
    html += `</div>`;

    return html;
}

// ==========================================
// SETUP LISTENERS
// ==========================================
function setupOptionListeners() {
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function(e) {
            triggerHaptic('light');
            createRipple(e, this);

            const index = parseInt(this.dataset.index);
            selectOption(index, e);
        });

        // Touch feedback
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

function setupSliderListeners() {
    const slider = document.getElementById('maintenance-slider');
    const valueDisplay = document.getElementById('slider-value');
    const labels = document.querySelectorAll('.slider-label');

    const messages = {
        1: "Low — keep it easy! 😌",
        2: "Medium — balanced effort! 💅",
        3: "High — go all out! 👑"
    };

    function updateSlider(value) {
        valueDisplay.textContent = messages[value];
        labels.forEach(label => {
            label.classList.toggle('active', label.dataset.value === value);
        });
    }

    slider.addEventListener('input', function() {
        triggerHaptic('light');
        updateSlider(this.value);
    });

    // Initialize
    updateSlider('2');
}

// ==========================================
// HANDLE ANSWERS
// ==========================================
function selectOption(index, event) {
    const question = questions[currentQuestion];
    const option = question.options[index];
    const card = document.querySelector(`[data-index="${index}"]`);

    // Create particle burst at click location
    createParticleBurst(event.clientX, event.clientY, 15);

    // Visual feedback
    document.querySelectorAll('.option-card').forEach(c => {
        c.classList.remove('selected');
        c.style.pointerEvents = 'none';
    });
    card.classList.add('selected');

    // Update streak
    streak++;
    totalPoints += 10 * streak;

    // Store answer
    answers.push({
        questionId: question.id,
        optionId: option.id,
        scores: option.scores
    });

    // Update scores
    if (option.scores) {
        Object.keys(option.scores).forEach(key => {
            scores[key] += option.scores[key];
        });
    }

    // Track budget
    if (option.budgetLevel) {
        selectedBudget = option.budgetLevel;
    }

    // Animate out and move to next question
    setTimeout(() => {
        const wrapper = document.querySelector('.question-wrapper');
        wrapper.classList.add('exit');

        setTimeout(() => {
            nextQuestion();
        }, 300);
    }, 500);
}

function submitSliderAnswer() {
    triggerHaptic('medium');

    const slider = document.getElementById('maintenance-slider');
    const value = parseInt(slider.value);
    const question = questions[currentQuestion];
    const option = question.options[value - 1];

    // Create burst
    const button = document.querySelector('.next-button');
    const rect = button.getBoundingClientRect();
    createParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);

    streak++;
    totalPoints += 10 * streak;

    answers.push({
        questionId: question.id,
        value: value,
        scores: option.scores
    });

    if (option.scores) {
        Object.keys(option.scores).forEach(key => {
            scores[key] += option.scores[key];
        });
    }

    const wrapper = document.querySelector('.question-wrapper');
    wrapper.classList.add('exit');

    setTimeout(() => {
        nextQuestion();
    }, 300);
}

// ==========================================
// NEXT QUESTION
// ==========================================
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        triggerHaptic('success');
        showLoadingScreen();
    } else {
        renderQuestion();
    }
}

// ==========================================
// LOADING SCREEN
// ==========================================
function showLoadingScreen() {
    showScreen('loading-screen');

    const loadingMessages = [
        "Analyzing your style choices",
        "Finding your perfect match",
        "Calculating your vibe score",
        "Preparing something special"
    ];

    let messageIndex = 0;
    const loadingSubtext = document.getElementById('loading-subtext');

    // Add dots animation
    loadingSubtext.innerHTML = `${loadingMessages[0]}<span class="loading-dots"><span></span><span></span><span></span></span>`;

    const messageInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < loadingMessages.length) {
            loadingSubtext.innerHTML = `${loadingMessages[messageIndex]}<span class="loading-dots"><span></span><span></span><span></span></span>`;
        }
    }, 600);

    setTimeout(() => {
        clearInterval(messageInterval);
        calculateAndShowResults();
    }, 2800);
}

// ==========================================
// CALCULATE RESULTS (AI PREDICTION ENGINE)
// ==========================================
function calculateAndShowResults() {
    // Find winning style
    let maxScore = 0;
    let winningStyle = 'bodyWave';

    Object.keys(scores).forEach(key => {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            winningStyle = key;
        }
    });

    // Calculate match percentage
    const totalPossibleScore = questions.length * 3;
    let matchPercent = Math.round((scores[winningStyle] / totalPossibleScore) * 100);
    matchPercent = Math.max(78, Math.min(98, matchPercent + 65));
    matchPercent += Math.floor(Math.random() * 6) - 3;
    matchPercent = Math.max(78, Math.min(98, matchPercent));

    const style = wigStyles[winningStyle];

    // Generate personalized text
    const whyText = generateWhyText(winningStyle, answers);
    const affirmation = style.affirmations[Math.floor(Math.random() * style.affirmations.length)];
    const priceRange = getPriceRange(winningStyle, selectedBudget);

    // Populate result screen
    document.getElementById('wig-showcase').innerHTML = style.svg;
    document.getElementById('wig-name').textContent = style.name;
    document.getElementById('match-percent').textContent = `${matchPercent}%`;
    document.getElementById('why-text').textContent = whyText;

    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = style.tips.map(tip => `<li>${tip}</li>`).join('');

    document.getElementById('price-range').textContent = priceRange;
    document.getElementById('confidence-line').innerHTML = `<p>"${affirmation}"</p>`;

    showScreen('results-screen');

    // Delay confetti for dramatic effect
    setTimeout(() => {
        triggerConfetti();
    }, 400);
}

// ==========================================
// GENERATE PERSONALIZED "WHY" TEXT
// ==========================================
function generateWhyText(styleKey, userAnswers) {
    const vibeAnswer = userAnswers.find(a => a.questionId === 'vibe');
    const confidenceAnswer = userAnswers.find(a => a.questionId === 'confidence');
    const occasionAnswer = userAnswers.find(a => a.questionId === 'occasion');

    const vibeDescriptions = {
        sleek: "polished and sophisticated taste",
        bold: "bold, adventurous spirit",
        textured: "appreciation for cultural beauty",
        colorful: "playful and expressive nature"
    };

    const confidenceDescriptions = {
        chill: "relaxed confidence",
        bold: "fearless energy",
        soft: "gentle grace",
        boss: "commanding presence"
    };

    const styleMatches = {
        laceFront: "This lace front gives you that flawless, natural hairline that perfectly complements",
        boneStraight: "The sleek bone straight style beautifully matches",
        curlyBob: "These bouncy curls bring out",
        bodyWave: "The flowing waves enhance",
        braided: "This braided style celebrates",
        colored: "These vibrant colors express",
        halfWig: "This natural half wig blends seamlessly with"
    };

    let text = styleMatches[styleKey] || "This style perfectly matches";

    if (vibeAnswer && vibeDescriptions[vibeAnswer.optionId]) {
        text += ` your ${vibeDescriptions[vibeAnswer.optionId]}`;
    }

    if (confidenceAnswer && confidenceDescriptions[confidenceAnswer.optionId]) {
        text += ` and ${confidenceDescriptions[confidenceAnswer.optionId]}`;
    }

    text += ". Perfect for making every moment count!";

    return text;
}

// ==========================================
// GET PRICE RANGE
// ==========================================
function getPriceRange(styleKey, budget) {
    const priceRanges = {
        low: {
            laceFront: "₦12,000 – ₦18,000",
            boneStraight: "₦8,000 – ₦15,000",
            curlyBob: "₦7,000 – ₦12,000",
            bodyWave: "₦8,000 – ₦14,000",
            braided: "₦5,000 – ₦12,000",
            colored: "₦10,000 – ₦18,000",
            halfWig: "₦5,000 – ₦10,000"
        },
        medium: {
            laceFront: "₦25,000 – ₦45,000",
            boneStraight: "₦20,000 – ₦35,000",
            curlyBob: "₦15,000 – ₦28,000",
            bodyWave: "₦18,000 – ₦32,000",
            braided: "₦12,000 – ₦25,000",
            colored: "₦22,000 – ₦40,000",
            halfWig: "₦10,000 – ₦20,000"
        },
        high: {
            laceFront: "₦50,000 – ₦120,000",
            boneStraight: "₦45,000 – ₦80,000",
            curlyBob: "₦35,000 – ₦60,000",
            bodyWave: "₦40,000 – ₦70,000",
            braided: "₦25,000 – ₦50,000",
            colored: "₦50,000 – ₦100,000",
            halfWig: "₦20,000 – ₦40,000"
        }
    };

    return priceRanges[budget]?.[styleKey] || "₦15,000 – ₦40,000";
}

// ==========================================
// CONFETTI - ENHANCED
// ==========================================
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#fbbf24', '#10b981', '#f472b6', '#a855f7'];
    const shapes = ['●', '■', '▲', '★', '♦', '❤', '✦'];

    // Wave 1
    for (let i = 0; i < 40; i++) {
        createConfettiPiece(confettiContainer, colors, shapes, 0);
    }

    // Wave 2
    setTimeout(() => {
        for (let i = 0; i < 30; i++) {
            createConfettiPiece(confettiContainer, colors, shapes, 0);
        }
    }, 500);

    // Wave 3
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            createConfettiPiece(confettiContainer, colors, shapes, 0);
        }
    }, 1000);

    setTimeout(() => confettiContainer.innerHTML = '', 5000);
}

function createConfettiPiece(container, colors, shapes, delay) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.fontSize = `${Math.random() * 18 + 10}px`;
    confetti.style.animationDelay = `${delay + Math.random() * 0.3}s`;
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    container.appendChild(confetti);
}

// ==========================================
// SHARE FUNCTIONALITY
// ==========================================
function shareResult() {
    triggerHaptic('medium');

    const wigName = document.getElementById('wig-name').textContent;
    const matchPercent = document.getElementById('match-percent').textContent;

    const shareText = `I just discovered I'm a ${wigName} with ${matchPercent} match! 👑✨\n\nTake the Wig Vibe Quiz and find YOUR perfect style!`;

    // Create burst effect
    const button = document.querySelector('.share-button');
    const rect = button.getBoundingClientRect();
    createParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);

    if (navigator.share) {
        navigator.share({
            title: 'My Wig Vibe Quiz Result',
            text: shareText,
            url: window.location.href
        }).catch(() => copyToClipboard(shareText));
    } else {
        copyToClipboard(shareText);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const shareBtn = document.querySelector('.share-button');
        const originalHTML = shareBtn.innerHTML;
        shareBtn.innerHTML = '<span>✓</span> Copied!';
        shareBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        setTimeout(() => {
            shareBtn.innerHTML = originalHTML;
            shareBtn.style.background = '';
        }, 2000);
    }).catch(() => {
        alert('Share this: ' + text);
    });
}

// ==========================================
// REPLAY FUNCTIONALITY
// ==========================================
function replayQuiz() {
    triggerHaptic('medium');

    const button = document.querySelector('.replay-button');
    const rect = button.getBoundingClientRect();
    createParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);

    setTimeout(() => startQuiz(), 300);
}

// ==========================================
// INITIALIZE - Add welcome screen interactions
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Make preview wigs interactive
    document.querySelectorAll('.preview-wig').forEach((wig, index) => {
        wig.addEventListener('click', function(e) {
            triggerHaptic('light');
            createParticleBurst(e.clientX, e.clientY, 8);

            // Add bounce effect
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = `wigPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
        });
    });

    // Make logo interactive
    const logo = document.querySelector('.logo-badge');
    if (logo) {
        logo.addEventListener('click', function(e) {
            triggerHaptic('light');
            createParticleBurst(e.clientX, e.clientY, 15);
        });
    }

    console.log('✨ Wig Vibe Quiz loaded! Ready to find your perfect style! 💇🏾‍♀️');
});
