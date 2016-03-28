

var MATCH = {"initial_stacks": {"bot_1": 1075, "bot_0": 925}, "actions": [{"player": "bot_1", "data": ["3d", "4c"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_0", "data": ["Tc", "9s"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_1", "data": 10, "event": "Call", "ts": 1454636290}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636290}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636290}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636290}, {"player": "TABLE", "data": ["8c", "As", "Kd"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636290}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636291}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636291}, {"player": "TABLE", "data": ["8c", "As", "Kd", "5s"], "event": "CARDS", "ts": 1454636291}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636291}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636291}, {"player": "TABLE", "data": ["8c", "As", "Kd", "5s", "Qs"], "event": "CARDS", "ts": 1454636291}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636292}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636292}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636292}]};

var currentAction = 0;

function NextActionButton(){
  GeneralButton(1);
}

function PreviousActionButton(){
  GeneralButton(-1);
}

function GeneralButton(buttonDirection){
    if(MATCH.actions[currentAction].event === "POT"){
      Pot(currentAction);
      currentAction += buttonDirection;
    }else if(MATCH.actions[currentAction].event === "CARDS" || MATCH.actions[currentAction].event === "REMAINING"){
      Table(currentAction);
      currentAction += buttonDirection;
    }else{
      Raise(currentAction);
      currentAction += buttonDirection;
    }
}

function Pot(currentAction){
  var potSize=0;
  if(potSize<MATCH.actions[currentAction].data){
    potSize = MATCH.actions[currentAction].data;
    console.log("Pot: " + potSize);

  }
  return potSize;
}

function Raise(currentAction){
  var player = MATCH.actions[currentAction].player;;
  var raise = MATCH.actions[currentAction].data;
  if(raise === 0){
    console.log(player + " checked.");
  }else{
    console.log(player + " raised " + raise);
  }
  return raise;
}

function Table(currentAction){
  var table = MATCH.actions[currentAction].data;
  var player = MATCH.actions[currentAction].player;
  if(player != "TABLE"){
    console.log(player + " has the cards " + table);
  }else{
    if(table.length === 3){
      console.log("The flop is " + table);
      //react stuff will go here
    }else if(table.length === 4){
      console.log("The turn is " + table[3]);
    }else if(table.length === 5){
      console.log("The river is " + table[4]);
    }else if(MATCH.actions[currentAction].player === "REMAINING"){
      currentAction +=1;
    }
  }
  return table;
}



console.log("Hello from javascript land");
