/*==============================================================
Array of Quotes from https://www.goodreads.com/quotes/tag/funny 
==============================================================*/

const quotes = [
  {
    quote:
      'I did not attend his funeral, but I sent a nice letter saying I approved of it.',
    source: 'Mark Twain',
    tags: ['funny', ' humour', ' classic-insult', ' funeral']
  },
  {
    quote:
      'Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.',
    source: 'Lemony Snicket',
    citation: 'Horseradish',
    tags: ['funny']
  },
  {
    quote: 'When life gives you lemons, squirt someone in the eye.',
    source: 'Cathy Guisewite',
    tags: ['eyes', 'funny', 'lemons']
  },
  {
    quote: "If a book about failures doesn't sell, is it a success?",
    source: 'Jerry Seinfeld',
    tags: ['books', 'funny']
  },
  {
    quote:
      "Do you ever think if people heard our conversations they'd lock us up",
    source: 'Wendy Mass',
    citation: 'Jeremy Fink and the Meaning of Life',
    tags: ['funny', 'humor']
  },
  {
    quote: 'I live in my own little world. But its ok, they know me here.',
    source: 'Lauren Myracle',
    tags: ['funny', 'home', 'life']
  },
  {
    quote:
      'Inconceivable!" "You keep using that word. I do not think it means what you think it means.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    tags: ['funny', 'bride', 'movie']
  },
  {
    quote:
      "Once I pulled a job, I was so stupid. I picked a guy's pocket on an airplane and made a run for it.",
    source: 'Rodney Dangerfield',
    tags: ['funny', 'crime', 'humor']
  },
  {
    quote:
      "Ah coffee. The sweet balm by which we shall accomplish today's tasks.",
    source: 'Holly Black',
    citation: 'Ironside',
    tags: ['corny', 'funny', 'ironside']
  },
  {
    quote: 'Sane is boring.',
    source: 'R.A. Salvatore',
    tags: ['crazy', 'humor', 'funny']
  }
];

/*==========================
FUNCTIONS
==========================*/

// randomBackgroundColor changes the background color

const randomBackgroundColor = () => {
  // RGB color number assignment
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // assign colors to change background
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

// getRandomQuote function selects a random quote object from the array quotes and returns it

const getRandomQuote = arr => {
  let randNum = Math.floor(Math.random() * quotes.length);
  return arr[randNum];
};

// printQuote function stores quote from getRandomQuote and displays it

const printQuote = () => {
  // Stores quote from getRandomQuote
  let randomQuote = getRandomQuote(quotes);

  //Initialize string for quote object
  let str = '';

  // Constructs String based on if else conditions

  //If the quote object has both citation and year
  if (
    randomQuote.hasOwnProperty('citation') &&
    randomQuote.hasOwnProperty('year')
  ) {
    str = `<p class="quote"> ${randomQuote.quote} </p>
          <p class="source"> ${randomQuote.source}
            <span class="citation"> ${randomQuote.citation} </span>
            <span class="year"> ${randomQuote.year} </span>
          </p>
          <p class="tags"> tags: ${randomQuote.tags} </p>`;
  } else if (randomQuote.hasOwnProperty('citation')) {
    // If the quote object only has citation
    str = `<p class="quote"> ${randomQuote.quote} </p>
        <p class="source"> ${randomQuote.source}
          <span class="citation"> ${randomQuote.citation} </span>
        </p>
        <p class="tags"> tags: ${randomQuote.tags} </p>`;
  } else if (randomQuote.hasOwnProperty('year')) {
    // If the quote object only has year
    str = `<p class="quote"> ${randomQuote.quote} </p>
        <p class="source"> ${randomQuote.source}
          <span class="year"> ${randomQuote.year} </span>
        </p>
        <p class="tags"> tags: ${randomQuote.tags} </p>`;
  } else {
    // If the quote object has neither year nor citation
    str = `<p class="quote"> ${randomQuote.quote} </p>
          <p class="source"> ${randomQuote.source} </p>
          <p class="tags"> tags: ${randomQuote.tags} </p>`;
  }

  // Get the quote-box element and display string to it
  const quoteBox = document.getElementById('quote-box');

  quoteBox.innerHTML = str;

  // Change Background Color
  randomBackgroundColor();
};

/*==========================================
Load Random Background Color on page load
==========================================*/
randomBackgroundColor();

/*===================
EVENT LISTENER
===================*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

/*============================================================================
Set Interval to change to a random quote and Background Color every 20 seconds
============================================================================*/

const setTimeToChangeQuoteAndBackgroundColor = () => {
  setInterval(printQuote, 20000);
};

setTimeToChangeQuoteAndBackgroundColor();
