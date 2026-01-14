// Quiz data
        const quizData = {
            general: [
                { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
                { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
                { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correct: 1 },
                { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3 },
                { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
                { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
                { question: "Which element has the chemical symbol 'Au'?", options: ["Silver", "Gold", "Copper", "Aluminum"], correct: 1 },
                { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
                { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 2 },
                { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
                { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"], correct: 0 },
                { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Thailand", "Japan", "South Korea"], correct: 2 },
                { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
                { question: "How many bones are in the human body?", options: ["186", "206", "226", "246"], correct: 1 },
                { question: "What is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: 1 },
                { question: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"], correct: 2 },
                { question: "What is the national language of Brazil?", options: ["Spanish", "Portuguese", "French", "English"], correct: 1 },
                { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
                { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 },
                { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
                { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3 },
                { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correct: 1 },
                { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
                { question: "Which ocean is the deepest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
                { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
                { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], correct: 2 },
                { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
                { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3 },
                { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
                { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"], correct: 1 }
            ],
            aptitude: [
                { question: "What is the next number: 5, 10, 20, 40, ?", options: ["45", "60", "80", "100"], correct: 2 },
                { question: "If 2 pencils cost ₹8, what is the cost of 10 pencils?", options: ["₹20", "₹30", "₹40", "₹50"], correct: 2 },
                { question: "A train covers 60 km in 1 hour. How far in 30 minutes?", options: ["20 km", "25 km", "30 km", "40 km"], correct: 2 },
                { question: "Which number is missing: 1, 4, 9, 16, ?", options: ["20", "24", "25", "30"], correct: 2 },
                { question: "If today is Monday, what day after 10 days?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], correct: 1 },
                { question: "Simple interest of ₹1000 at 10% for 1 year?", options: ["₹50", "₹100", "₹150", "₹200"], correct: 1 },
                { question: "Which is the odd one out?", options: ["2", "4", "6", "9"], correct: 3 },
                { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2 },
                { question: "A man buys for ₹100 and sells for ₹120. Profit %?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
                { question: "LCM of 4 and 6?", options: ["8", "10", "12", "14"], correct: 2 },
                { question: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
                { question: "Speed = ?", options: ["Distance × Time", "Distance / Time", "Time / Distance", "None"], correct: 1 },
                { question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: 1 },
                { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
                { question: "What is square root of 144?", options: ["10", "11", "12", "13"], correct: 2 }
            ],
            ReactBasics:[
                { question: "React is a ___?", options: ["Framework", "Library", "Language", "Database"], correct: 1 },
                { question: "useState is a ___?", options: ["Class", "Hook", "API", "Component"], correct: 1 },
                { question: "JSX compiles to?", options: ["HTML", "JS", "JS Objects", "CSS"], correct: 2 },
                { question: "React uses ___ DOM", options: ["Real", "Virtual", "Shadow", "Fake"], correct: 1 },
                { question: "Props are ___?", options: ["Mutable", "Immutable", "Optional", "Private"], correct: 1 },
                { question: "Which hook handles lifecycle?", options: ["useState", "useEffect", "useRef", "useMemo"], correct: 1 },
                { question: "Key is used in?", options: ["Forms", "Lists", "Hooks", "CSS"], correct: 1 },
                { question: "State update is ___?", options: ["Sync", "Async", "Immediate", "Blocking"], correct: 1 },
                { question: "Which is correct component?", options: ["function App()", "component App()", "new App()", "class App"], correct: 0 },
                { question: "React created by?", options: ["Google", "Meta", "Microsoft", "Amazon"], correct: 1 },
                { question: "Default port for React?", options: ["3000", "8000", "5000", "4200"], correct: 0 },
                { question: "Props flow direction?", options: ["Child → Parent", "Parent → Child", "Both", "None"], correct: 1 },
                { question: "Which hook stores DOM ref?", options: ["useEffect", "useRef", "useMemo", "useState"], correct: 1 },
                { question: "React file extension?", options: [".js", ".jsx", ".react", ".tsx"], correct: 1 },
                { question: "Conditional rendering uses?", options: ["if", "loops", "ternary", "switch"], correct: 2 }
            ],
            iplquiz: [
                { question: "Which team won IPL 2024?", options: ["CSK", "SRH", "KKR", "RR"], correct: 2 },
                { question: "Who is called 'Captain Cool'?", options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "KL Rahul"], correct: 2 },
                { question: "Which team has won most IPL titles?", options: ["CSK", "MI", "KKR", "RCB"], correct: 1 },
                { question: "Which team is based in Chennai?", options: ["MI", "CSK", "SRH", "GT"], correct: 1 },
                { question: "Orange Cap is given to which player?", options: ["Best Bowler", "Best Fielder", "Highest Run Scorer", "Best All-rounder"], correct: 2 },
                { question: "Purple Cap is given to which player?", options: ["Most Sixes", "Best Captain", "Highest Wicket Taker", "Best Catch"], correct: 2 },
                { question: "Which team has never won IPL?", options: ["RR", "GT", "RCB", "SRH"], correct: 0 },
                { question: "Who is known as 'King Kohli'?", options: ["Rohit Sharma", "Virat Kohli", "Dhawan", "Pant"], correct: 1 },
                { question: "IPL started in which year?", options: ["2006", "2007", "2008", "2009"], correct: 2 },
                { question: "Which team does MS Dhoni play for?", options: ["MI", "RCB", "CSK", "KKR"], correct: 2 },
                { question: "Which franchise is from Hyderabad?", options: ["DC", "SRH", "PBKS", "LSG"], correct: 1 },
                { question: "Most expensive IPL player 2024 auction?", options: ["Hardik Pandya", "Mitchell Starc", "Sam Curran", "Ben Stokes"], correct: 1 },
                { question: "Which stadium is CSK's home ground?", options: ["Wankhede", "Chepauk", "Eden Gardens", "Chinnaswamy"], correct: 1 },
                { question: "Who won Orange Cap in IPL 2024?", options: ["Virat Kohli", "Ruturaj Gaikwad", "Shubman Gill", "Travis Head"], correct: 0 },
                { question: "IPL is conducted by whom?", options: ["ICC", "BCCI", "ACC", "PCB"], correct: 1 }
                ],
            tamilmovies:[
                { question: "Who is called Thala in tamil cinema?", options: ["Vijay", "Ajith", "Rajini", "Suriya"], correct: 1 },
                { question: "who isDirector of 'Enthiran'?", options: ["Mani Ratnam", "Shankar", "Lokesh", "Vetrimaaran"], correct: 1 },
                { question: "First Tamil talkie movie?", options: ["Kalidas", "Chandralekha", "Mayabazar", "Andhra Kesari"], correct: 0 },
                { question: "Music director of 'Roja'?", options: ["Ilayaraja", "ARR", "Yuvan", "GV"], correct: 1 },
                { question: "Actor in 'Vikram' 2022?", options: ["Vijay", "Ajith", "Kamal", "Dhanush"], correct: 2 },
                { question: "Who is Superstar?", options: ["Kamal", "Vijay", "Ajith", "Rajini"], correct: 3 },
                { question: "Which is Lokesh Cinematic Universe movie?", options: ["Master", "Leo", "Ghajini", "Ghilli"], correct: 1 },
                { question: "Which Debut movie of Vijay?", options: ["Poove Unakkaga", "Naalaiya Theerpu", "Ghilli", "Thuppakki"], correct: 1 },
                { question: "Who directed 'Jai Bhim'?", options: ["Pa Ranjith", "TJ Gnanavel", "Shankar", "Atlee"], correct: 1 },
                { question: "Who composed 'Why This Kolaveri'?", options: ["ARR", "Anirudh", "Yuvan", "GV"], correct: 1 },
                { question: "Movie based on Jallikattu?", options: ["Asuran", "Karnan", "Visaranai", "Kaala"], correct: 1 },
                { question: "Which actor is called 'Ilaya Thalapathy'?", options: ["Vijay", "Ajith", "Simbu", "Dhanush"], correct: 0 },
                { question: "First 1000 crore Tamil movie?", options: ["2.0", "Baahubali", "Leo", "Jailer"], correct: 0 },
                { question: "Who played role of Rolex?", options: ["Vijay", "Suriya", "Karthi", "VJS"], correct: 1 },
                { question: "Movie 'Asuran' is based on?", options: ["Novel", "True Story", "Remake", "Biography"], correct: 0 }
            ],
            TamilHistory: [
                { question: "Which is Capital of Chola dynasty?", options: ["Madurai", "Uraiyur", "Kanchi", "Thanjavur"], correct: 3 },
                { question: "Who is the Author of Thirukkural?", options: ["Ilango", "Avvaiyar", "Thiruvalluvar", "Kambar"], correct: 2 },
                { question: "The Sangam age related to?", options: ["Literature", "War", "Trade", "Science"], correct: 0 },
                { question: "Brihadeeswarar built by whom?", options: ["Rajendra", "Rajaraja", "Karikala", "Vijayalaya"], correct: 1 },
                { question: "Capital of Pandya?", options: ["Madurai", "Kanchi", "Poompuhar", "Uraiyur"], correct: 0 },
                { question: "Silappathikaram written by?", options: ["Kambar", "Ilango", "Thiruvalluvar", "Avvai"], correct: 1 },
                { question: "Which is Chera symbol?", options: ["Tiger", "Fish", "Bow", "Horse"], correct: 2 },
                { question: "Sangam held in?", options: ["Madurai", "Chennai", "Trichy", "Salem"], correct: 0 },
                { question: "Oldest Tamil epic?", options: ["Kural", "Silappathikaram", "Manimekalai", "Purananuru"], correct: 1 },
                { question: "Karikala known for?", options: ["Temple", "Dam", "Poem", "War"], correct: 1 },
                { question: "Chola navy strong in?", options: ["Land", "Sea", "Air", "Trade"], correct: 1 },
                { question: "Which is Capital of Pallavas?", options: ["Madurai", "Kanchi", "Tanjore", "Trichy"], correct: 1 },
                { question: "Sangam poems count?", options: ["18", "10", "12", "8"], correct: 0 },
                { question: "Tamil Brahmi used in?", options: ["Coins", "Stones", "Palm leaf", "Books"], correct: 1 },
                { question: "Old name of Chennai?", options: ["Madras", "Santhome", "Triplicane", "Mylapore"], correct: 0 }
                ],

            sports: [
                { question: "How many players are there in a cricket team?", options: ["10", "11", "12", "13"], correct: 1 },
                { question: "Which country won the FIFA World Cup 2018?", options: ["Brazil", "Germany", "France", "Argentina"], correct: 2 },
                { question: "What is the maximum score in bowling?", options: ["200", "250", "300", "350"], correct: 2 },
                { question: "who has more UCL trophies?", options: ["Real Madrid", "Varcelona", "Juventus", "Manchester United"], correct: 0 },
                { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Badminton"], correct: 1 },
                { question: "How many holes are there in a full round of golf?", options: ["9", "18", "27", "36"], correct: 1 },
                { question: "What is the duration of an Olympic swimming pool in meters?", options: ["25m", "50m", "75m", "100m"], correct: 1 },
                { question: "In which sport is the term 'love' used?", options: ["Cricket", "Football", "Tennis", "Hockey"], correct: 2 },
                { question: "How many medals did Michael Phelps win in total?", options: ["18", "23", "28", "30"], correct: 2 },
                { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "UK", "Russia"], correct: 1 },
                { question: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], correct: 1 },
                { question: "In which year was the first modern Olympic Games held?", options: ["1892", "1896", "1900", "1904"], correct: 1 },
                { question: "How many points is a touchdown worth in American football?", options: ["4", "5", "6", "7"], correct: 2 },
                { question: "What is the length of a marathon in kilometers?", options: ["40.2", "41.2", "42.2", "43.2"], correct: 2 },
                { question: "Which sport uses the lightest ball?", options: ["Tennis", "Table Tennis", "Badminton", "Squash"], correct: 1 },
                { question: "How many periods are there in an ice hockey game?", options: ["2", "3", "4", "5"], correct: 1 },
                { question: "What is the national sport of Japan?", options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"], correct: 2 },
                { question: "In which sport do you use a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], correct: 1 },
                { question: "How many players are on a volleyball team?", options: ["5", "6", "7", "8"], correct: 1 },
                { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Brazil", "Italy"], correct: 2 },
                { question: "What is the highest possible break in snooker?", options: ["147", "155", "167", "180"], correct: 0 },
                { question: "In which sport would you perform a 'birdie'?", options: ["Badminton", "Golf", "Tennis", "Cricket"], correct: 1 },
                { question: "How many lanes are there in an Olympic swimming pool?", options: ["6", "8", "10", "12"], correct: 1 },
                { question: "What is the weight of a cricket ball in grams?", options: ["140-160", "156-163", "170-180", "180-190"], correct: 1 },
                { question: "In which year did Usain Bolt set the 100m world record?", options: ["2008", "2009", "2012", "2016"], correct: 1 },
                { question: "How many sets are required to win a men's Grand Slam tennis match?", options: ["2", "3", "4", "5"], correct: 1 },
                { question: "What is the national sport of Canada?", options: ["Ice Hockey", "Lacrosse", "Both", "Baseball"], correct: 2 },
                { question: "In which sport is the Stanley Cup awarded?", options: ["Basketball", "Baseball", "Ice Hockey", "American Football"], correct: 2 },
                { question: "How many points is a try worth in rugby union?", options: ["3", "4", "5", "6"], correct: 2 },
                { question: "Which country won the first Cricket World Cup?", options: ["Australia", "West Indies", "England", "India"], correct: 1 }
            ],
            tnpolitics: [
                { question: "What is the capital of Tamil Nadu?", options: ["Coimbatore", "Madurai", "Chennai", "Trichy"], correct: 2 },
                { question: "Which party was founded by C.N. Annadurai?", options: ["DMK", "AIADMK", "Congress", "BJP"], correct: 0 },
                { question: "Who is known as 'Perunthalaivar' in Tamil Nadu?", options: ["M. Karunanidhi", "M.G. Ramachandran", "C.N. Annadurai", "J. Jayalalithaa"], correct: 2 },
                { question: "How many districts are there in Tamil Nadu?", options: ["32", "35", "38", "40"], correct: 2 },
                { question: "Which Tamil Nadu Chief Minister was known as 'Puratchi Thalaivi'?", options: ["Karunanidhi", "J. Jayalalithaa", "Annadurai", "M.G.R"], correct: 1 },
                { question: "When was Tamil Nadu formed as a state?", options: ["1947", "1950", "1956", "1969"], correct: 2 },
                { question: "Who was the first Chief Minister of Tamil Nadu?", options: ["C.N. Annadurai", "K. Kamaraj", "C. Rajagopalachari", "M. Bhakthavatsalam"], correct: 2 },
                { question: "What was Tamil Nadu called before 1969?", options: ["Madras State", "Tamil State", "Dravida Nadu", "South India"], correct: 0 },
                { question: "Which movement led to the formation of Tamil Nadu?", options: ["Quit India", "Non-Cooperation", "Dravida Movement", "Civil Disobedience"], correct: 2 },
                { question: "Who founded the Justice Party?", options: ["E.V. Ramasamy", "C.N. Annadurai", "T.M. Nair", "Periyar"], correct: 2 },
                { question: "In which year was AIADMK founded?", options: ["1969", "1972", "1975", "1977"], correct: 1 },
                { question: "Who is known as 'Periyar'?", options: ["C.N. Annadurai", "E.V. Ramasamy", "K. Kamaraj", "M. Karunanidhi"], correct: 1 },
                { question: "How many parliamentary constituencies are in Tamil Nadu?", options: ["35", "37", "39", "41"], correct: 2 },
                { question: "Core ideology of NTK?", options: ["Dravidianism", "Tamil Nationalism", "Socialism", "Capitalism"], correct: 1 },
                { question: "What is the official language of Tamil Nadu?", options: ["Tamil", "English", "Hindi", "Telugu"], correct: 0 },
                { question: "Who was known as 'Makkal Thilagam'?", options: ["Karunanidhi", "M.G.R", "Annadurai", "Jayalalithaa"], correct: 1 },
                { question: "When did Tamil become a classical language?", options: ["2000", "2004", "2008", "2010"], correct: 1 },
                { question: "Which city is known as the 'Manchester of South India'?", options: ["Chennai", "Madurai", "Coimbatore", "Salem"], correct: 2 },
                { question: "What is the state animal of Tamil Nadu?", options: ["Tiger", "Elephant", "Nilgiri Tahr", "Leopard"], correct: 2 },
                { question: "What is the state bird of Tamil Nadu?", options: ["Peacock", "Parrot", "Emerald Dove", "Sparrow"], correct: 2 },
                { question: "Which is the longest river in Tamil Nadu?", options: ["Cauvery", "Vaigai", "Tamiraparani", "Palar"], correct: 0 },
                { question: "How many assembly constituencies are in Tamil Nadu?", options: ["200", "220", "234", "240"], correct: 2 },
                { question: "Who was the founder of the Self-Respect Movement?", options: ["C.N. Annadurai", "Periyar E.V. Ramasamy", "K. Kamaraj", "V.O. Chidambaram"], correct: 1 },
                { question: "What is the state flower of Tamil Nadu?", options: ["Lotus", "Rose", "Glory Lily", "Jasmine"], correct: 2 },
                { question: "Which port is the largest in Tamil Nadu?", options: ["Chennai Port", "Tuticorin Port", "Ennore Port", "Cuddalore Port"], correct: 0 },
                { question: "Founder of PMK?", options: ["Anbumani Ramadoss", "Seeman", "Dr. S. Ramadoss", "Karunanidhi"], correct: 2 },
                { question: "Who is called 'Kalaignar'?", options: ["M.G.R", "C.N. Annadurai", "M. Karunanidhi", "Jayalalithaa"], correct: 2 },
                { question: "Which actor founded TVK?", options: ["Ajith", "Kamal Haasan", "Vijay", "Suriya"], correct: 2 },
                { question: "What is the literacy rate of Tamil Nadu approximately?", options: ["70%", "75%", "80%", "85%"], correct: 2 },
                { question: "TVK stands for?", options: ["Tamilaga Vettri Kazhagam", "Tamil Valarchi Kazhagam", "Tamilaga Viduthalai Kazhagam", "Tamilan Vetri Katchi"], correct: 0 },
            ]
        };

        let currentUser = '';
        let currentCategory = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let questions = [];

        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        }

        // Start quiz
        function startQuiz() {
            const name = document.getElementById('userName').value.trim();
            if (!name) {
                alert('Please enter your name!');
                return;
            }
            currentUser = name;
            showSection('category');
        }

        // Select category
        function selectCategory(category) {
            currentCategory = category;
            const allQuestions = quizData[category];
            
            // Randomly select 5 questions
            questions = getRandomQuestions(allQuestions, 5);
            
            currentQuestionIndex = 0;
            score = 0;
            showSection('quiz');
            displayQuestion();
        }

        // Get random questions
        function getRandomQuestions(arr, count) {
            const shuffled = [...arr].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, count);
        }

        function displayQuestion() {
            const question = questions[currentQuestionIndex];
            document.getElementById('progress').textContent = 
                `Question ${currentQuestionIndex + 1} of ${questions.length}`;
            document.getElementById('questionText').textContent = question.question;
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(btn);
            });
        }

        // Select answer
        function selectAnswer(selectedIndex) {
            const question = questions[currentQuestionIndex];
            const buttons = document.querySelectorAll('.option-btn');
            
            // Disable all buttons
            buttons.forEach(btn => btn.disabled = true);
            
            // Show correct/wrong
            if (selectedIndex === question.correct) {
                buttons[selectedIndex].classList.add('correct');
                score++;
            } else {
                buttons[selectedIndex].classList.add('wrong');
                buttons[question.correct].classList.add('correct');
            }
            
            // Move to next question after delay
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion();
                } else {
                    showResults();
                }
            }, 1500);
        }

        // Show results
        function showResults() {
            document.getElementById('resultName').textContent = `Great job, ${currentUser}!`;
            document.getElementById('scoreDisplay').textContent = 
                `You scored ${score} out of ${questions.length}`;
            
            // Save to leaderboard
            saveScore();
            displayLeaderboard();
            
            showSection('result');
        }

        // Save score to memory (not localStorage)
        let leaderboardData = [];
        
        function saveScore() {
            leaderboardData.push({
                name: currentUser,
                score: score,
                total: questions.length,
                category: currentCategory,
                date: new Date().toLocaleDateString()
            });
            
            // Sort by score (descending)
            leaderboardData.sort((a, b) => b.score - a.score);
            
            // Keep only top 10
            if (leaderboardData.length > 10) {
                leaderboardData = leaderboardData.slice(0, 10);
            }
        }

        // Display leaderboard
        function displayLeaderboard() {
            const list = document.getElementById('leaderboardList');
            list.innerHTML = '';
            
            if (leaderboardData.length === 0) {
                list.innerHTML = '<p style="text-align: center; color: #999;">No scores yet!</p>';
                return;
            }
            
            leaderboardData.forEach((entry, index) => {
                const item = document.createElement('div');
                item.className = 'leaderboard-item';
                item.innerHTML = `
                    <span>${index + 1}. ${entry.name} (${entry.category})</span>
                    <span><strong>${entry.score}/${entry.total}</strong></span>
                `;
                list.appendChild(item);
            });
        }

        // Restart quiz
        function restartQuiz() {
            document.getElementById('userName').value = '';
            currentUser = '';
            currentCategory = '';
            currentQuestionIndex = 0;
            score = 0;
            showSection('home');
        }