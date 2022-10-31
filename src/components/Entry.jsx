import React from "react";
import Description from "./Description"


function Entry(props){
    return(
     
 
      <div className="term">
        <dt>
          <Description />
            {props.emojiGif}
          
          <span>{props.name1}</span>
        </dt>
        <dd>
          {props.meaning}
        </dd>
      </div>


    );
}
export default Entry;