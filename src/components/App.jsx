
import React from "react";
import emojipedia from "../emojipedia"; 
import Entry from "./Entry";


function createEntries(emo){
  return (
    <Entry   
   id={emo.id}
  key={emo.id}
  emojiGif={emo.emoji}
  name1={emo.name1}
  meaning={emo.meaning}
    />
  );

}




function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
    {emojipedia.map(createEntries)}
    </dl>

    </div>
  );
}

export default App;
