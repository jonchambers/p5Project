let linkButton;

function setup(){
  linkButton = createButton('Open Twine Game');
  linkButton.mousePressed(openLink);
}

function openLink(){

  //this will open a window in a new tab
  window.open('https://jonchambers.github.io/twineImages/', '_blank')

  //if you don't want the link to open in a new tab, uncomment the code below
  //window.open('https://jonchambers.github.io/twineImages/', '_self')

}

function draw(){

}
