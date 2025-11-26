import { useEffect, useState } from 'react';

export function DisplayTextAnimation(textToDisplay :string = "", interval :number = 500 ) :string {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {

        let currentIndex :number = 0;

        if ((!textToDisplay || textToDisplay.length === 0) || (interval < 0)) {
            setDisplayedText("");
            return;
        }

        const _timer = setInterval(() => {

            if ( currentIndex >= textToDisplay.length ) {
                clearInterval(_timer);
                return;
            }

            const characterToRender = textToDisplay[currentIndex] ?? "";

            setDisplayedText( (prev) => prev + characterToRender);
            currentIndex++;

            if ( currentIndex >= textToDisplay.length ) {
                clearInterval(_timer);
            }
        }, interval);
        
        return () => clearInterval(_timer);

    }, 
    [ textToDisplay, interval ]); //  Make it dependant on theese properties

    return displayedText;
}
