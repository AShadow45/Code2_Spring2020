class Student{
  constructor (name, major){
    this.name = name;
    this.major = major;
    this.classes = [];
  }
  
  addClasses(classId) {
    this.classes.push(classId);
  }
}

let img;

function preload(){
  img = loadImage("Assets/SmallerSelf2.png")
}

function setup() {
  createCanvas(500, 500);
  img.resize (width/2,0);
}

function draw() {
  background(243, 133, 255);
  image(img,0,0);
  fill(0);
  text("Name: Analisse",260,20);
  text("Major: Design and Technology",260,40);
  text("Likes: Food, Cats, Drawing and Writing Stories",260,60);
  
  
}