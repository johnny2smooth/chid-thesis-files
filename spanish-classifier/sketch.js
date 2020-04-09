// Add some header info
// Got this from YouTube

// Video
let video;
let classifier;
let label = 'waiting...';



// STEP 1: Load the model!

function preload() {
  let options = {probabilityThreshold: 0.95};
  classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/fKOEqIHf7/model.json', options);
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify!

function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textAlign(CENTER, CENTER);

  let alphabet = '';
  if (label == 'Silence') {
    alphabet = ' '
  } else if (label == 'Spanish A') {
    alphabet = 'A'
  } else if (label == 'Spanish E') {
    alphabet = 'E'
  } else if (label == 'Spanish I') {
    alphabet = 'I'
  } else if (label == 'Spanish O') {
    alphabet = 'O'
  } else if (label == 'Spanish U') {
    alphabet = 'U'
  }
  
  textSize(100);
  fill(255);
  text(alphabet, width/2, height/2)
}


// STEP 3: Get the classification!

function gotResults(error, results) {
  if(error){
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}
