
let riotor_flairs = document.getElementsByClassName("flair-riot");
for( let flair of riotor_flairs)
{
    var tagline = flair.parentNode;
    var entry = tagline.parentNode;
    
    tagline.getElementsByClassName('author')[0].style.color = 'firebrick';
    
    entry.setAttribute('style', 'background-color: pink !important');
    entry.getElementsByClassName('md-container')[0].setAttribute('style', 'background-color: pink !important');
    entry.parentNode.setAttribute('style', 'background-color: lightpink !important');
}