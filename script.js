var plastic = $('.plastic'); 
var transport = $('.transport')
var fashion = $('.fashion');
var diet= $('.diet'); 
var out = $('.output');


plastic.on("click", doPlastic); 
transport.on("click", doTransport); 
fashion.on("click", doFashion); 
diet.on("click", doDiet); 

function doPlastic() {
  out.empty();
  out.append(`<div class="boutput">To reduce your plastic use, try these alternatives: metal straws, paper straws, reusable grocery bags, stainless steel  
  or <br> glass reusable water bottles, glass or sustainable steel containers instead of plastic bags/Ziplocks, and  wooden toothbrushes. <br> <img class="plasticimg" alt="graph of how much plastic enters the ocean" 
  src="https://cdn.glitch.com/5a5192f7-60a7-4679-a519-276c351a041f%2Fplastic.png?v=1561582303584"</div>`)
  }

function doTransport() {
  out.empty();
  out.append(`<p class="bout">According to epa.gov transportation is one of the largest contributors to greenhouse gas emissions. To help make this statistic 
  <br>better, try taking public transportation every once in a while! Also try car pooling and rideshares. This is not just good for the <br>environment 
  but also helps reduce traffic.</p>`)
  }

function doFashion() {
  out.empty();
  out.append (`<p>As stated by sustainyourstyle.org the fashion industry is the second largest polluter in the world, only second to the oil industry.
  <br>To make more eco-friendly fashion choices, donate your clothes instead of throwing them out so they can be reused. Additionally, <br>consider 
  shopping at thrift/consignment stores every once in a while or buying from sustainable brands</p>`)
}

function doDiet() {
  out.empty();
  out.append (`<div class="dietop">By eating less meat and dairy you can reduce your carbon footprint! Even just using meat/dairy alternatives every once 
  in a while <br>is helpful. Consider having a day once a week or month where you don’t eat meat or dairy. Milk alternatives: almond milk, 
  soy milk,<br> oat milk, cashew milk, rice milk, coconut milk, hemp milk, and many more. Meat alternatives: tofu, seitan, tempeh, and alternatives 
  <br>like Beyond Meat. <br> <img alt="graph of CO2 emissions by diet type" src="https://cdn.glitch.com/5a5192f7-60a7-4679-a519-276c351a041f%2Ffoodprint5.gif?v=1561580311884"
</div>`)
}




var remindEvery = ["Remember to unplug all computer's, TVs, and other electronics when they are not in use.","On your next grocery trip, remember to buy organic and local food.",  
                   "Before you leave your home, remember to turn off all lights.","Remember to recycle your plastic, cans, and other recyable items.",
                  "Remember to be waste-free whenever you can.", "When going somewhere short in distance, remember to walk and use a bike. Remember, a 2 mile car trip puts 2 pounds of carbon dioxide into the atmosphere.",
                  "Remember to not leave the water running when brushing your teeth.", "Remember to not take long showers, but rather 3-5 minute showers."];

var remindButton = $('.remindButton');
var container = $('.remindContainer');

remindButton.on("click", randRemind);

function randRemind(){
  var random = Math.random()*3;
  var next = Math. floor(random);
  var final = remindEvery[next];
  container.text(`${final}`);
  
  
}