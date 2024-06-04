const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let pitch;
let mic;
let freq = 0;
let threshold = 1;


let notes = [{
    note: 'C8',
    freq: 4186.009
  },
  {
    note: 'B7',
    freq: 3951.066
  },
  {
    note: 'A♯7/B♭7',
    freq: 3729.310
  },
  {
    note: 'A7',
    freq: 3520.000
  },
  {
    note: 'G♯7/A♭7',
    freq: 3322.438
  },
  {
    note: 'G7',
    freq: 3135.963
  },
  {
    note: 'F♯7/G♭7',
    freq: 2959.955
  },
  {
    note: 'F7',
    freq: 2793.826
  },
  {
    note: 'E7',
    freq: 2637.020
  },
  {
    note: 'D♯7/E♭7',
    freq: 2489.016
  },
  {
    note: 'D7',
    freq: 2349.318
  },
  {
    note: 'C♯7/D♭7',
    freq: 2217.461
  },
  {
    note: 'C7',
    freq: 2093.005
  },
  {
    note: 'B6',
    freq: 1975.533
  },
  {
    note: 'A♯6/B♭6',
    freq: 1864.655
  },
  {
    note: 'A6',
    freq: 1760.000
  },
  {
    note: 'G♯6/A♭6',
    freq: 1661.219
  },
  {
    note: 'G6',
    freq: 1567.982
  },
  {
    note: 'F♯6/G♭6',
    freq: 1479.978
  },
  {
    note: 'F6',
    freq: 1396.913
  },
  {
    note: 'E6',
    freq: 1318.510
  },
  {
    note: 'D♯6/E♭6',
    freq: 1244.508
  },
  {
    note: 'D6',
    freq: 1174.659
  },
  {
    note: 'C♯6/D♭6',
    freq: 1108.731
  },
  {
    note: 'C6',
    freq: 1046.502
  },
  {
    note: 'B5',
    freq: 987.7666
  },
  {
    note: 'A♯5/B♭5',
    freq: 932.3275
  },
  {
    note: 'A5',
    freq: 880.0000
  },
  {
    note: 'G♯5/A♭5',
    freq: 830.6094
  },
  {
    note: 'G5',
    freq: 783.9909
  },
  {
    note: 'F♯5/G♭5',
    freq: 739.9888
  },
  {
    note: 'F5',
    freq: 698.4565
  },
  {
    note: 'E5',
    freq: 659.2551
  },
  {
    note: 'D♯5/E♭5',
    freq: 622.2540
  },
  {
    note: 'D5',
    freq: 587.3295
  },
  {
    note: 'C♯5/D♭5',
    freq: 554.3653
  },
  {
    note: 'C5',
    freq: 523.2511
  },
  {
    note: 'B4',
    freq: 493.8833
  },
  {
    note: 'A♯4/B♭4',
    freq: 466.1638
  },
  {
    note: 'A4',
    freq: 440.0000
  },
  {
    note: 'G♯4/A♭4',
    freq: 415.3047
  },
  {
    note: 'G4',
    freq: 391.9954
  },
  {
    note: 'F♯4/G♭4',
    freq: 369.9944
  },
  {
    note: 'F4',
    freq: 349.2282
  },
  {
    note: 'E4',
    freq: 329.6276
  },
  {
    note: 'D♯4/E♭4',
    freq: 311.1270
  },
  {
    note: 'D4',
    freq: 293.6648
  },
  {
    note: 'C♯4/D♭4',
    freq: 277.1826
 },
 {
    note: 'C4',
    freq: 261.6256
 },
 {
    note: 'B3',
    freq: 246.9417
  },
  {
    note: 'A♯3/B♭3',
    freq: 233.0819
  },
  {
    note: 'A3',
    freq: 220.0000
  },
  {
    note: 'G♯3/A♭3',
    freq: 207.6523
  },
  {
    note: 'G3',
    freq: 195.9977
  },
  {
    note: 'F♯3/G♭3',
    freq: 184.9972
  },
  {
    note: 'F3',
    freq: 174.6141
  },
  {
    note: 'E3',
    freq: 164.8138
  },
  {
    note: 'D♯3/E♭3',
    freq: 155.5635
  },
  {
    note: 'D3',
    freq: 146.8324
  },
  {
    note: 'C♯3/D♭3',
    freq: 138.5913
  },
  {
    note: 'C3',
    freq: 130.8128
  },
  {
    note: 'B2',
    freq: 123.4708
  },
  {
    note: 'A♯2/B♭2',
    freq: 116.5409
  },
  {
    note: 'A2',
    freq: 110.0000
  },
  {
    note: 'G♯2/A♭2',
    freq: 103.8262
  },
  {
    note: 'G2',
    freq: 97.99886
  },
  {
    note: 'F♯2/G♭2',
    freq: 92.49861
  },
  {
    note: 'F2',
    freq: 87.30706
  },
  {
    note: 'E2',
    freq: 82.40689
  },
  {
    note: 'D♯2/E♭2',
    freq: 77.78175
  },
  {
    note: 'D2',
    freq: 73.41619
  },
  {
    note: 'C♯2/D♭2',
    freq: 69.29566
  },
  {
    note: 'C2',
    freq: 65.40639
  },
  {
    note: 'B1',
    freq: 61.73541
  },
  {
    note: 'A♯1/B♭1',
    freq: 58.27047
  },
  {
    note: 'A1',
    freq: 55.00000
  },
  {
    note: 'G♯1/A♭1',
    freq: 51.91309
  },
  {
    note: 'G1',
    freq: 48.99943
  },
  {
    note: 'F♯1/G♭1',
    freq: 46.24930
  },
  {
    note: 'F1',
    freq: 43.65353
  },
  {
    note: 'E1',
    freq: 41.20344
  },
  {
    note: 'D♯1/E♭1',
    freq: 38.89087
  },
  {
    note: 'D1',
    freq: 36.70810
  },
  {
    note: 'C♯1/D♭1',
    freq: 34.64783
  },
  {
    note: 'C1',
    freq: 32.70320
  },
  {
    note: 'B0',
    freq: 30.86771
  },
  {
    note: 'A♯0/B♭0',
    freq: 29.13524
  },
  {
    note: 'A0',
    freq: 27.50000
  }
];

function setup() {
  createCanvas(400, 400);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log('listening');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded
  );
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(32);
  text(freq.toFixed(2), width / 2, height - 150);


  let closestNote = -1;
  let recordDiff = Infinity;
  for (let i = 0; i < notes.length; i++) {
    let diff = freq - notes[i].freq;
    if (abs(diff) < abs(recordDiff)) {
      closestNote = notes[i];
      recordDiff = diff;
    }
  }

  textSize(64);
  text(closestNote.note, width / 2, height - 50);


  let diff = recordDiff;
  // let amt = map(diff, -100, 100, 0, 1);
  // let r = color(255, 0, 0);
  // let g = color(0, 255, 0);
  // let col = lerpColor(g, r, amt);


  let alpha = map(abs(diff), 0, 100, 255, 0);
  rectMode(CENTER);
  fill(255, alpha);
  stroke(255);
  strokeWeight(1);
  if (abs(diff) < threshold) {
    fill(0, 255, 0);
  }
  rect(200, 100, 200, 50);

  stroke(255);
  strokeWeight(4);
  line(200, 0, 200, 200);

  noStroke();
  fill(255, 0, 0);
  if (abs(diff) < threshold) {
    fill(0, 255, 0);
  }
  rect(200 + diff / 2, 100, 10, 75);


}

function modelLoaded() {
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    //console.log(frequency);
    if (frequency) {
      freq = frequency;
    }
    pitch.getPitch(gotPitch);
  }
}