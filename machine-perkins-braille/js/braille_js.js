// Braille alphabet mapping (French unified braille)
const brailleAlphabet = {
    // Lettres de base
    'a': [1], 'b': [1,2], 'c': [1,4], 'd': [1,4,5], 'e': [1,5],
    'f': [1,2,4], 'g': [1,2,4,5], 'h': [1,2,5], 'i': [2,4], 'j': [2,4,5],
    'k': [1,3], 'l': [1,2,3], 'm': [1,3,4], 'n': [1,3,4,5], 'o': [1,3,5],
    'p': [1,2,3,4], 'q': [1,2,3,4,5], 'r': [1,2,3,5], 's': [2,3,4], 't': [2,3,4,5],
    'u': [1,3,6], 'v': [1,2,3,6], 'w': [2,4,5,6], 'x': [1,3,4,6], 'y': [1,3,4,5,6],
    'z': [1,3,5,6],
    
    // Lettres accentuées
    'à': [1,2,3,5,6], 'â': [1,6], 'é': [1,2,3,4,5,6], 'è': [2,3,4,6], 'ê': [1,2,6],
    'ë': [1,2,4,6], 'î': [1,4,6], 'ï': [1,2,4,5,6], 'ô': [1,4,5,6], 'ù': [2,3,4,5,6],
    'û': [1,5,6], 'ü': [1,2,5,6], 'ç': [1,3,4,5,6], 'œ': [2,4,6],
    
    // Chiffres (précédés du préfixe numérique point 6)
    '#': [6], // Préfixe numérique
    '1': [1,6], '2': [1,2,6], '3': [1,4,6], '4': [1,4,5,6], '5': [1,5,6],
    '6': [1,2,4,6], '7': [1,2,4,5,6], '8': [1,2,5,6], '9': [2,4,6], '0': [2,4,5,6],
    
    // Ponctuation
    '.': [2,5,6], ',': [2], ';': [2,3], ':': [2,5], '?': [2,6], '!': [2,3,5],
    '"': [2,3,5,6], '(': [2,3,6], ')': [3,5,6], '-': [3,6], '\'': [3],
    '/': [3,4], '*': [3,5], '+': [2,3,5], '=': [2,3,5,6],
    
    // Caractères spéciaux
    ' ': [], // Espace
    'MAJ': [3,6] // Majuscule (préfixe)
};

// Reverse mapping: dots pattern to letter
const dotsToLetter = {};
for (const [letter, dots] of Object.entries(brailleAlphabet)) {
    const key = dots.sort((a, b) => a - b).join(',');
    dotsToLetter[key] = letter;
}

// Text-to-speech function
function speakLetter(letter) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(letter);
        utterance.lang = 'fr-FR';
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    }
}

function createMiniBrailleCell(dots) {
    const cell = document.createElement('div');
    cell.className = 'braille-mini-cell';
    
    for (let i = 1; i <= 6; i++) {
        const dot = document.createElement('div');
        dot.className = 'braille-mini-dot';
        if (dots.includes(i)) {
            dot.classList.add('active');
        }
        const col = i > 3 ? 2 : 1;
        const row = i > 3 ? i - 3 : i;
        dot.style.gridColumn = col;
        dot.style.gridRow = row;
        cell.appendChild(dot);
    }
    
    return cell;
}

function populateBrailleTable() {
    // Lettres de base a-z
    const tbody = document.getElementById('brailleTableBody');
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let rows = Math.ceil(letters.length / 3);
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (index < letters.length) {
                const letter = letters[index];
                const dots = brailleAlphabet[letter];
                
                const tdLetter = document.createElement('td');
                tdLetter.textContent = letter.toUpperCase();
                tdLetter.style.fontWeight = 'bold';
                tr.appendChild(tdLetter);
                
                const tdDots = document.createElement('td');
                tdDots.textContent = dots.join(',');
                tr.appendChild(tdDots);
                
                const tdBraille = document.createElement('td');
                tdBraille.appendChild(createMiniBrailleCell(dots));
                tr.appendChild(tdBraille);
            } else {
                for (let k = 0; k < 3; k++) {
                    tr.appendChild(document.createElement('td'));
                }
            }
        }
        
        tbody.appendChild(tr);
    }
    
    // Lettres accentuées
    const accentBody = document.getElementById('brailleAccentTableBody');
    const accentLetters = ['à', 'â', 'é', 'è', 'ê', 'ë', 'î', 'ï', 'ô', 'ù', 'û', 'ü', 'ç', 'œ'];
    rows = Math.ceil(accentLetters.length / 3);
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (index < accentLetters.length) {
                const letter = accentLetters[index];
                const dots = brailleAlphabet[letter];
                
                const tdLetter = document.createElement('td');
                tdLetter.textContent = letter;
                tdLetter.style.fontWeight = 'bold';
                tr.appendChild(tdLetter);
                
                const tdDots = document.createElement('td');
                tdDots.textContent = dots.join(',');
                tr.appendChild(tdDots);
                
                const tdBraille = document.createElement('td');
                tdBraille.appendChild(createMiniBrailleCell(dots));
                tr.appendChild(tdBraille);
            } else {
                for (let k = 0; k < 3; k++) {
                    tr.appendChild(document.createElement('td'));
                }
            }
        }
        
        accentBody.appendChild(tr);
    }
    
    // Chiffres
    const numberBody = document.getElementById('brailleNumberTableBody');
    const numbers = ['#', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    rows = Math.ceil(numbers.length / 3);
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (index < numbers.length) {
                const num = numbers[index];
                const dots = brailleAlphabet[num];
                
                const tdNum = document.createElement('td');
                tdNum.textContent = num === '#' ? '# (préfixe)' : num;
                tdNum.style.fontWeight = 'bold';
                tr.appendChild(tdNum);
                
                const tdDots = document.createElement('td');
                tdDots.textContent = dots.join(',');
                tr.appendChild(tdDots);
                
                const tdBraille = document.createElement('td');
                tdBraille.appendChild(createMiniBrailleCell(dots));
                tr.appendChild(tdBraille);
            } else {
                for (let k = 0; k < 3; k++) {
                    tr.appendChild(document.createElement('td'));
                }
            }
        }
        
        numberBody.appendChild(tr);
    }
    
    // Ponctuation
    const punctBody = document.getElementById('braillePunctuationTableBody');
    const punctuation = ['.', ',', ';', ':', '?', '!', '"', '(', ')', '-', '\'', '/', '*', '+', '=', 'MAJ'];
    rows = Math.ceil(punctuation.length / 3);
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (index < punctuation.length) {
                const punct = punctuation[index];
                const dots = brailleAlphabet[punct];
                
                const tdPunct = document.createElement('td');
                tdPunct.textContent = punct === 'MAJ' ? 'MAJ (préfixe)' : punct;
                tdPunct.style.fontWeight = 'bold';
                tr.appendChild(tdPunct);
                
                const tdDots = document.createElement('td');
                tdDots.textContent = dots.join(',');
                tr.appendChild(tdDots);
                
                const tdBraille = document.createElement('td');
                tdBraille.appendChild(createMiniBrailleCell(dots));
                tr.appendChild(tdBraille);
            } else {
                for (let k = 0; k < 3; k++) {
                    tr.appendChild(document.createElement('td'));
                }
            }
        }
        
        punctBody.appendChild(tr);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateBrailleTable();
    
    const dotMap = {
        'f': 'dot1',
        'd': 'dot2',
        's': 'dot3',
        'j': 'dot4',
        'k': 'dot5',
        'l': 'dot6'
    };
    
    const brailleOutput = document.getElementById('brailleOutput');
    let activeDots = new Set();
    let currentLine = null;
    const MAX_CHARS_PER_LINE = 30;
    const WARNING_THRESHOLD = 25;
    
    let audioContext = null;
    
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }
    
    function playBeep() {
        initAudio();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
    
    function createNewLine() {
        const line = document.createElement('div');
        line.className = 'braille-line';
        line.dataset.charCount = '0';
        brailleOutput.appendChild(line);
        
        setTimeout(() => {
            line.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }, 50);
        
        return line;
    }
    
    currentLine = createNewLine();
    
    function updateCurrentCell() {
        Object.values(dotMap).forEach(dotId => {
            document.getElementById(dotId).classList.remove('active');
        });
        
        activeDots.forEach(key => {
            const dotId = dotMap[key];
            if (dotId) {
                document.getElementById(dotId).classList.add('active');
            }
        });
    }
    
    function createBrailleCharacter() {
        const cell = document.createElement('div');
        cell.className = 'braille-cell';
        const dotsOrder = [1, 2, 3, 4, 5, 6];
        
        for (let i = 0; i < dotsOrder.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            
            const dotNum = dotsOrder[i];
            const col = dotNum > 3 ? 2 : 1;
            const row = dotNum > 3 ? dotNum - 3 : dotNum;
            
            dot.style.gridColumn = col;
            dot.style.gridRow = row;
            
            for (const [key, dotId] of Object.entries(dotMap)) {
                if (dotId === `dot${dotNum}` && activeDots.has(key)) {
                    dot.classList.add('active');
                    break;
                }
            }
            
            cell.appendChild(dot);
        }
        
        cell.style.display = 'grid';
        cell.style.gridTemplateColumns = '1fr 1fr';
        cell.style.gridTemplateRows = 'repeat(3, 1fr)';
        cell.style.gap = '2.6mm';
        cell.style.width = '5mm';
        cell.style.height = '10mm';
        
        return cell;
    }
    
    function handleKeyDown(event) {
        const key = event.key.toLowerCase();
        
        if (key === 'enter') {
            event.preventDefault();
            currentLine = createNewLine();
            return;
        }
        
        if (key === ' ') {
            event.preventDefault();
            const charCount = parseInt(currentLine.dataset.charCount || '0');
            if (charCount < MAX_CHARS_PER_LINE) {
                const spaceElement = document.createElement('div');
                spaceElement.style.width = '7.46mm';
                spaceElement.style.display = 'inline-block';
                currentLine.appendChild(spaceElement);
                currentLine.dataset.charCount = charCount + 1;
                
                if (charCount + 1 === WARNING_THRESHOLD) {
                    playBeep();
                }
            }
            return;
        }
        
        if (Object.keys(dotMap).includes(key)) {
            event.preventDefault();
            activeDots.add(key);
            updateCurrentCell();
        }
    }
    
    function handleKeyUp(event) {
        const key = event.key.toLowerCase();
        
        if (key === 'enter' || key === ' ' || Object.keys(dotMap).includes(key)) {
            event.preventDefault();
            
            if (key !== ' ' && key !== 'enter' && activeDots.size > 0 && [...activeDots].every(k => !Object.keys(dotMap).includes(k) || !activeDots.has(k))) {
                const charCount = parseInt(currentLine.dataset.charCount || '0');
                if (charCount < MAX_CHARS_PER_LINE) {
                    currentLine.appendChild(createBrailleCharacter());
                    currentLine.dataset.charCount = charCount + 1;
                    
                    currentLine.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    
                    if (charCount + 1 === WARNING_THRESHOLD) {
                        playBeep();
                    }
                    
                    const dotsArray = [];
                    activeDots.forEach(k => {
                        const dotId = dotMap[k];
                        const dotNum = parseInt(dotId.replace('dot', ''));
                        dotsArray.push(dotNum);
                    });
                    const dotsKey = dotsArray.sort((a, b) => a - b).join(',');
                    const letter = dotsToLetter[dotsKey];
                    if (letter) {
                        speakLetter(letter);
                    }
                }
                activeDots.clear();
                updateCurrentCell();
            }
        }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
});