import React, {useState} from 'react';
import './App.css';


const qoute = [
  "Real love stories never have endings.",
  "You are my perfect soul mate who brings the very best out of me.",
  "You are forever and always the hero of my heart, the love of my life.",
  "Real love stories never have endings.",
  "We loved with a love that was more than love.",
  "We fight, we kiss, we hug, we text, we talk, we argue, we laugh, we smile, we laugh. That’s us.",
  "I don’t want to live in a life that doesn’t have you in it.",
  "The best thing to hold onto in life is each other.",
  "Real love never has happy endings. It has no ending at all.",
  "I love you with all my heart, soul and mind.",
  "You are my perfect soul mate who brings the very best out of me.",
  "You are the source of my joy, the center of my world and the whole of my heart.",
  "When you smile at me you brighten up my day more than the sun ever could.",
  "When I tell you I love you, I am not saying it out of habit, I am reminding you that you are my life.",
  "I don’t need paradise because I found you. I don’t need dreams because I already have you.",
  "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
  "You make my heart smile.",
  "And in the end, the love you take, is equal to the love you make.",
  "I may not be your first date, kiss or love…but I want to be your last everything.",
  "All of me loves all of you.",
  "Real love never asks a reason for loving.",
  "I love you for all that you are, all that you have been, and all you’re yet to be.",
  "If I did anything right in my life it was when I gave my heart to you.",
  "My favorite place in the entire world is next to you.",
  "I wish I could turn back the clock. I’d find you sooner and love you longer.",
  "In dreams and in love there are no impossibilities.",
  "There is more pleasure in loving than in being beloved.",
  "Time doesn’t matter love is forever.",
  "Love is the gift which you have to give somebody if you want to get it in return.",
  "Love is composed of a single soul inhabiting two bodies.",
  "Each kiss I give you is a piece of my soul. And I shall keep kissing you until all of me is absorbed into you.",
  "Each kiss I give you is a piece of my soul. And I shall keep kissing you until all of me is absorbed into you."
]

function App() {

  const [counter, setCounter] = useState(7)

  return (
    
    <div 
      onClick={(event) => setCounter(counter + 1)}
      className="App"
    >
      <h1 className="hello">Hello loml</h1>

      {qoute [counter % qoute.length]}

     <div>
        <img src="https://scontent.fbni1-1.fna.fbcdn.net/v/t1.6435-9/211942188_529016064810807_4391039719543772824_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEDB6vH1ddlOIm9Tdcg1awjf7VV4ChipZR_tVXgKGKllPg2clkQ7ZBnHk-6wBVECc6nbBQ7HU4EJ0FY_fccWqzC&_nc_ohc=uNH1CAYzV1AAX-mIt7i&_nc_ht=scontent.fbni1-1.fna&oh=b757de7e4642868bc7f5d99a23c6b814&oe=6172F6B1" alt="my love"/>
        <p>Click on the qoute to change text</p>
     </div>

    </div>
  );
}

export default App;
