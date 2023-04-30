// in this project I have used JQuery and Bootstrap
// To manage random background color and quotes
$(document).ready(function () {
  "use strict";
  let newQuote;
  let newColor;

  function randomQuote() {
    let text = [
      {
        quote:
          "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      },

      {
        quote:
          "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
      },

      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
      },

      {
        quote:
          "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
      },

      {
        quote:
          "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
      },

      {
        quote:
          "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },

      {
        quote:
          "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
      },

      {
        quote:
          "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller"
      },

      {
        quote:
          "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
      },

      {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
      },

      {
        quote:
          "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
      },

      {
        quote:
          "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
      },

      {
        quote:
          "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
      },

      {
        quote:
          "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
      },

      {
        quote:
          "Life is a succession of lessons which must be lived to be understood.",
        author: "Ralph Waldo Emerson"
      },

      {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
      },

      {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
      },

      {
        quote:
          "Go confidently in the direction of your dreams! Live the life you've imagined.",
        author: "Henry David Thoreau"
      },

      {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
      },

      {
        quote: "Life itself is the most wonderful fairy tale.",
        author: "Hans Christian Andersen"
      },

      {
        quote: "Do not let making a living prevent you from making a life.",
        author: "John Wooden"
      },

      {
        quote: "Life is ours to be spent, not to be saved.",
        author: "D. H. Lawrence"
      },

      {
        quote: "Love the life you live. Live the life you love.",
        author: "Bob Marley"
      },

      {
        quote:
          "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
      },

      {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },

      {
        quote:
          "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr."
      },

      {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
      },

      {
        quote:
          "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
        author: "Conrad Hilton"
      },

      {
        quote:
          "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell"
      },

      {
        quote:
          "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
      },

      {
        quote:
          "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author: "Jim Rohn"
      },

      {
        quote:
          "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
      },

      {
        quote:
          "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
      },

      {
        quote:
          "You know you are on the road to success if you would do your job and not be paid for it.",
        author: "Oprah Winfrey"
      },

      {
        quote:
          "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford."
      },

      {
        quote: "Nothing is impossible, the word itself says, ‘I'm possible!",
        author: "Audrey Hepburn"
      },

      {
        quote:
          "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
      },

      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },

      {
        quote:
          "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
      },

      {
        quote: "You become what you believe.",
        author: "Oprah Winfrey"
      },

      {
        quote:
          "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author: "Anne Frank"
      },

      {
        quote: "An unexamined life is not worth living.",
        author: "Socrates"
      },

      {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
      },

      {
        quote:
          "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
      },

      {
        quote:
          "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
      },

      {
        quote:
          "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown"
      },

      {
        quote: "Dreaming, after all, is a form of planning.",
        author: "Gloria Steinem"
      },

      {
        quote:
          "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
      },

      {
        quote: "Before anything else, preparation is the key to success.",
        author: "Alexander Graham Bell"
      },

      {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
      }
    ];

    let bgColor = [
      "#ea6c22",
      "#316959",
      "#693553",
      "#88a358",
      "#7075fc",
      "#f8265b",
      "#b57ac9",
      "#e7237a",
      "#9c6cf7",
      "#3b9cc8",
      "#b06670",
      "#be31ec",
      "#41d510",
      "#e97629",
      "#35b5d7",
      "#449471",
      "#78649c",
      "#e0403b",
      "#51c779}",
      "#633045",
      "#2c5fd6",
      "#a480ee",
      "#cb4dfb",
      "#4436ab",
      "#3aba35",
      "#708df7",
      "#ca5259",
      "#5dd61c",
      "#29892f",
      "#329669",
      "#db79ee",
      "#b370c7",
      "#1024b9",
      "#5deb50",
      "#51e1c5",
      "#56ccd7",
      "#14a40a",
      "#26f044",
      "#5376b2",
      "#cb0363",
      "#03c59b",
      "#88ce30",
      "#5e8e44",
      "#000d71",
      "#1e5bb1",
      "#0e3f29",
      "#180986",
      "#19bcfb",
      "#fd306e",
      "#6988c6"
    ];
    
    let newQuote = text[Math.floor(Math.random() * text.length)];
    let newColor = bgColor[Math.floor(Math.random() * bgColor.length)];

    $("#text").html(newQuote.quote);
    $("#author").html(newQuote.author);

    $("#quote-box").css("background-color", newColor);
  }

  $(function () {
    randomQuote();
  });

  $("tweet-quote").on("click", function () {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        "'" +
        newQuote.quote +
        "'" +
        "'" +
        newQuote.author +
        "'"
    );
  });

  $("#new-quote").on("click", function () {
    randomQuote(newQuote, newColor);
  });
});
