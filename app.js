let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let changeBg = document.querySelector('#changeBg')

const quotes = [
      { quote: `"The only way to do great work is to love what you do."`, author: "Steve Jobs" },
      { quote: `"In three words I can sum up everything I've learned about life: it goes on."`, author: "Robert Frost" },
      { quote: `"Be yourself; everyone else is already taken."`, author: "Oscar Wilde" },
      { quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`, author: "Nelson Mandela" },
      { quote: `"The future belongs to those who believe in the beauty of their dreams."`, author: "Eleanor Roosevelt" },
      { quote: `"It is during our darkest moments that we must focus to see the light."`, author: "Aristotle" },
      { quote: `"Life is what happens when you're busy making other plans."`, author: "John Lennon" },
      { quote: `"Get busy living or get busy dying."`, author: "Stephen King" },
      { quote: `"The purpose of our lives is to be happy."`, author: "Dalai Lama" },
      { quote: `"You only live once, but if you do it right, once is enough."`, author: "Mae West" },
      { quote: `"Life is really simple, but we insist on making it complicated."`, author: "Confucius" },
      { quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`, author: "Winston Churchill" },
      { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, author: "Franklin D. Roosevelt" },
      { quote: `"The only way to achieve the impossible is to believe it is possible."`, author: "Charles Kingsleigh" },
      { quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`, author: "Albert Einstein" },
      { quote: `"The best way to predict the future is to create it."`, author: "Peter Drucker" },
      { quote: `"Success is not in what you have, but who you are."`, author: "Bo Bennett" },
      { quote: `"Don't watch the clock; do what it does. Keep going."`, author: "Sam Levenson" },
      { quote: `"Your time is limited, don't waste it living someone else's life."`, author: "Steve Jobs" },
      { quote: `"The only source of knowledge is experience."`, author: "Albert Einstein" },
      { quote: `"Life is 10% what happens to us and 90% how we react to it."`, author: "Charles R. Swindoll" },
      { quote: `"Believe you can and you're halfway there."`, author: "Theodore Roosevelt" },
      { quote: `"Happiness is not something readymade. It comes from your own actions."`, author: "Dalai Lama" },
      { quote: `"Do not wait to strike till the iron is hot, but make it hot by striking."`, author: "William Butler Yeats" },
      { quote: `"The only thing we have to fear is fear itself."`, author: "Franklin D. Roosevelt" },
      { quote: `"It is never too late to be what you might have been."`, author: "George Eliot" },
      { quote: `"If you are not willing to risk the usual, you will have to settle for the ordinary."`, author: "Jim Rohn" },
      { quote: `"Opportunities don't happen. You create them."`, author: "Chris Grosser" },
      { quote: `"You miss 100% of the shots you don't take."`, author: "Wayne Gretzky" },
      { quote: `"Success is not how high you have climbed, but how you make a positive difference to the world."`, author: "Roy T. Bennett" },
      { quote: `"Don't be afraid to give up the good to go for the great."`, author: "John D. Rockefeller" },
      { quote: `"The only place where success comes before work is in the dictionary."`, author: "Vidal Sassoon" },
      { quote: `"Strive not to be a success, but rather to be of value."`, author: "Albert Einstein" },
      { quote: `"The secret to getting ahead is getting started."`, author: "Mark Twain" },
      { quote: `"I find that the harder I work, the more luck I seem to have."`, author: "Thomas Jefferson" },
      { quote: `"Don't watch the clock; do what it does. Keep going."`, author: "Sam Levenson" },
      { quote: `"You have within you right now, everything you need to deal with whatever the world can throw at you."`, author: "Brian Tracy" },
      { quote: `"What lies behind us and what lies before us are tiny matters compared to what lies within us."`, author: "Ralph Waldo Emerson" },
      { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, author: "Unknown"},
      { quote: `"The best way to find yourself is to lose yourself 
        in the service of others. "`,
        author: `Mahatma Gandhi`
    },

    {
        quote: `"If you want to live a happy life, tie it to a goal not  
        to people or other things. "`,
        author: `Albert Einstein`
    },

    {
        quote: `"At his best, man is the noblest of all animals; separated 
        from law and justice he is the worst. "`,
        author: `Aristotle`
    },

    {
        quote: `"Your time is limited so dont waste it living someone 
        else's life. "`,
        author: `Steve Jobs`
    },

    {
        quote: `"Tell me and i forget. Teach me and i remember. Involve me 
        and i learn. "`,
        author: `Benjamin Franklin`
    },

    {
        quote: `"If you look at what you have in life, you'll always have 
        more. If you look at what you don't have in life, you'll never have 
        enough. "`,
        author: `Oprah Winfrey`
    },

    {
        quote: `"It does not matter how slowly you go as long as you do not
        stop. "`,
        author: `confucius`
    },

    {
        quote: `"Our lives begin to end the day we become silent about the 
        things that matter"`,
        author: `Martin Luther King, Jr. `
    },

    {
        quote: `"Remember that not getting what you want is sometimes a 
        wonderful stroke of luck"`,
        author: `Dalai Lama`
    },

    {
        quote: `"The journey of a thousand miles begin with one step. "`,
        author: `Lao Tzu`
    },

    {
        quote: `"Instinct is a lie told by a fearful body hoping to be wrong"`,
        author: `Zaheer X Guru Laghima`
    },
    {
        quote: `"When you base your expectations only on what you see, you blind
        yourself to the possibilities of a new reality"`,
        author: `Zaheer`
    },
    {
        quote: `"To be free is to free your mind from the illusion of control"`,
        author: `Guru Laghima`
    },
    {
        quote: `"To achieve true freedom, one must sever the chains of attachment"`,
        author: `Guru Laghima`
    },
    {
        quote: `"Fear is the enemy of enlightenment. To fear is to live in the 
        shadow of ignorance"`,
        author: `Guru Laghima`
    },
    {
        quote: `"The secret to happiness is to accept things as they are, 
        without judgement."`,
        author: "Guru Laghima"
    },
    {
        quote: `"New growth cannot exist without first the destruction of the old"`,
        author: "Guru Laghima"
    },
    {
        quote: `"Might makes right"`,
        author: "Jiren"
    },
    {
        quote: "`You will laugh at your fears when you find out who you are`",
        author: "Piccolo"
    },
    {
        quote: "`I know what it's like to lose, to feel so desperately that you're right, yet to fail nonetheless, it's frightening `",
        author: "Thanos: Avengers-Endgame"
    },
    {
        quote: `"If you want the rainbow, you gotta put up with the rain"`,
        author: "Dolly Parton"
    },
    {
        quote: `"Freedom is the oxygen of the soul"`,
        author: "Moshe Dayan"
    },
    {
        quote: `"Nature is constantly changing, like the wind"`,
        author: "Zaheer"
    },
    {
        quote: `"We can't concern ourselves with what was, we must act on what is"`,
        author: "Monk Gyatso"
    },
    {
        quote: `"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."`,
        author: "Albert Camus"
    },
    {
        quote: `"Freedom is the moment when you realize that nothing can bind you, nothing can hold you back, and nothing can limit your potential."`,
        author: "Anonymous"
    },
    {
        quote: `"If you want sucess, don't do the right things for the wrong reasons"`,
        author: "~Toby"
    },
    {
        quote: `"You could not live with your own failure, where did that bring you? Back to me"`,
        author: "Thanos"
    },
    {
        quote: `"Challenges are what make life interesting, Overcoming them is what makes life meaningful"`,
        author: "Unknown"
    },
    {
        quote: `"Life is difficult because we don't appreciate the things that come easily"`,
        author: "Invajy"
    },
    {
        quote: `"When you stop chasing the wrong things, you give the right things a chance to catch you"`,
        author: "Unknown"
    },
    {
        quote: `"When you do not seek or need external approval, you are at your most powerful"`,
        author: "Greg Behrendt"
    },
    {
        quote: `"What is meant to be, will be, Inevitably"`,
        author: "~Toby"
    },
    {
        quote: `"When we hit our lowest point, we are open to the greatest change"`,
        author: "Avatar Aang"
    },
    {
        quote: `"A thousand words will not leave so deep an impression as one deed"`,
        author: "Henrik Ibsen"
    },
    {
        quote: `"And now that you do not have to be perfect you can be good, at peace"`,
        author: "John Steinbeck"
    },
    {
        quote: `"It's easier to hold on, true strength lies in letting go"`,
        author: "~Unknown"
    },
    {
        quote: `"Happiness is not about getting all you want, it's about enjoying all you have"`,
        author: "~Unknown"
    },
    {
        quote: `"If it drains you, it's not for you"`,
        author: "~Unknown"
    },
    {
        quote: `"Do something today that your future self will thank you for"`,
        author: "~Unknown"
    },
    {
        quote: `"Freedom is a state of mind"`,
        author: "~Unknown"
    },
    {
        quote: `"The secret of happiness is freedom, the secret of freedom is courage"`,
        author: "Carrie Jones"
    },
    {
        quote: `"Freedom is what we do with what is done to us."`,
        author: "Jean-Paul Sartre"
    },
    {
        quote: `"He who is brave is free."`,
        author: "Lucius Annaeus Seneca"
    },
    {
        quote: `"No one outside ourselves can rule us inwardly. When we know this, we become free."`,
        author: "Buddha"
    },
    {
        quote: `"Never lose hope, just when you think it's over, God sends you a miracle."`,
        author: "~Unknown"
    },
    {
        quote: `"Dead people receive more flowers than the living because regret is stronger 
        than gratitude."`,
        author: "Anne Frank"
    },
    {
        quote: `"What you get by achieving your goals is not as important as what you become by achieving them"`,
        author: "Zig Ziglar"
    },
    {
        quote: `"If you can change your mind, you can change your life"`,
        author: "William James"
    },
    {
        quote: `"When things change inside you, things change around you"`,
        author: "~Unknown"
    },
    {
        quote: `"Nothing is impossible, the word itself says 'I'm possible"`,
        author: "~Unknown"
    },
    {
        quote: `"The root of suffering is attachment"`,
        author: "~Buddha"
    },
    {
        quote: `"Let go of what no longer serves you to make space for the new"`,
        author: "~Unknown"
    },
    {
        quote: `"People can be really smart or have skills that are directly applicable but
        if they don't really believe in it then they are not going to really work hard"`,
        author: "Mark Zuckerberg (Role Model)"
    },
    {
        quote: `"Every choice you make is a vote for the person you want to be"`,
        author: "~  Unknown"
    },
    {
        quote: `"Optimism is a happiness magnet. If you stay positive, good things and
        good people will be drawn to you"`,
        author: "Mary Lou Retton"
    },
    {
        quote: `"You define your own life. Don’t let other people write your script"`,
        author: "Oprah Winfrey"
    },
    {
        quote: `"To bring about change, you must not be afraid to take the first step. We will fail when we fail to try"`,
        author: "Rosa Parks"
    },
    {
        quote: `"You don't have to be great to start, but you have to start to be great"`,
        author: "Zig Ziglar"
    },
    
    {
        quote: `"Change will not come if we wait for some other person or some other time. 
        We are the ones we’ve been waiting for. We are the change that we seek."`,
        author: "Barack Obama"
    },
    {
        quote: `“In any given moment we have two options: to step forward into growth or 
        step back into safety.”`,
        author: "Abraham Maslow"
    },
    {
        quote: `“Change  is inevitable. Growth is optional.”`,
        author: "~Unknown"
    },
    {
        quote: `“When we are no longer able to change a situation, we are challenged to change ourselves.”`,
        author: "Viktor E. Frankl"
    },
    {
        quote: `“Stay close to anything that makes you glad you are alive.”`,
        author: "Hafez"
    },
    {
        quote: `“Everything you can imagine is real.”`,
        author: "Pablo Picasso"
    },
    {
        quote: `“ Success is not the absence of failure, It's persistence through failure .”`,
        author: "Aisha Tyler"
    },
    {
        quote: `“Any change, even a change for the better, is always accompanied by drawbacks and discomforts.”`,
        author: "Arnold Bennett"
    },
    
]

    


const bgImages = [
    {
        one: "background: url(./background.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg1.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg2.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg3.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg4.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg5.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg6.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg7.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg8.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg9.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg10.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg11.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg12.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg13.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg14.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg15.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg16.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg17.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg18.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg19.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg20.jpg) no-repeat center center/ cover;",
    },
]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
})

changeBg.addEventListener("click", () => {
    let random = Math.floor(Math.random() * bgImages.length);
    document.body.style = bgImages[random].one
})



document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const quoteText = document.querySelector('.quote');

    copyButton.addEventListener('click', function () {
        // Create a textarea element to hold the text to be copied
        const textarea = document.createElement('textarea');
        textarea.value = quoteText.innerText;

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        // Optionally, provide visual feedback to the user
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
            copyButton.innerText = 'Copy Quote';
        }, 2000);
    });
});
