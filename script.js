document.addEventListener('DOMContentLoaded', () => {
    // --- BANK SOAL (TELAH DIPERBAIKI DAN DIPERIKSA ULANG) ---
    const questionBank = {
        dhamir: {
            title: "تغيير الضمائر (الفعل الماضي والمضارع)",
            questions: [
                // Huwa (هو)
                { question: "هو ____ إلى المدرسة كل يوم. (فعل مضارع من 'ذهب')", correctAnswer: "يَذْهَبُ" },
                { question: "هو ____ التفاحة أمس. (فعل ماضي من 'أكل')", correctAnswer: "أَكَلَ" },
                { question: "هو ____ في المسابقة وفاز. (فعل ماضي من 'شارك')", correctAnswer: "شَارَكَ" },
                // Hiya (هي)
                { question: "هي ____ الدرس جيداً. (فعل مضارع من 'تفهم')", correctAnswer: "تَفْهَمُ" },
                { question: "هي ____ النافذة. (فعل ماضي من 'فتحت')", correctAnswer: "فَتَحَتْ" },
                { question: "هي ____ رسالة إلى صديقتها. (فعل ماضي من 'كتبت')", correctAnswer: "كَتَبَتْ" },
                // Anta (أنت)
                { question: "أنت ____ باللغة العربية بطلاقة. (فعل مضارع من 'تتكلم')", correctAnswer: "تَتَكَلَّمُ" },
                { question: "أنت ____ الواجب المنزلي. (فعل ماضي من 'أكملت')", correctAnswer: "أَكْمَلْتَ" },
                { question: "أنت ____ صديقاً مخلصاً. (فعل ماضي من 'كنت')", correctAnswer: "كُنْتَ" },
                // Anti (أنتِ)
                { question: "أنتِ ____ الحديقة كل صباح. (فعل مضارع من 'تذهبين')", correctAnswer: "تَذْهَبِينَ" },
                { question: "أنتِ ____ القصة بتركيز. (فعل ماضي من 'قرأت')", correctAnswer: "قَرَأْتِ" },
                { question: "أنتِ ____ طعاماً لذيذاً. (فعل ماضي من 'طبخت')", correctAnswer: "طَبَخْتِ" },
                // Ana (أنا)
                { question: "أنا ____ في مدينة الرياض. (فعل مضارع من 'أعيش')", correctAnswer: "أَعِيشُ" },
                { question: "أنا ____ الفيلم أمس. (فعل ماضي من 'شاهدت')", correctAnswer: "شَاهَدْتُ" },
                { question: "أنا ____ إلى المسجد للصلاة. (فعل مضارع من 'أذهب')", correctAnswer: "أَذْهَبُ" }
            ]
        },
        naatManut: {
            title: "النعت والمنعوت",
            questions: [
                { question: "اشتريت كتاباً ____.", correctAnswer: "جَدِيداً" },
                { question: "رأيت رجلاً ____.", correctAnswer: "كَرِيماً" },
                { question: "هذه طالبةٌ ____.", correctAnswer: "مُجْتَهِدَةٌ" },
                { question: "قرأت قصةً ____.", correctAnswer: "مُؤَثِّرَةٍ" },
                { question: "زرت مدينةً ____.", correctAnswer: "جَمِيلَةٍ" },
                { question: "الولد ____ ذكي.", correctAnswer: "الصَّغِيرُ" },
                { question: "البنت ____ مهذبة.", correctAnswer: "الكَبِيرَةُ" },
                { question: "المعلمون ____ نشطون.", correctAnswer: "الجُدُدُ" },
                { question: "السيارة ____ سريعة.", correctAnswer: "الجَدِيدَةُ" },
                { question: "هذا بيتٌ ____.", correctAnswer: "وَاسِعٌ" },
                { question: "سافرنا في طائرةٍ ____.", correctAnswer: "كَبِيرَةٍ" },
                { question: "أكلت تفاحةً ____.", correctAnswer: "حُلْوَةٍ" },
                { question: "شربت قهوةً ____.", correctAnswer: "سَاخِنَةً" },
                { question: "التلميذان ____ مجتهدان.", correctAnswer: "النَّاجِحَانِ" },
                { question: "المسلمون ____ متحدون.", correctAnswer: "الأَخْيَارُ" }
            ]
        },
        mudhof: {
            title: "المضاف والمضاف إليه",
            questions: [
                { question: "مفتاح ____.", correctAnswer: "الْبَابِ" },
                { question: "بابُ ____.", correctAnswer: "الْمَدْرَسَةِ" },
                { question: "قلمُ ____.", correctAnswer: "التِّلْمِيذِ" },
                { question: "كتابُ ____.", correctAnswer: "الْمُعَلِّمِ" },
                { question: "سيارةُ ____.", correctAnswer: "أَبِي" },
                { question: "أمامَ ____.", correctAnswer: "الْبَيْتِ" },
                { question: "مدينةُ ____.", correctAnswer: "القَاهِرَةِ" },
                { question: "بابُ ____.", correctAnswer: "صَدِيقِي" },
                { question: "أوراقُ ____.", correctAnswer: "الطَّلَابِ" },
                { question: "مديرُ ____.", correctAnswer: "الْمَصْنَعِ" },
                { question: "نافذةُ ____.", correctAnswer: "الْغُرْفَةِ" },
                { question: "صوتُ ____.", correctAnswer: "الْمُعَلِّمَةِ" },
                { question: "مكتبُ ____.", correctAnswer: "الطَّبِيبِ" },
                { question: "حقيبةُ ____.", correctAnswer: "الطَّالِبَةِ" },
                { question: "ملعقةُ ____.", correctAnswer: "الْحَسَاءِ" }
            ]
        },
        majhul: {
            title: "الفعل المعلوم والمجهول",
            questions: [
                { question: "حوّل إلى مجهول: 'فَتَحَ الولدُ البابَ'", correctAnswer: "فُتِحَ البابُ" },
                { question: "حوّل إلى مجهول: 'كَتَبَ التلميذُ الدرسَ'", correctAnswer: "كُتِبَ الدرسُ" },
                { question: "حوّل إلى معلوم: 'سُرِقَ المالُ'", correctAnswer: "سَرَقَ اللِّصُّ المالَ" },
                { question: "حوّل إلى مجهول: 'يَأْكُلُ الطفلُ التفاحةَ'", correctAnswer: "تُؤْكَلُ التفاحةُ" },
                { question: "حوّل إلى معلوم: 'يُباعُ المنزلُ'", correctAnswer: "يَبِيعُ الرَّجُلُ المنزلَ" },
                { question: "حوّل إلى مجهول: 'شَرَى الرجلُ السيارةَ'", correctAnswer: "شُرِيَتِ السيارةُ" },
                { question: "حوّل إلى مجهول: 'نَظَفَ الخادمُ الغرفةَ'", correctAnswer: "نُظِّفَتِ الغرفةُ" },
                { question: "حوّل إلى معلوم: 'أُكْرِمَ الضيفُ'", correctAnswer: "أَكْرَمَنَا الضيفَ" },
                { question: "حوّل إلى مجهول: 'يَطْبُخُ الطاهي الطعامَ'", correctAnswer: "يُطْبَخُ الطعامُ" },
                { question: "حوّل إلى معلوم: 'قُوبِلَ الضيفُ بترحيب'", correctAnswer: "قَابَلْنَا الضيفَ بترحيب" },
                { question: "حوّل إلى مجهول: 'يَسْقِي الفلاحُ الأشجارَ'", correctAnswer: "تُسْقَى الأشجارُ" },
                { question: "حوّل إلى مجهول: 'بَنَى العمالُ الجسرَ'", correctAnswer: "بُنِيَ الجسرُ" },
                { question: "حوّل إلى معلوم: 'وُجِدَ الطفلُ ضائعاً'", correctAnswer: "وَجَدَ الناسُ الطفلَ ضائعاً" },
                { question: "حوّل إلى مجهول: 'يَرْعَى الراعي الغنمَ'", correctAnswer: "تُرْعَى الغنمُ" },
                { question: "حوّل إلى معلوم: 'أُنْقِذَ الرجلُ من الغرق'", correctAnswer: "أَنْقَذَ الغوّاصُ الرجلَ من الغرق" }
            ]
        }
    };

    // --- ELEMEN DOM ---
    const menuSection = document.getElementById('menu-section');
    const quizSection = document.getElementById('quiz-section');
    const resultsSection = document.getElementById('results-section');

    const topicTitle = document.getElementById('topic-title');
    const questionCounter = document.getElementById('question-counter');
    const questionArea = document.getElementById('question-area');
    const feedbackArea = document.getElementById('feedback-area');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    const finalScore = document.getElementById('final-score');
    const answersReview = document.getElementById('answers-review');

    // --- VARIABEL GLOBAL ---
    let currentTopic = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    // --- EVENT LISTENERS ---
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const topicKey = btn.dataset.topic;
            startQuiz(topicKey);
        });
    });

    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', () => {
        resultsSection.classList.remove('active');
        menuSection.classList.add('active');
    });

    // --- FUNGSI-FUNGSI UTAMA ---
    function startQuiz(topicKey) {
        currentTopic = questionBank[topicKey];
        currentQuestions = [...currentTopic.questions];
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];

        topicTitle.textContent = currentTopic.title;
        
        menuSection.classList.remove('active');
        resultsSection.classList.remove('active');
        quizSection.classList.add('active');

        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showResults();
            return;
        }

        const question = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `السؤال ${currentQuestionIndex + 1} من ${currentQuestions.length}`;
        
        questionArea.innerHTML = `
            <p>${question.question.replace('____', '<input type="text" id="answer-input" dir="ltr" autocomplete="off">')}</p>
        `;
        
        feedbackArea.innerHTML = '';
        feedbackArea.className = '';
        checkBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        
        document.getElementById('answer-input').focus();
    }

    function checkAnswer() {
        const userAnswer = document.getElementById('answer-input').value.trim();
        const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

        if (userAnswer === '') {
            feedbackArea.textContent = 'الرجاء كتابة إجابة.';
            feedbackArea.className = 'incorrect';
            return;
        }

        userAnswers.push({
            question: currentQuestions[currentQuestionIndex].question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        });

        if (userAnswer === correctAnswer) {
            score++;
            feedbackArea.textContent = 'أحسنت! إجابة صحيحة.';
            feedbackArea.className = 'correct';
        } else {
            feedbackArea.innerHTML = `إجابة خاطئة. الإجابة الصحيحة هي: <strong>${correctAnswer}</strong>`;
            feedbackArea.className = 'incorrect';
        }
        
        document.getElementById('answer-input').disabled = true;
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizSection.classList.remove('active');
        resultsSection.classList.add('active');

        const percentage = Math.round((score / currentQuestions.length) * 100);
        finalScore.innerHTML = `لقد حصلت على <strong>${score}</strong> من <strong>${currentQuestions.length}</strong> (${percentage}%)`;

        answersReview.innerHTML = '<h3>مراجعة الإجابات:</h3>';
        userAnswers.forEach((answer, index) => {
            const isCorrect = answer.userAnswer === answer.correctAnswer;
            const reviewItem = document.createElement('div');
            reviewItem.className = 'answer-item';
            reviewItem.innerHTML = `
                <p><strong>${index + 1}. ${answer.question.replace('____', '____')}</strong></p>
                <p>إجابتك: <span class="${isCorrect ? 'correct' : 'incorrect'}">${answer.userAnswer}</span></p>
                ${!isCorrect ? `<p>الإجابة الصحيحة: <span class="correct">${answer.correctAnswer}</span></p>` : ''}
            `;
            answersReview.appendChild(reviewItem);
        });
    }
});