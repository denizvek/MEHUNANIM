// Gifted Test Practice App - Main Application Logic

// State
let state = {
    mode: 'practice', // 'practice' or 'test'
    selectedCategories: ['mixed'],
    questionCount: 10,
    currentQuestionIndex: 0,
    questions: [],
    answers: [], // User's answers: {questionId, selectedIndex, isCorrect, timeSpent}
    startTime: null,
    questionStartTime: null,
    totalTime: 0,
    timerInterval: null,
    isLoggedIn: false,
    userName: ''
};

// User Progress Storage
const STORAGE_KEY = 'gifted_app_progress';

// Load user progress from localStorage
function loadUserProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Error loading progress:', e);
    }
    return {
        userName: '',
        totalQuizzes: 0,
        totalCorrect: 0,
        totalQuestions: 0,
        bestScore: 0,
        categoryStats: {},
        history: [] // Last 10 quizzes
    };
}

// Save user progress to localStorage
function saveUserProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

// Update progress after quiz
function updateProgress() {
    const progress = loadUserProgress();
    const correctCount = state.answers.filter(a => a.isCorrect).length;
    const totalCount = state.questions.length;
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    // Update totals
    progress.totalQuizzes++;
    progress.totalCorrect += correctCount;
    progress.totalQuestions += totalCount;
    
    // Update best score
    if (percentage > progress.bestScore) {
        progress.bestScore = percentage;
    }
    
    // Update category stats
    state.questions.forEach((q, index) => {
        const answer = state.answers[index];
        if (!progress.categoryStats[q.category]) {
            progress.categoryStats[q.category] = { correct: 0, total: 0 };
        }
        progress.categoryStats[q.category].total++;
        if (answer && answer.isCorrect) {
            progress.categoryStats[q.category].correct++;
        }
    });
    
    // Add to history (keep last 10)
    progress.history.unshift({
        date: new Date().toISOString(),
        score: percentage,
        correct: correctCount,
        total: totalCount,
        categories: state.selectedCategories,
        time: state.totalTime
    });
    if (progress.history.length > 10) {
        progress.history = progress.history.slice(0, 10);
    }
    
    // Update username if set
    if (state.userName) {
        progress.userName = state.userName;
    }
    
    saveUserProgress(progress);
    return progress;
}

// Show user stats modal
function showStats() {
    const progress = loadUserProgress();
    
    let categoryStatsHtml = '';
    Object.entries(progress.categoryStats).forEach(([catId, stats]) => {
        const cat = QUESTIONS_DATABASE.categories.find(c => c.id === catId);
        const catName = cat ? cat.name : catId;
        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        categoryStatsHtml += `
            <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                <span>${catName}</span>
                <span style="color: ${pct >= 70 ? '#4CAF50' : pct >= 50 ? '#FF9800' : '#f44336'}">${pct}% (${stats.correct}/${stats.total})</span>
            </div>
        `;
    });
    
    if (!categoryStatsHtml) {
        categoryStatsHtml = '<p style="color: #888; text-align: center;">עוד לא התחלת לתרגל</p>';
    }
    
    const avgScore = progress.totalQuestions > 0 
        ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100) 
        : 0;
    
    const modalHtml = `
        <div class="modal">
            <h3>📊 הסטטיסטיקות שלי</h3>
            
            ${progress.userName ? `<p style="text-align: center; font-size: 1.2rem; margin-bottom: 20px;">שלום, <strong>${progress.userName}</strong>!</p>` : ''}
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
                <div style="text-align: center; padding: 15px; background: #f8f9ff; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 600; color: #667eea;">${progress.totalQuizzes}</div>
                    <div style="font-size: 0.8rem; color: #888;">תרגולים</div>
                </div>
                <div style="text-align: center; padding: 15px; background: #f8f9ff; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 600; color: #4CAF50;">${avgScore}%</div>
                    <div style="font-size: 0.8rem; color: #888;">ממוצע</div>
                </div>
                <div style="text-align: center; padding: 15px; background: #f8f9ff; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 600; color: #FF9800;">${progress.bestScore}%</div>
                    <div style="font-size: 0.8rem; color: #888;">שיא</div>
                </div>
            </div>
            
            <h4 style="margin-bottom: 10px;">ביצועים לפי נושא:</h4>
            <div style="max-height: 200px; overflow-y: auto; margin-bottom: 20px;">
                ${categoryStatsHtml}
            </div>
            
            <button class="close-modal" onclick="closeStatsModal()">סגור</button>
        </div>
    `;
    
    document.getElementById('helpModal').innerHTML = modalHtml;
    document.getElementById('helpModal').classList.add('active');
}

function closeStatsModal() {
    document.getElementById('helpModal').classList.remove('active');
    // Restore original modal content
    document.getElementById('helpModal').innerHTML = `
        <div class="modal">
            <h3>💡 הכוונה לפתרון</h3>
            <p id="helpText">טוען...</p>
            <button class="close-modal" onclick="closeHelp()">הבנתי!</button>
        </div>
    `;
}

// Set username
function setUserName() {
    const name = prompt('מה השם שלך?');
    if (name && name.trim()) {
        state.userName = name.trim();
        const progress = loadUserProgress();
        progress.userName = state.userName;
        saveUserProgress(progress);
        updateUserDisplay();
    }
}

// Update user display in header
function updateUserDisplay() {
    const progress = loadUserProgress();
    const userArea = document.getElementById('userArea');
    if (userArea) {
        if (progress.userName) {
            userArea.innerHTML = `
                <span style="cursor: pointer;" onclick="showStats()">👤 ${progress.userName}</span>
                <span style="margin-right: 10px; cursor: pointer;" onclick="showStats()">📊</span>
            `;
        } else {
            userArea.innerHTML = `
                <button onclick="setUserName()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 15px; border-radius: 20px; cursor: pointer;">
                    👤 הכנס שם
                </button>
            `;
        }
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeCategories();
    updateUserDisplay();
    showScreen('home');
    
    // Load saved username
    const progress = loadUserProgress();
    if (progress.userName) {
        state.userName = progress.userName;
    }
});

// Initialize category grid
function initializeCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    QUESTIONS_DATABASE.categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'category-btn' + (cat.id === 'mixed' ? ' selected' : '');
        btn.dataset.category = cat.id;
        btn.onclick = () => toggleCategory(cat.id);
        btn.innerHTML = `
            <div class="emoji">${cat.emoji}</div>
            <span>${cat.name}</span>
        `;
        grid.appendChild(btn);
    });
}

// Toggle category selection
function toggleCategory(categoryId) {
    const btn = document.querySelector(`[data-category="${categoryId}"]`);
    
    if (categoryId === 'mixed') {
        // If mixed is selected, deselect others
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedCategories = ['mixed'];
    } else {
        // Deselect mixed if other category is selected
        document.querySelector('[data-category="mixed"]').classList.remove('selected');
        btn.classList.toggle('selected');
        
        // Update state
        const index = state.selectedCategories.indexOf('mixed');
        if (index > -1) state.selectedCategories.splice(index, 1);
        
        if (btn.classList.contains('selected')) {
            if (!state.selectedCategories.includes(categoryId)) {
                state.selectedCategories.push(categoryId);
            }
        } else {
            const idx = state.selectedCategories.indexOf(categoryId);
            if (idx > -1) state.selectedCategories.splice(idx, 1);
        }
        
        // If nothing selected, select mixed
        if (state.selectedCategories.length === 0) {
            document.querySelector('[data-category="mixed"]').classList.add('selected');
            state.selectedCategories = ['mixed'];
        }
    }
}

// Select mode
function selectMode(mode) {
    state.mode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.mode === mode);
    });
}

// Select question count
function selectCount(count) {
    state.questionCount = count;
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.textContent) === count);
    });
}

// Start quiz
function startQuiz() {
    // Gather questions from selected categories
    let allQuestions = [];
    
    if (state.selectedCategories.includes('mixed')) {
        allQuestions = [...QUESTIONS_DATABASE.questions];
    } else {
        state.selectedCategories.forEach(catId => {
            const catQuestions = QUESTIONS_DATABASE.questions.filter(q => q.category === catId);
            allQuestions.push(...catQuestions);
        });
    }
    
    // Shuffle and pick
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    state.questions = shuffled.slice(0, Math.min(state.questionCount, shuffled.length));
    
    // Reset state
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.startTime = Date.now();
    state.totalTime = 0;
    
    // Start timer
    startTimer();
    
    // Show quiz screen
    showScreen('quiz');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    const totalQuestions = state.questions.length;
    
    // Update progress
    document.getElementById('progressFill').style.width = 
        `${((state.currentQuestionIndex) / totalQuestions) * 100}%`;
    document.getElementById('questionNumber').textContent = 
        `שאלה ${state.currentQuestionIndex + 1} מתוך ${totalQuestions}`;
    
    // Build question content
    const content = document.getElementById('questionContent');
    
    let html = `
        <div class="question-text">${question.question}</div>
        <div class="answers-grid">
    `;
    
    const letters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];
    question.answers.forEach((answer, index) => {
        html += `
            <button class="answer-btn" data-index="${index}" onclick="selectAnswer(${index})">
                <span class="letter">${letters[index]}</span>
                <span>${answer}</span>
            </button>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    
    // Reset next button
    document.getElementById('nextBtn').disabled = true;
    
    // Record question start time
    state.questionStartTime = Date.now();
}

// Select answer
function selectAnswer(index) {
    const question = state.questions[state.currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = index === question.correctIndex;
    
    // Check if already answered
    const existingAnswer = state.answers.find(a => a.questionId === question.id);
    if (existingAnswer) return;
    
    // Calculate time spent on this question
    const timeSpent = Math.round((Date.now() - state.questionStartTime) / 1000);
    
    // Record answer
    state.answers.push({
        questionId: question.id,
        selectedIndex: index,
        isCorrect: isCorrect,
        timeSpent: timeSpent
    });
    
    // Update UI
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        btn.classList.add('disabled');
    });
    buttons[index].classList.add('selected');
    
    // In practice mode, show correct/incorrect immediately
    if (state.mode === 'practice') {
        buttons[index].classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) {
            buttons[question.correctIndex].classList.add('correct');
        }
    }
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
    
    // Auto-advance after delay in test mode
    if (state.mode === 'test') {
        setTimeout(() => {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                // Can click next or wait
            }
        }, 500);
    }
}

// Next question
function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Finish quiz
function finishQuiz() {
    // Stop timer
    stopTimer();
    state.totalTime = Math.round((Date.now() - state.startTime) / 1000);
    
    // Calculate results
    const correctCount = state.answers.filter(a => a.isCorrect).length;
    const totalCount = state.questions.length;
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    // Save progress
    const progress = updateProgress();
    
    // Determine emoji and message
    let emoji, message;
    if (percentage >= 90) {
        emoji = '🏆';
        message = 'מדהים! אתה גאון!';
    } else if (percentage >= 70) {
        emoji = '🌟';
        message = 'כל הכבוד! עבודה מצוינת!';
    } else if (percentage >= 50) {
        emoji = '👍';
        message = 'טוב מאוד! המשך להתאמן!';
    } else {
        emoji = '💪';
        message = 'לא נורא, תמשיך להתאמן!';
    }
    
    // Format time
    const minutes = Math.floor(state.totalTime / 60);
    const seconds = state.totalTime % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update results screen
    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = message;
    document.getElementById('scorePercent').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalCount').textContent = totalCount;
    document.getElementById('totalTime').textContent = timeStr;
    
    // Show improvement message if applicable
    const improvementMsg = document.getElementById('improvementMsg');
    if (improvementMsg) {
        if (percentage > progress.bestScore - percentage) {
            improvementMsg.textContent = '🎉 שיא חדש!';
            improvementMsg.style.display = 'block';
        } else {
            improvementMsg.style.display = 'none';
        }
    }
    
    showScreen('results');
}

// Timer functions
function startTimer() {
    state.timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function updateTimer() {
    const elapsed = Math.round((Date.now() - state.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Show help
function showHelp() {
    const question = state.questions[state.currentQuestionIndex];
    document.getElementById('helpText').textContent = question.hint || 'נסה לחשוב על הקשר בין הדברים בשאלה.';
    document.getElementById('helpModal').classList.add('active');
}

function closeHelp() {
    document.getElementById('helpModal').classList.remove('active');
}

// Share results
function shareResults() {
    const correctCount = state.answers.filter(a => a.isCorrect).length;
    const totalCount = state.questions.length;
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    const message = `🌟 הילד/ה סיים/ה תרגול למבחן מחוננים!\n\n` +
        `📊 ציון: ${percentage}%\n` +
        `✅ תשובות נכונות: ${correctCount} מתוך ${totalCount}\n` +
        `⏱️ זמן: ${document.getElementById('totalTime').textContent}\n\n` +
        `💪 כל הכבוד!`;
    
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Review answers
function reviewAnswers() {
    let html = '<h3 style="margin-bottom: 20px; color: #333;">סקירת תשובות</h3>';
    
    state.questions.forEach((question, index) => {
        const answer = state.answers[index];
        const letters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];
        
        html += `
            <div style="margin-bottom: 20px; padding: 15px; background: ${answer.isCorrect ? '#E8F5E9' : '#FFEBEE'}; border-radius: 10px;">
                <div style="font-weight: 600; margin-bottom: 10px;">
                    ${answer.isCorrect ? '✅' : '❌'} שאלה ${index + 1}: ${question.question}
                </div>
                <div style="color: #666;">
                    התשובה שלך: ${letters[answer.selectedIndex]}. ${question.answers[answer.selectedIndex]}
                </div>
                ${!answer.isCorrect ? `
                    <div style="color: #4CAF50; margin-top: 5px;">
                        התשובה הנכונה: ${letters[question.correctIndex]}. ${question.answers[question.correctIndex]}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    html += `<button class="start-btn" onclick="goHome()" style="margin-top: 20px;">חזרה הביתה</button>`;
    
    document.getElementById('resultsScreen').innerHTML = html;
}

// Go home
function goHome() {
    showScreen('home');
    // Reinitialize
    state.currentQuestionIndex = 0;
    state.questions = [];
    state.answers = [];
    stopTimer();
    
    // Recreate results screen HTML
    document.getElementById('resultsScreen').innerHTML = `
        <div class="results-header">
            <div class="trophy" id="resultEmoji">🏆</div>
            <h2 id="resultTitle">כל הכבוד!</h2>
        </div>

        <div class="score-circle">
            <span class="score" id="scorePercent">85%</span>
            <span class="label">ציון</span>
        </div>

        <div class="stats-grid">
            <div class="stat-item">
                <div class="value" id="correctCount">8</div>
                <div class="label">תשובות נכונות</div>
            </div>
            <div class="stat-item">
                <div class="value" id="totalCount">10</div>
                <div class="label">סה״כ שאלות</div>
            </div>
            <div class="stat-item">
                <div class="value" id="totalTime">2:30</div>
                <div class="label">זמן כולל</div>
            </div>
        </div>

        <div class="share-section">
            <h4>שתף את ההישג שלך עם ההורים! 👨‍👩‍👧</h4>
            <button class="share-btn" onclick="shareResults()">
                <span>📱</span> שתף בוואטסאפ
            </button>
        </div>

        <div class="results-actions">
            <button class="results-btn review-btn" onclick="reviewAnswers()">📋 סקירת תשובות</button>
            <button class="results-btn home-btn" onclick="goHome()">🏠 חזרה הביתה</button>
        </div>
    `;
}

// Screen management
function showScreen(screenName) {
    document.getElementById('homeScreen').style.display = screenName === 'home' ? 'block' : 'none';
    document.getElementById('quizScreen').style.display = screenName === 'quiz' ? 'block' : 'none';
    document.getElementById('resultsScreen').style.display = screenName === 'results' ? 'block' : 'none';
}

// Close modal when clicking outside
document.getElementById('helpModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeHelp();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Number keys for answers
    if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        const btn = document.querySelector(`.answer-btn[data-index="${index}"]`);
        if (btn && !btn.classList.contains('disabled')) {
            selectAnswer(index);
        }
    }
    
    // Enter or Space for next
    if (e.key === 'Enter' || e.key === ' ') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && !nextBtn.disabled && document.getElementById('quizScreen').style.display !== 'none') {
            e.preventDefault();
            nextQuestion();
        }
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        closeHelp();
    }
});
