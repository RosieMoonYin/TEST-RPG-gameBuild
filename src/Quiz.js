import Quiz from "./Quiz-logic";

export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 7,
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Greetings CodeMan! Welcome to Volcano Moon virtual realms...the realm is currently down, There is an error in the code, Volcano Moon beings believe a rogue semi-colon is destroying their galaxy, What can Code Man to do help them?",
      choices: ["Debugging", "Compiling", "Scanning", "Twerking"],
      type: "MCQs",
      correctAnswer: "Debugging"
    },

    {
      question:
        "Wizard Elrath has travelled through time and space to deliver an important message to Volcano Moon. What sintax can CodeMan use to share the Wizards message to the virtual realm?",
      choices: [
        "console.log();",
        "alert();",
        "window.alert();",
        "all of these will work"
      ],
      type: "MCQs",
      correctAnswer: "all of these will work"
    },

    {
      question:
        "For nano-centuries Volcano Moon residents have existed in a slow reality, The beings waste precious life energy with long loading times.., wizard Elrath bestowed upon them the gift of react virtual DOM. How will this help?",
      choices: [
        "it is less lightweight than the actual DOM",
        "by comparing 2 render trees to determine exactly what has changed, making only essential updates to the DOM",
        "It is a faster engine than Google V8",
        "virtual DOM does not increase speed, Wizard is lying!"
      ],
      type: "MCQs",
      correctAnswer:
        "by comparing 2 render trees to determine exactly what has changed, making only essential updates to the DOM"
    },

    {
      question:
        'Princess X of Volcano Moon has many sacred treasures in the castle, To keep track of the treasures she stores the data into an Object: const sacredTreasure = { jewels: "Rubies", "Jade", "Smoke Quartz", metals: "Titanium" weapon: "Amulet", "Shield", "Sword"}',
      choices: ["bigINT", "String", "Number", "Boolean"],
      type: "MCQs",
      correctAnswer: "String"
    },

    {
      question:
        "Princess X is grateful for your wisdom, As thanks CodeMan is knighted  honorary Data Scientist for Volcano Moon (unpaid position!) Princess X has problems organising the sacred treasure there are hundreds of treasures and they need to be ordered! What method could help with this?",
      choices: [
        "Never store more than 10 values in one object",
        "Use an external API to autogenerate treasure",
        "Store values in an array so they can be indexed",
        "Only use arrow function sintax"
      ],
      type: "MCQs",
      correctAnswer: "Store values in an array so they can be indexed"
    },

    {
      question:
        "During a blood moon thieves stole the amulet from the castle. Its the first piece of treasure ever recorded in inventory. Help Princess X update the inventory code to account for the stolen Amulet?",
      choices: [
        "sacredTreasure.splice(1,1);",
        'sacredTreasure[-1]="Amulet";',
        "sacredTreasure.indexOF(0,1);",
        "sacredTreasure.splice(0,1);"
      ],
      type: "MCQs",
      correctAnswer: "sacredTreasure.splice(0,1);"
    },

    {
      question:
        "Princes On the seventh sun Wizard Elrond gifts a an elven sword to Princess X, CodeMan must update the castle inventory, what sintax should he use...",
      choices: ["wrong", "correct answer", "wrong", "wrong"],
      type: "MCQs",
      correctAnswer: "correct answer"
    }
  ]
};

export default Quiz;
