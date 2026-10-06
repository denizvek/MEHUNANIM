// מאגר השאלות למבחן מחוננים - כיתה ב'
// כולל שאלות מהקבצים + שאלות נוספות שנוצרו

const QUESTIONS_DATABASE = {
    // קטגוריות
    categories: [
        { id: 'verbal_analogies', name: 'אנלוגיות מילוליות', emoji: '🔤', description: 'מציאת קשר בין מילים' },
        { id: 'visual_analogies', name: 'אנלוגיות צורניות', emoji: '🔷', description: 'מציאת קשר בין צורות' },
        { id: 'word_problems', name: 'בעיות מילוליות', emoji: '📐', description: 'בעיות חשבון בסיפור' },
        { id: 'sequences', name: 'סדרות מספרים', emoji: '🔢', description: 'מציאת החוקיות' },
        { id: 'general_knowledge', name: 'ידע כללי', emoji: '🌍', description: 'שאלות ידע' },
        { id: 'vocabulary', name: 'אוצר מילים', emoji: '📚', description: 'משמעות מילים וביטויים' },
        { id: 'matrices', name: 'מטריצות', emoji: '⬛', description: 'השלמת דפוסים' },
        { id: 'odd_one_out', name: 'יוצא דופן', emoji: '🎯', description: 'מציאת השונה' },
        { id: 'fractions', name: 'שברים והמרות', emoji: '🔢', description: 'חישובים עם שברים' },
        { id: 'mixed', name: 'תרגול מעורב', emoji: '🎲', description: 'מכל הנושאים' }
    ],

    // שאלות
    questions: [
        // ========== אנלוגיות מילוליות ==========
        {
            id: 1,
            category: 'verbal_analogies',
            type: 'text',
            question: 'בית ספר : ללמד = מטבח : _______',
            answers: ['סכינים', 'מנור', 'אוכל', 'לבשל', 'מקרר'],
            correctIndex: 3,
            hint: 'חשוב: מה עושים בבית ספר? ומה עושים במטבח?'
        },
        {
            id: 2,
            category: 'verbal_analogies',
            type: 'text',
            question: 'מצרים : קהיר = סוריה : _______',
            answers: ['לבנון', 'עולם', 'דמשק', 'עמאן'],
            correctIndex: 2,
            hint: 'חשוב: מה הקשר בין מצרים לקהיר? קהיר היא הבירה של מצרים.'
        },
        {
            id: 3,
            category: 'verbal_analogies',
            type: 'text',
            question: 'רופא : בית חולים = מורה : _______',
            answers: ['ספר', 'בית ספר', 'תלמיד', 'לוח'],
            correctIndex: 1,
            hint: 'חשוב: איפה עובד רופא? ואיפה עובד מורה?'
        },
        {
            id: 4,
            category: 'verbal_analogies',
            type: 'text',
            question: 'יום : לילה = קיץ : _______',
            answers: ['חם', 'חורף', 'שמש', 'גשם'],
            correctIndex: 1,
            hint: 'יום ולילה הם הפכים. מה ההפך של קיץ?'
        },
        {
            id: 5,
            category: 'verbal_analogies',
            type: 'text',
            question: 'עין : לראות = אוזן : _______',
            answers: ['לשמוע', 'ראש', 'צליל', 'גוף'],
            correctIndex: 0,
            hint: 'מה עושים עם עין? ומה עושים עם אוזן?'
        },
        {
            id: 6,
            category: 'verbal_analogies',
            type: 'text',
            question: 'ציפור : קן = דג : _______',
            answers: ['מים', 'ים', 'אקווריום', 'סנפיר'],
            correctIndex: 2,
            hint: 'הקן הוא הבית של הציפור. מה הבית של דג?'
        },
        {
            id: 7,
            category: 'verbal_analogies',
            type: 'text',
            question: 'ספר : לקרוא = כדור : _______',
            answers: ['עגול', 'לשחק', 'ילד', 'צבעוני'],
            correctIndex: 1,
            hint: 'מה עושים עם ספר? ומה עושים עם כדור?'
        },
        {
            id: 8,
            category: 'verbal_analogies',
            type: 'text',
            question: 'אריה : שאגה = כלב : _______',
            answers: ['רגל', 'נביחה', 'פרווה', 'זנב'],
            correctIndex: 1,
            hint: 'איזה קול משמיע אריה? ואיזה קול משמיע כלב?'
        },
        {
            id: 9,
            category: 'verbal_analogies',
            type: 'text',
            question: 'עפרון : לכתוב = מספריים : _______',
            answers: ['נייר', 'לגזור', 'חד', 'יד'],
            correctIndex: 1,
            hint: 'מה עושים עם עפרון? ומה עושים עם מספריים?'
        },
        {
            id: 10,
            category: 'verbal_analogies',
            type: 'text',
            question: 'רגל : נעל = יד : _______',
            answers: ['אצבע', 'כפפה', 'זרוע', 'ציפורן'],
            correctIndex: 1,
            hint: 'מה לובשים על הרגל? ומה לובשים על היד?'
        },
        // שאלות חדשות מהתמונות
        {
            id: 11,
            category: 'verbal_analogies',
            type: 'text',
            question: 'מסרק : קרח = אגוזים : _______',
            answers: ['סנאי', 'צעיף', 'לחם', 'חסר שיניים'],
            correctIndex: 3,
            hint: 'מסרק בלי שיניים נראה כמו קרח (חלק). אגוזים בלי שיניים - איך אפשר לפצח?'
        },
        {
            id: 12,
            category: 'verbal_analogies',
            type: 'text',
            question: 'אתון : עיר = לביאה : _______',
            answers: ['ילד', 'בכר', 'כפיר', 'תיש'],
            correctIndex: 2,
            hint: 'אתון היא חמור נקבה, עיר הוא חמור צעיר. לביאה היא אריה נקבה, ומה הצעיר?'
        },
        {
            id: 13,
            category: 'verbal_analogies',
            type: 'text',
            question: 'תפוזים : קוטפים = ענבים : _______',
            answers: ['מיץ', 'בוצרים', 'לימון', 'תמרים'],
            correctIndex: 1,
            hint: 'תפוזים קוטפים, וענבים? יש פועל מיוחד לקטיפת ענבים.'
        },
        {
            id: 14,
            category: 'verbal_analogies',
            type: 'text',
            question: 'תרנגול : קורא = סוס : _______',
            answers: ['פרה', 'הומה', 'צוהל', 'שוחה'],
            correctIndex: 2,
            hint: 'תרנגול קורא (קוקוריקו). איזה קול עושה סוס?'
        },
        {
            id: 15,
            category: 'verbal_analogies',
            type: 'text',
            question: 'ראש השנה : תשרי = פסח : _______',
            answers: ['אביב', 'פסח', 'אדר', 'ניסן'],
            correctIndex: 3,
            hint: 'ראש השנה חל בחודש תשרי. באיזה חודש חל פסח?'
        },
        {
            id: 16,
            category: 'verbal_analogies',
            type: 'text',
            question: 'אח : אחות = דוד : _______',
            answers: ['סבא', 'דודה', 'אבא', 'בן'],
            correctIndex: 1,
            hint: 'אח ואחות הם אותו קשר משפחתי בזכר ונקבה. מה הנקבה של דוד?'
        },
        {
            id: 17,
            category: 'verbal_analogies',
            type: 'text',
            question: 'גשם : מטריה = שמש : _______',
            answers: ['ענן', 'כובע', 'קיץ', 'חם'],
            correctIndex: 1,
            hint: 'מטריה מגינה מגשם. מה מגן מהשמש?'
        },
        {
            id: 18,
            category: 'verbal_analogies',
            type: 'text',
            question: 'ירח : לילה = שמש : _______',
            answers: ['כוכב', 'יום', 'חם', 'אור'],
            correctIndex: 1,
            hint: 'ירח מאיר בלילה, שמש מאירה ב...?'
        },
        {
            id: 19,
            category: 'verbal_analogies',
            type: 'text',
            question: 'מלך : מלכה = נסיך : _______',
            answers: ['נסיכה', 'שר', 'אביר', 'ילד'],
            correctIndex: 0,
            hint: 'מלך ומלכה הם זוג מלכותי. מה הנקבה של נסיך?'
        },
        {
            id: 20,
            category: 'verbal_analogies',
            type: 'text',
            question: 'חלב : פרה = ביצה : _______',
            answers: ['תרנגולת', 'עוף', 'לחם', 'גבינה'],
            correctIndex: 0,
            hint: 'מי נותן חלב? פרה. מי נותן ביצים?'
        },
        {
            id: 21,
            category: 'verbal_analogies',
            type: 'text',
            question: 'צייר : מכחול = נגר : _______',
            answers: ['עץ', 'פטיש', 'שולחן', 'מסמר'],
            correctIndex: 1,
            hint: 'צייר משתמש במכחול לעבודתו. במה משתמש נגר?'
        },
        {
            id: 22,
            category: 'verbal_analogies',
            type: 'text',
            question: 'דבורה : דבש = פרה : _______',
            answers: ['חלב', 'בשר', 'עור', 'קרניים'],
            correctIndex: 0,
            hint: 'דבורה מייצרת דבש. מה פרה נותנת?'
        },
        {
            id: 23,
            category: 'verbal_analogies',
            type: 'text',
            question: 'ארנב : קופץ = נחש : _______',
            answers: ['ארסי', 'זוחל', 'ארוך', 'ירוק'],
            correctIndex: 1,
            hint: 'ארנב קופץ - זו הדרך שהוא נע. איך נחש נע?'
        },
        {
            id: 24,
            category: 'verbal_analogies',
            type: 'text',
            question: 'חורף : קר = קיץ : _______',
            answers: ['שמש', 'חם', 'ים', 'חופש'],
            correctIndex: 1,
            hint: 'בחורף קר. מה מאפיין את הקיץ?'
        },
        {
            id: 25,
            category: 'verbal_analogies',
            type: 'text',
            question: 'תפוח : עץ = גזר : _______',
            answers: ['כתום', 'ירק', 'אדמה', 'גינה'],
            correctIndex: 2,
            hint: 'תפוח גדל על עץ. איפה גדל גזר?'
        },

        // ========== בעיות מילוליות ==========
        {
            id: 101,
            category: 'word_problems',
            type: 'text',
            question: 'חבילת מדבקות עולה 2 שקלים, בכל חבילה 5 מדבקות. עמית קנתה 20 מדבקות, כמה שילמה?',
            answers: ['10 ש"ח', '8 ש"ח', '40 ש"ח', '20 ש"ח'],
            correctIndex: 1,
            hint: 'קודם חשוב: כמה חבילות צריך כדי לקבל 20 מדבקות? (20÷5=4) ואז כפול מחיר חבילה (4×2).'
        },
        {
            id: 102,
            category: 'word_problems',
            type: 'text',
            question: 'לדני יש 15 גולות. הוא נתן לחברו 6 גולות וקיבל מאמא עוד 4. כמה גולות יש לו עכשיו?',
            answers: ['13', '25', '15', '11'],
            correctIndex: 0,
            hint: 'התחל עם 15, הורד 6 (נתן), והוסף 4 (קיבל). 15-6+4=?'
        },
        {
            id: 103,
            category: 'word_problems',
            type: 'text',
            question: 'בכיתה יש 24 תלמידים. מחציתם בנים. כמה בנות יש בכיתה?',
            answers: ['24', '12', '48', '6'],
            correctIndex: 1,
            hint: 'מחצית זה חצי. 24÷2=?'
        },
        {
            id: 104,
            category: 'word_problems',
            type: 'text',
            question: 'קופסת עפרונות מכילה 12 עפרונות. רוני קנה 3 קופסאות. כמה עפרונות יש לו?',
            answers: ['15', '36', '9', '24'],
            correctIndex: 1,
            hint: '3 קופסאות כפול 12 עפרונות בכל קופסה. 3×12=?'
        },
        {
            id: 105,
            category: 'word_problems',
            type: 'text',
            question: 'לשרה יש 30 ש"ח. היא קנתה צעצוע ב-18 ש"ח. כמה כסף נשאר לה?',
            answers: ['48 ש"ח', '12 ש"ח', '18 ש"ח', '30 ש"ח'],
            correctIndex: 1,
            hint: 'מה שהיה פחות מה שקנתה: 30-18=?'
        },
        {
            id: 106,
            category: 'word_problems',
            type: 'text',
            question: 'באוטובוס היו 25 נוסעים. בתחנה ירדו 8 ועלו 5. כמה נוסעים באוטובוס עכשיו?',
            answers: ['38', '22', '17', '30'],
            correctIndex: 1,
            hint: 'התחל עם 25, הורד את מי שירד (8), והוסף את מי שעלה (5). 25-8+5=?'
        },
        {
            id: 107,
            category: 'word_problems',
            type: 'text',
            question: 'אורך מלבן הוא 8 ס"מ ורוחבו 3 ס"מ. מה ההיקף שלו?',
            answers: ['11 ס"מ', '22 ס"מ', '24 ס"מ', '16 ס"מ'],
            correctIndex: 1,
            hint: 'היקף מלבן = 2×(אורך+רוחב) = 2×(8+3) = 2×11 = ?'
        },
        {
            id: 108,
            category: 'word_problems',
            type: 'text',
            question: 'יוסי אסף 45 בולים. הוא חילק אותם שווה בשווה ל-5 אלבומים. כמה בולים בכל אלבום?',
            answers: ['9', '40', '50', '225'],
            correctIndex: 0,
            hint: 'לחלק שווה בשווה = חילוק: 45÷5=?'
        },
        {
            id: 109,
            category: 'word_problems',
            type: 'text',
            question: 'גיל אבא הוא 36 והוא גדול מבנו פי 4. בן כמה הבן?',
            answers: ['32', '40', '9', '144'],
            correctIndex: 2,
            hint: 'אם אבא גדול פי 4, אז גיל הבן הוא 36÷4=?'
        },
        {
            id: 110,
            category: 'word_problems',
            type: 'text',
            question: 'בחנות יש 100 תפוחים. נמכרו 37 בבוקר ו-28 אחר הצהריים. כמה תפוחים נשארו?',
            answers: ['35', '65', '72', '45'],
            correctIndex: 0,
            hint: 'מה שהיה פחות מה שנמכר: 100-37-28=?'
        },
        {
            id: 111,
            category: 'word_problems',
            type: 'text',
            question: 'לתומר יש 56 קלפים. הוא חילק אותם שווה ל-7 חברים. כמה קלפים קיבל כל חבר?',
            answers: ['7', '8', '49', '63'],
            correctIndex: 1,
            hint: '56 קלפים חלקי 7 חברים = ? קלפים לכל חבר'
        },
        {
            id: 112,
            category: 'word_problems',
            type: 'text',
            question: 'ספר עולה 25 ש"ח. מיכל קנתה 4 ספרים וקיבלה הנחה של 10 ש"ח. כמה שילמה?',
            answers: ['100 ש"ח', '90 ש"ח', '110 ש"ח', '85 ש"ח'],
            correctIndex: 1,
            hint: '4 ספרים × 25 ש"ח = 100 ש"ח. פחות הנחה של 10 ש"ח = ?'
        },
        {
            id: 113,
            category: 'word_problems',
            type: 'text',
            question: 'רכבת יוצאת ב-8:30 ומגיעה ליעד אחרי שעתיים וחצי. מתי היא מגיעה?',
            answers: ['10:30', '11:00', '10:00', '11:30'],
            correctIndex: 1,
            hint: '8:30 + 2 שעות = 10:30. + עוד חצי שעה = ?'
        },
        {
            id: 114,
            category: 'word_problems',
            type: 'text',
            question: 'בקופסה יש 72 סוכריות. חילקו אותן שווה ל-8 ילדים. כמה סוכריות קיבל כל ילד?',
            answers: ['8', '9', '64', '80'],
            correctIndex: 1,
            hint: '72÷8=?'
        },
        {
            id: 115,
            category: 'word_problems',
            type: 'text',
            question: 'אורי קנה 3 מחברות ב-6 ש"ח כל אחת ו-2 עפרונות ב-3 ש"ח כל אחד. כמה שילם?',
            answers: ['24 ש"ח', '18 ש"ח', '21 ש"ח', '27 ש"ח'],
            correctIndex: 0,
            hint: 'מחברות: 3×6=18. עפרונות: 2×3=6. סה"כ: 18+6=?'
        },

        // ========== שברים והמרות ==========
        {
            id: 151,
            category: 'fractions',
            type: 'text',
            question: 'הדרך לבית הספר ברכיבה על אופניים אורכת ½ שעה, הדרך באוטובוס אורכת 20 דקות. כמה זמן יחסוך דן אם יסע באוטובוס?',
            answers: ['15 דקות', 'אין הבדל', '2 דקות', '10 דקות'],
            correctIndex: 3,
            hint: '½ שעה = 30 דקות. ההפרש: 30-20 = ?'
        },
        {
            id: 152,
            category: 'fractions',
            type: 'text',
            question: 'כדי לעלות לרכבת ההרים צריך להיות בגובה של 1 מטר ו-30 ס"מ לפחות. הגובה של יואבי הוא 95 ס"מ. כמה ס"מ חסרים לו?',
            answers: ['40', '35', '30', '90'],
            correctIndex: 1,
            hint: '1 מטר = 100 ס"מ. אז 1.30 מטר = 130 ס"מ. חסר: 130-95=?'
        },
        {
            id: 153,
            category: 'fractions',
            type: 'text',
            question: 'מחיר ½ קילוגרם שוקולד 20 שקלים. מה המחיר של 4 קילוגרמים שוקולד?',
            answers: ['80 ש"ח', '100 ש"ח', '180 ש"ח', '160 ש"ח'],
            correctIndex: 3,
            hint: 'אם ½ ק"ג = 20₪, אז 1 ק"ג = 40₪. ו-4 ק"ג = ?'
        },
        {
            id: 154,
            category: 'fractions',
            type: 'text',
            question: 'כדי להכין 60 פנקייקים צריך 2 קילוגרמים קמח. לקרן יש 700 גרם קמח. כמה גרמים חסרים לה?',
            answers: ['1 ק"ג', '1,300 גרם', '10 גרם', '1,400 גרם'],
            correctIndex: 1,
            hint: '2 ק"ג = 2000 גרם. חסר: 2000-700=?'
        },
        {
            id: 155,
            category: 'fractions',
            type: 'text',
            question: 'לדני יש 2 מטר של חוט. הוא השתמש ב-80 ס"מ. כמה נשאר לו?',
            answers: ['120 ס"מ', '180 ס"מ', '20 ס"מ', '280 ס"מ'],
            correctIndex: 0,
            hint: '2 מטר = 200 ס"מ. נשאר: 200-80=?'
        },
        {
            id: 156,
            category: 'fractions',
            type: 'text',
            question: 'עוגה חולקה ל-8 חלקים שווים. אכלו 3 חלקים. איזה חלק מהעוגה נאכל?',
            answers: ['⅜', '⅝', '⅓', '⅛'],
            correctIndex: 0,
            hint: 'אכלו 3 חלקים מתוך 8. זה שבר של 3 על 8.'
        },
        {
            id: 157,
            category: 'fractions',
            type: 'text',
            question: 'שליש מ-24 הוא:',
            answers: ['6', '8', '12', '3'],
            correctIndex: 1,
            hint: 'שליש = חילוק ב-3. 24÷3=?'
        },
        {
            id: 158,
            category: 'fractions',
            type: 'text',
            question: 'רבע שעה זה כמה דקות?',
            answers: ['25', '20', '15', '10'],
            correctIndex: 2,
            hint: 'שעה = 60 דקות. רבע = חלקי 4. 60÷4=?'
        },

        // ========== סדרות מספרים ==========
        {
            id: 201,
            category: 'sequences',
            type: 'text',
            question: '1, 5, 2, 6, 3, __',
            answers: ['7', '1', '10', '15'],
            correctIndex: 0,
            hint: 'יש כאן שתי סדרות משולבות: 1,2,3... ו-5,6,?...'
        },
        {
            id: 202,
            category: 'sequences',
            type: 'text',
            question: '2, 4, 6, 8, __',
            answers: ['9', '10', '12', '14'],
            correctIndex: 1,
            hint: 'סדרה של מספרים זוגיים. כל פעם מוסיפים 2.'
        },
        {
            id: 203,
            category: 'sequences',
            type: 'text',
            question: '1, 4, 9, 16, __',
            answers: ['20', '25', '24', '36'],
            correctIndex: 1,
            hint: 'אלה מספרים ריבועיים: 1², 2², 3², 4², 5²=?'
        },
        {
            id: 204,
            category: 'sequences',
            type: 'text',
            question: '3, 6, 12, 24, __',
            answers: ['30', '36', '48', '72'],
            correctIndex: 2,
            hint: 'כל מספר כפול 2 מהקודם. 24×2=?'
        },
        {
            id: 205,
            category: 'sequences',
            type: 'text',
            question: '100, 90, 80, 70, __',
            answers: ['50', '60', '65', '75'],
            correctIndex: 1,
            hint: 'סדרה יורדת, כל פעם מורידים 10.'
        },
        {
            id: 206,
            category: 'sequences',
            type: 'text',
            question: '1, 1, 2, 3, 5, 8, __',
            answers: ['10', '11', '13', '15'],
            correctIndex: 2,
            hint: 'זו סדרת פיבונאצ\'י: כל מספר הוא סכום שני הקודמים. 5+8=?'
        },
        {
            id: 207,
            category: 'sequences',
            type: 'text',
            question: '5, 10, 15, 20, __',
            answers: ['22', '25', '30', '35'],
            correctIndex: 1,
            hint: 'לוח הכפל של 5: 5×1, 5×2, 5×3, 5×4, 5×5=?'
        },
        {
            id: 208,
            category: 'sequences',
            type: 'text',
            question: '1, 2, 4, 7, 11, __',
            answers: ['14', '15', '16', '18'],
            correctIndex: 2,
            hint: 'ההפרשים גדלים: +1, +2, +3, +4, +5. אז 11+5=?'
        },
        {
            id: 209,
            category: 'sequences',
            type: 'text',
            question: '81, 27, 9, 3, __',
            answers: ['0', '1', '2', '6'],
            correctIndex: 1,
            hint: 'כל מספר מחולק ב-3. 3÷3=?'
        },
        {
            id: 210,
            category: 'sequences',
            type: 'text',
            question: '2, 3, 5, 7, 11, __',
            answers: ['12', '13', '14', '15'],
            correctIndex: 1,
            hint: 'אלה מספרים ראשוניים (מתחלקים רק ב-1 ובעצמם). המספר הראשוני הבא אחרי 11 הוא?'
        },
        {
            id: 211,
            category: 'sequences',
            type: 'text',
            question: '50, 45, 40, 35, __',
            answers: ['25', '30', '20', '40'],
            correctIndex: 1,
            hint: 'סדרה יורדת, כל פעם מורידים 5. 35-5=?'
        },
        {
            id: 212,
            category: 'sequences',
            type: 'text',
            question: '1, 3, 6, 10, 15, __',
            answers: ['18', '20', '21', '25'],
            correctIndex: 2,
            hint: 'ההפרשים: +2, +3, +4, +5, +6. אז 15+6=?'
        },
        {
            id: 213,
            category: 'sequences',
            type: 'text',
            question: '64, 32, 16, 8, __',
            answers: ['2', '4', '6', '0'],
            correctIndex: 1,
            hint: 'כל מספר מתחלק ב-2. 8÷2=?'
        },
        {
            id: 214,
            category: 'sequences',
            type: 'text',
            question: '7, 14, 21, 28, __',
            answers: ['32', '35', '42', '30'],
            correctIndex: 1,
            hint: 'לוח הכפל של 7: 7×1, 7×2, 7×3, 7×4, 7×5=?'
        },
        {
            id: 215,
            category: 'sequences',
            type: 'text',
            question: '1, 2, 4, 8, 16, __',
            answers: ['20', '24', '32', '64'],
            correctIndex: 2,
            hint: 'כל מספר כפול 2 מהקודם. 16×2=?'
        },

        // ========== ידע כללי ==========
        {
            id: 301,
            category: 'general_knowledge',
            type: 'text',
            question: 'מיהו המלחין אשר הלחין אף שהיה חרש?',
            answers: ['לודוויג ואן בטהובן', 'לאונרדו דה וינצ\'י', 'וולפגנג אמדאוס מוצרט', 'יוזף היידן'],
            correctIndex: 0,
            hint: 'מלחין גרמני מפורסם שאיבד את שמיעתו אבל המשיך להלחין יצירות מופת.'
        },
        {
            id: 302,
            category: 'general_knowledge',
            type: 'text',
            question: 'מהו כוכב הלכת הגדול ביותר במערכת השמש?',
            answers: ['מאדים', 'שבתאי', 'צדק', 'נפטון'],
            correctIndex: 2,
            hint: 'כוכב לכת ענק עם כתם אדום גדול.'
        },
        {
            id: 303,
            category: 'general_knowledge',
            type: 'text',
            question: 'כמה ימים יש בשנה מעוברת?',
            answers: ['365', '366', '364', '360'],
            correctIndex: 1,
            hint: 'בשנה רגילה יש 365 ימים. בשנה מעוברת מוסיפים יום אחד.'
        },
        {
            id: 304,
            category: 'general_knowledge',
            type: 'text',
            question: 'איזה חג חוגגים בט"ו בשבט?',
            answers: ['חג האורים', 'ראש השנה לאילנות', 'חג הפסח', 'יום העצמאות'],
            correctIndex: 1,
            hint: 'בחג הזה נוהגים לשתול עצים ולאכול פירות יבשים.'
        },
        {
            id: 305,
            category: 'general_knowledge',
            type: 'text',
            question: 'מה שם בירת צרפת?',
            answers: ['לונדון', 'רומא', 'פריז', 'ברלין'],
            correctIndex: 2,
            hint: 'עיר שבה נמצא מגדל אייפל.'
        },
        {
            id: 306,
            category: 'general_knowledge',
            type: 'text',
            question: 'כמה צבעים יש בקשת בענן?',
            answers: ['5', '6', '7', '8'],
            correctIndex: 2,
            hint: 'אדום, כתום, צהוב, ירוק, כחול, כחול כהה, סגול.'
        },
        {
            id: 307,
            category: 'general_knowledge',
            type: 'text',
            question: 'איזה חיה היא החיה היבשתית המהירה בעולם?',
            answers: ['אריה', 'ברדלס', 'סוס', 'יען'],
            correctIndex: 1,
            hint: 'חתול גדול עם נקודות שחורות שחי באפריקה.'
        },
        {
            id: 308,
            category: 'general_knowledge',
            type: 'text',
            question: 'מהו האיבר הגדול ביותר בגוף האדם?',
            answers: ['הלב', 'המוח', 'העור', 'הכבד'],
            correctIndex: 2,
            hint: 'האיבר הזה מכסה את כל הגוף מבחוץ.'
        },
        {
            id: 309,
            category: 'general_knowledge',
            type: 'text',
            question: 'באיזו שנה קמה מדינת ישראל?',
            answers: ['1945', '1948', '1950', '1967'],
            correctIndex: 1,
            hint: 'מדינת ישראל הוכרזה על ידי דוד בן גוריון ב-14 במאי.'
        },
        {
            id: 310,
            category: 'general_knowledge',
            type: 'text',
            question: 'מה שם הנהר הארוך בעולם?',
            answers: ['הנילוס', 'האמזונס', 'הירדן', 'המיסיסיפי'],
            correctIndex: 0,
            hint: 'נהר שזורם באפריקה ועובר דרך מצרים.'
        },
        {
            id: 311,
            category: 'general_knowledge',
            type: 'text',
            question: 'כמה יבשות יש בעולם?',
            answers: ['5', '6', '7', '8'],
            correctIndex: 2,
            hint: 'אסיה, אפריקה, צפון אמריקה, דרום אמריקה, אירופה, אוסטרליה, ו...'
        },
        {
            id: 312,
            category: 'general_knowledge',
            type: 'text',
            question: 'איזה כוכב לכת הכי קרוב לשמש?',
            answers: ['נוגה', 'כוכב חמה', 'מאדים', 'כדור הארץ'],
            correctIndex: 1,
            hint: 'הכוכב הקטן ביותר והקרוב ביותר לשמש.'
        },
        {
            id: 313,
            category: 'general_knowledge',
            type: 'text',
            question: 'מה שם ההר הגבוה בעולם?',
            answers: ['קילימנג\'רו', 'אוורסט', 'מון בלאן', 'החרמון'],
            correctIndex: 1,
            hint: 'נמצא בין נפאל לטיבט, גובהו מעל 8,800 מטר.'
        },
        {
            id: 314,
            category: 'general_knowledge',
            type: 'text',
            question: 'כמה שיניים יש לאדם מבוגר?',
            answers: ['28', '30', '32', '36'],
            correctIndex: 2,
            hint: 'כולל שיני בינה (4 שיניים).'
        },
        {
            id: 315,
            category: 'general_knowledge',
            type: 'text',
            question: 'מה השפה הנפוצה ביותר בעולם?',
            answers: ['אנגלית', 'סינית', 'ספרדית', 'ערבית'],
            correctIndex: 1,
            hint: 'השפה של המדינה עם הכי הרבה אנשים בעולם.'
        },

        // ========== אוצר מילים ==========
        {
            id: 351,
            category: 'vocabulary',
            type: 'text',
            question: 'מה המשמעות של הביטוי "קשה עורף"?',
            answers: ['עקשן', 'שמח', 'כועס', 'מרדן'],
            correctIndex: 0,
            hint: 'אדם שלא מוותר ולא משנה את דעתו.'
        },
        {
            id: 352,
            category: 'vocabulary',
            type: 'text',
            question: '"חמה" היא מילה נרדפת ל:',
            answers: ['ירח', 'זעה', 'כוכבים', 'שמש'],
            correctIndex: 3,
            hint: 'מילה עברית ישנה לגוף שמיימי שמאיר ומחמם.'
        },
        {
            id: 353,
            category: 'vocabulary',
            type: 'text',
            question: 'מה ההפך של "ענק"?',
            answers: ['גדול', 'זעיר', 'רחב', 'כבד'],
            correctIndex: 1,
            hint: 'ענק = גדול מאוד. מה קטן מאוד?'
        },
        {
            id: 354,
            category: 'vocabulary',
            type: 'text',
            question: 'מה המשמעות של "מהיר"?',
            answers: ['איטי', 'זריז', 'כבד', 'שקט'],
            correctIndex: 1,
            hint: 'מהיר = עושה דברים מהר = ?'
        },
        {
            id: 355,
            category: 'vocabulary',
            type: 'text',
            question: '"ספרן" הוא אדם שעובד ב:',
            answers: ['מספרה', 'ספרייה', 'מכולת', 'בנק'],
            correctIndex: 1,
            hint: 'ספרן קשור לספרים. איפה יש הרבה ספרים?'
        },
        {
            id: 356,
            category: 'vocabulary',
            type: 'text',
            question: 'מה ההפך של "צר"?',
            answers: ['קטן', 'רחב', 'ארוך', 'נמוך'],
            correctIndex: 1,
            hint: 'צר = לא רחב. מה ההפך?'
        },
        {
            id: 357,
            category: 'vocabulary',
            type: 'text',
            question: '"תלמיד חרוץ" הוא תלמיד ש:',
            answers: ['עצלן', 'משחק הרבה', 'לומד ועובד קשה', 'ישן בכיתה'],
            correctIndex: 2,
            hint: 'חרוץ = עובד קשה, מתאמץ.'
        },
        {
            id: 358,
            category: 'vocabulary',
            type: 'text',
            question: 'מה המשמעות של "שביל"?',
            answers: ['כביש רחב', 'דרך צרה', 'בניין', 'גן'],
            correctIndex: 1,
            hint: 'דרך קטנה להליכה, לא לנסיעה.'
        },
        {
            id: 359,
            category: 'vocabulary',
            type: 'text',
            question: '"זקן" הוא ההפך של:',
            answers: ['ילד', 'צעיר', 'גבוה', 'שמן'],
            correctIndex: 1,
            hint: 'זקן = מבוגר. מה ההפך?'
        },
        {
            id: 360,
            category: 'vocabulary',
            type: 'text',
            question: 'מה המשמעות של הביטוי "יד ימינו"?',
            answers: ['אויב', 'עוזר נאמן', 'שכן', 'מורה'],
            correctIndex: 1,
            hint: 'מישהו שעוזר לנו בכל דבר, שסומכים עליו.'
        },

        // ========== יוצא דופן ==========
        {
            id: 401,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך לקבוצה? כלב, חתול, ציפור, דג, שולחן',
            answers: ['כלב', 'חתול', 'ציפור', 'דג', 'שולחן'],
            correctIndex: 4,
            hint: 'ארבעה מהם הם יצורים חיים. אחד הוא חפץ.'
        },
        {
            id: 402,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? תפוח, בננה, גזר, ענבים, אבטיח',
            answers: ['תפוח', 'בננה', 'גזר', 'ענבים', 'אבטיח'],
            correctIndex: 2,
            hint: 'ארבעה מהם הם פירות. אחד הוא ירק.'
        },
        {
            id: 403,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? אדום, כחול, ירוק, גדול, צהוב',
            answers: ['אדום', 'כחול', 'ירוק', 'גדול', 'צהוב'],
            correctIndex: 3,
            hint: 'ארבעה מהם הם צבעים. אחד מתאר גודל.'
        },
        {
            id: 404,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? 2, 4, 6, 7, 8',
            answers: ['2', '4', '6', '7', '8'],
            correctIndex: 3,
            hint: 'ארבעה מהם הם מספרים זוגיים. אחד הוא אי-זוגי.'
        },
        {
            id: 405,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? ינואר, פברואר, שני, מרץ, אפריל',
            answers: ['ינואר', 'פברואר', 'שני', 'מרץ', 'אפריל'],
            correctIndex: 2,
            hint: 'ארבעה הם שמות חודשים. אחד הוא שם של יום בשבוע.'
        },
        {
            id: 406,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? מכונית, אוטובוס, רכבת, עץ, אופניים',
            answers: ['מכונית', 'אוטובוס', 'רכבת', 'עץ', 'אופניים'],
            correctIndex: 3,
            hint: 'ארבעה הם כלי תחבורה. אחד הוא צמח.'
        },
        {
            id: 407,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? כף, מזלג, סכין, כוס, ספר',
            answers: ['כף', 'מזלג', 'סכין', 'כוס', 'ספר'],
            correctIndex: 4,
            hint: 'ארבעה הם כלי אוכל. אחד הוא לקריאה.'
        },
        {
            id: 408,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? עין, אוזן, אף, יד, פה',
            answers: ['עין', 'אוזן', 'אף', 'יד', 'פה'],
            correctIndex: 3,
            hint: 'ארבעה הם איברים בפנים. אחד הוא איבר בגוף אבל לא בפנים.'
        },
        {
            id: 409,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? משולש, ריבוע, עיגול, מלבן, שמש',
            answers: ['משולש', 'ריבוע', 'עיגול', 'מלבן', 'שמש'],
            correctIndex: 4,
            hint: 'ארבעה הם צורות גיאומטריות. אחד הוא גוף שמיימי.'
        },
        {
            id: 410,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? פסנתר, גיטרה, כינור, חליל, טלוויזיה',
            answers: ['פסנתר', 'גיטרה', 'כינור', 'חליל', 'טלוויזיה'],
            correctIndex: 4,
            hint: 'ארבעה הם כלי נגינה. אחד הוא מכשיר חשמלי.'
        },
        {
            id: 411,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? ורד, שושנה, צבעוני, כלב, חמנייה',
            answers: ['ורד', 'שושנה', 'צבעוני', 'כלב', 'חמנייה'],
            correctIndex: 3,
            hint: 'ארבעה הם פרחים. אחד הוא חיה.'
        },
        {
            id: 412,
            category: 'odd_one_out',
            type: 'text',
            question: 'מה לא שייך? ראשון, שני, שלישי, ארבע, רביעי',
            answers: ['ראשון', 'שני', 'שלישי', 'ארבע', 'רביעי'],
            correctIndex: 3,
            hint: 'ארבעה הם מספרים סודרים. אחד הוא מספר רגיל.'
        },

        // ========== אנלוגיות צורניות (תיאור טקסטואלי) ==========
        {
            id: 501,
            category: 'visual_analogies',
            type: 'visual_text',
            question: 'ריבוע גדול כחול : ריבוע קטן כחול = עיגול גדול אדום : ?',
            answers: ['עיגול גדול כחול', 'עיגול קטן אדום', 'ריבוע קטן אדום', 'עיגול גדול אדום'],
            correctIndex: 1,
            hint: 'הקשר: צורה גדולה הופכת לאותה צורה בקטן, הצבע נשאר.'
        },
        {
            id: 502,
            category: 'visual_analogies',
            type: 'visual_text',
            question: 'משולש פונה למעלה : משולש פונה למטה = חץ ימינה : ?',
            answers: ['חץ למעלה', 'חץ שמאלה', 'חץ למטה', 'עיגול'],
            correctIndex: 1,
            hint: 'הקשר: הכיוון מתהפך. מעלה→למטה, אז ימינה→?'
        },
        {
            id: 503,
            category: 'visual_analogies',
            type: 'visual_text',
            question: 'צורה מלאה : צורה ריקה (מתאר בלבד) = ריבוע מלא : ?',
            answers: ['ריבוע מלא גדול', 'עיגול ריק', 'ריבוע ריק', 'משולש מלא'],
            correctIndex: 2,
            hint: 'הקשר: צורה מלאה הופכת לריקה (רק מתאר).'
        },
        {
            id: 504,
            category: 'visual_analogies',
            type: 'visual_text',
            question: 'עיגול אחד : שני עיגולים = משולש אחד : ?',
            answers: ['שלושה משולשים', 'שני משולשים', 'משולש גדול', 'ריבוע'],
            correctIndex: 1,
            hint: 'הקשר: הכמות מוכפלת. 1→2.'
        },
        {
            id: 505,
            category: 'visual_analogies',
            type: 'visual_text',
            question: 'כוכב לבן : כוכב שחור = לב לבן : ?',
            answers: ['לב אדום', 'לב שחור', 'כוכב לבן', 'עיגול שחור'],
            correctIndex: 1,
            hint: 'הקשר: הצבע משתנה מלבן לשחור.'
        },

        // ========== מטריצות (תיאור טקסטואלי) ==========
        {
            id: 601,
            category: 'matrices',
            type: 'visual_text',
            question: 'במטריצה 3×3: בכל שורה יש לב, ריבוע ועיגול. בכל שורה הצבעים הם כחול, צהוב ולבן. מה חסר בתא האחרון אם יש כבר לב כחול ועיגול צהוב?',
            answers: ['לב צהוב', 'ריבוע לבן', 'עיגול כחול', 'ריבוע צהוב'],
            correctIndex: 1,
            hint: 'בשורה יש לב ועיגול - חסר ריבוע. יש כחול וצהוב - חסר לבן.'
        },
        {
            id: 602,
            category: 'matrices',
            type: 'visual_text',
            question: 'במטריצה 2×2: בפינה עליונה שמאלית יש עיגול, בפינה עליונה ימנית יש ריבוע, בפינה תחתונה שמאלית יש ריבוע. מה בפינה תחתונה ימנית?',
            answers: ['ריבוע', 'משולש', 'עיגול', 'מעוין'],
            correctIndex: 2,
            hint: 'חפש את הדפוס: באלכסון יש אותה צורה.'
        },
        {
            id: 603,
            category: 'matrices',
            type: 'visual_text',
            question: 'בכל שורה יש: גדול, בינוני, קטן. בכל עמודה יש: עיגול, ריבוע, משולש. מה הצורה הגדולה בעמודה של המשולשים?',
            answers: ['עיגול גדול', 'ריבוע גדול', 'משולש גדול', 'משולש קטן'],
            correctIndex: 2,
            hint: 'בעמודה של המשולשים - כל הצורות הן משולשים. הגדול הוא משולש גדול.'
        },
        {
            id: 604,
            category: 'matrices',
            type: 'visual_text',
            question: 'בסדרה של צורות: הצורה מסתובבת 90 מעלות בכל פעם. אם התחלנו עם משולש שמצביע למעלה, לאן הוא יצביע אחרי 3 סיבובים?',
            answers: ['למעלה', 'למטה', 'ימינה', 'שמאלה'],
            correctIndex: 3,
            hint: 'סיבוב 1: ימינה. סיבוב 2: למטה. סיבוב 3: שמאלה.'
        }
    ]
};

// פונקציה להחזרת שאלות לפי קטגוריה
function getQuestionsByCategory(categoryId) {
    if (categoryId === 'mixed') {
        return QUESTIONS_DATABASE.questions;
    }
    return QUESTIONS_DATABASE.questions.filter(q => q.category === categoryId);
}

// פונקציה להחזרת שאלות רנדומליות
function getRandomQuestions(categoryId, count) {
    const questions = getQuestionsByCategory(categoryId);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ייצוא
window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
window.getQuestionsByCategory = getQuestionsByCategory;
window.getRandomQuestions = getRandomQuestions;

console.log(`📚 נטענו ${QUESTIONS_DATABASE.questions.length} שאלות מ-${QUESTIONS_DATABASE.categories.length} קטגוריות`);
