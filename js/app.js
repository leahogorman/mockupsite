function headerLinks(elem) {
    console.log('hello');
    if (elem.querySelector('.hidden').style.display == 'grid') {
        elem.querySelector('.hidden').style.setProperty('display', 'none', 'important')
        elem.querySelector('.not-hidden').style.setProperty('display', 'grid', 'important')
        console.log('yay');
    } else {
        elem.querySelector('.hidden').style.setProperty('display', 'grid', 'important')
        elem.querySelector('.not-hidden').style.setProperty('display', 'none', 'important')
        console.log('nay');
    }
    }

function showLinks(elem) {
console.log('hello');
if (elem.querySelector('.hidden').style.display == 'grid') {
    elem.querySelector('.hidden').style.setProperty('display', 'none', 'important')
    elem.querySelector('.not-hidden').style.setProperty('display', 'grid', 'important')
    console.log('yay');
} else {
    elem.querySelector('.hidden').style.setProperty('display', 'grid', 'important')
    elem.querySelector('.not-hidden').style.setProperty('display', 'none', 'important')
    console.log('nay');
}
}
function showLinks(elem) {
    console.log('hello');
    if (elem.querySelector('.hidden').style.display == 'grid') {
        elem.querySelector('.hidden').style.setProperty('display', 'none', 'important')
        console.log('yay');
    } else {
        elem.querySelector('.hidden').style.setProperty('display', 'grid', 'important')
        console.log('nay');
    }
        
    }
function closeChoices() {
    var choices = document.getElementById("choices")
    choices.innerHTML = `
    <label><input id="nav" class="btn large" type="button" name="choice" value="Click Here to Navigate" onclick="openChoices(this)"></label>`
}


function Choice(elem) {
    var contents = document.getElementById("contents");
    if (elem.value == "Video Category 1") {
      contents.innerHTML = 
      ` <div class="nav-bar" onclick="showLinks(this)">
        <h1 class="nav-btn" id="nav-btn">Click to Navigate</h1>
          <div class="nav-links hidden">
              <label><input id="dogs" class="nav-option" name="choice" value="Video Category 1" onclick="Choice(this)"></label>
              <label><input id="cats" class="nav-option" name="choice" value="Video Category 2" onclick="Choice(this)"></label>
              <label><input id="hamsters" class="nav-option" name="choice" value="Video Category 3" onclick="Choice(this)"></label>
              <label><input id="links" class="nav-option" name="choice" value="Links" onclick="Choice(this)"></label>
          </div>
        </div>
        <div class="videos">
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/flexhqu1zhg?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/byDZTO1aNkQ?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/5dDjJLdQ6Jo?controls=0"></iframe>
        </div>
        </div>`
    } else if (elem.value == "Video Category 2") {
        contents.innerHTML = 
        `<div class="nav-bar" onclick="showLinks(this)">
        <h1 class="nav-btn" id="nav-btn">Click to Navigate</h1>
            <div class="nav-links hidden">
                <label><input id="dogs" class="nav-option" name="choice" value="Video Category 1" onclick="Choice(this)"></label>
                <label><input id="cats" class="nav-option" name="choice" value="Video Category 2" onclick="Choice(this)"></label>
                <label><input id="hamsters" class="nav-option" name="choice" value="Video Category 3" onclick="Choice(this)"></label>
                <label><input id="links" class="nav-option" name="choice" value="Links" onclick="Choice(this)"></label>
            </div>
        </div>
        <div class="videos">
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/7Nn7NZI_LN4?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/lGOofzZOyl8?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/8e0z3-iZ_TY?controls=0"></iframe>
        </div>
        </div>`
    } else if (elem.value == "Video Category 3") {
        contents.innerHTML = 
        `<div class="nav-bar" onclick="showLinks(this)">
        <h1 class="nav-btn" id="nav-btn">Click to Navigate</h1>
            <div class="nav-links hidden">
                <label><input id="dogs" class="nav-option" name="choice" value="Video Category 1" onclick="Choice(this)"></label>
                <label><input id="cats" class="nav-option" name="choice" value="Video Category 2" onclick="Choice(this)"></label>
                <label><input id="hamsters" class="nav-option" name="choice" value="Video Category 3" onclick="Choice(this)"></label>
                <label><input id="links" class="nav-option" name="choice" value="Links" onclick="Choice(this)"></label>
            </div>
        </div>
        <div class="videos">
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/WA1RuQ--aW8?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/oQxcFFQYviI?controls=0"></iframe>
        </div>
        <div class="video">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/cu38F7beXj0&t=57s?controls=0"></iframe>
        </div>
        </div>`
    } else {
        contents.innerHTML = `
        <div class="nav-bar" onclick="showLinks(this)">
        <h1 class="nav-btn" id="nav-btn">Click to Navigate</h1>
            <div class="nav-links hidden">
                <label><input id="dogs" class="nav-option" name="choice" value="Video Category 1" onclick="Choice(this)"></label>
                <label><input id="cats" class="nav-option" name="choice" value="Video Category 2" onclick="Choice(this)"></label>
                <label><input id="hamsters" class="nav-option" name="choice" value="Video Category 3" onclick="Choice(this)"></label>
                <label><input id="links" class="nav-option" name="choice" value="Links" onclick="Choice(this)"></label>
            </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title" id="tc3">Technical Committee 3: Neural Networks and Computational Intelligence</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="http://iapr-tc3.diism.unisi.it/Tutorials.html">Neural Networks and Computational Intelligence Tutorials</a>
                </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Technical Committee 10: Graphics Recognition</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="https://iapr-tc10.univ-lr.fr/?page_id=71">Graphics Recognition Datasets/Software</a>
                    <a class="committee-link" href="https://iapr-tc10.univ-lr.fr/?page_id=75">Educational Materials</a>
                </div>
        </div>    
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Technical Committee 12: Multimedia and Visual Information Systems</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="http://iapr-tc12.info/index.php/education/">Multimedia and Visual Information Systems Education</a>
                </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Technical Committee 15: Graph Based Representations</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="https://iapr-tc15.greyc.fr/lectures.php">Graph-based Representations Lectures</a>
                </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Technical Committee 18: Discrete Geometry and Mathematical Morphology</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="http://tc18.org/educational.html#getting_started">Discrete Geometry and Mathematical Morphology Educational</a>
                </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Technical Committee 19: Computer Vision for Cultural Heritage Applications</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="https://www.cvl.iis.u-tokyo.ac.jp/IAPR-TC19/index.php?id=tutorial">Computer Vision for Cultural Heritage Applications Tutorial</a>
                </div>
        </div>
        <div class="committee" onclick="showLinks(this)">
            <h1 class="committee-title">Example showing multiple links under a title</h1>
                <div class="committee-links hidden">
                    <a class="committee-link" href="https://www.youtube.com/watch?v=k22Gg13ahDc&ab_channel=BBC">Super Cute Penguin Chick Tries to Make Friends</a>
                    <a class="committee-link" href="https://www.youtube.com/watch?v=0DMX4IF-1A4&ab_channel=MarineMammalRescue">Joey Doesn't Like Water (Yet)</a>
                    <a class="committee-link" href="https://www.youtube.com/watch?v=fHNx_3aCx6s&ab_channel=BBC">PENGUIN FAIL 2 !!!</a>
                    <a class="committee-link" href="https://www.youtube.com/watch?v=BXnNYnQOm-s&ab_channel=JohnDownerProductions">Welcome to the orphaned sea otter salon</a>
                    <a class="committee-link" href="https://www.youtube.com/watch?v=OAEu8DPq2-Y&ab_channel=CGTNAmerica">Penguins at Chicago Aquarium welcome distraction from COVID-19</a>
                </div>
        </div>`
    } 
  };