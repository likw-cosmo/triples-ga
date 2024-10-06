/** A script that can be used to do a lucky draw by providing a list of names, then remove the name and finally the last one is the winner */
const fs = require('fs');

const listOfNames = ["John", "Alice", "Bob", "Charlie", "David"];

function eliminateName(nameList) {
  const indexToRemove = Math.floor(Math.random() * nameList.length);
  nameList.splice(indexToRemove, 1);
  return nameList;
}

function saveList(nameList) {
  fs.writeFileSync('tmp/list.json', JSON.stringify(nameList));
}

function loadList() {
  try {
    return JSON.parse(fs.readFileSync('tmp/list.json'));
  } catch (err) {
    return listOfNames;
  }
}

const currentList = loadList();

if (currentList.length > 1) {
  const updatedList = eliminateName(currentList);
  saveList(updatedList);
  console.log('Updated List:', updatedList);
} else {
  console.log('The winner is:', currentList[0]);
}