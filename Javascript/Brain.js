//import data
function reqListener () {
  console.log(this.responseText);
}
/*var handReq = new XMLHttpRequest();
oReq.addEventListener("load",reqListener);
oReq.open("GET", "https://casino.gnmerritt.net/");
oReq.send();  */

//var testHandData = JSON.parse(~/Users/Zachariah/sources/JavaScript/TestData);
var MATCH = {"initial_stacks": {"bot_1": 1075, "bot_0": 925}, "actions": [{"player": "bot_1", "data": ["3d", "4c"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_0", "data": ["Tc", "9s"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_1", "data": 10, "event": "Call", "ts": 1454636290}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636290}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636290}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636290}, {"player": "TABLE", "data": ["8c", "As", "Kd"], "event": "CARDS", "ts": 1454636290}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636290}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636291}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636291}, {"player": "TABLE", "data": ["8c", "As", "Kd", "5s"], "event": "CARDS", "ts": 1454636291}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636291}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636291}, {"player": "TABLE", "data": ["8c", "As", "Kd", "5s", "Qs"], "event": "CARDS", "ts": 1454636291}, {"player": "bot_1", "data": 0, "event": "Check", "ts": 1454636291}, {"player": "bot_0", "data": 0, "event": "Check", "ts": 1454636292}, {"player": "TABLE", "data": ["bot_1", "bot_0"], "event": "REMAINING", "ts": 1454636292}, {"player": "TABLE", "data": 40, "event": "POT", "ts": 1454636292}]};
var pot = MATCH.TABLE.player.data;