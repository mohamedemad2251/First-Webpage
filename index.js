var cards = document.getElementsByClassName("card");    //We get the HTML Element Collection
//(Array) by using the document.getElementsByClassName method. This returns an array of 
//HTML Elements with class "card". (As many cards as we have)

for (let card = 0;card < cards.length;card++) //Don't use for..in, it won't work. You want to
//loop here like looping in an array with indexing
{
    cards[card].addEventListener("click", function()    //Instead of clicking in the document
    //i.e. the entire webpage, you want to "listen" to clicking on EACH CARD (hence cards[card])
    {
        let panel = this.getElementsByClassName("card-accordion-panel")[0]; //Since the function
        //return a collection/array, we gotta use [0] to get the first (and only) element we have
        if(panel)   //Validation, maybe there is no accordion panel added to that card yet.
        {
            panel.classList.toggle("active");   //Instead of card-accordion-panel, make it:
            //card-accordion-panel active (A different class)
        }
    })
}
    