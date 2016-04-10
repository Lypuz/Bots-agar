var names = {};

names.nameList = [
    "JolongaBR",
    "JolongaBR Subs",
    "JolongaBR Ytube",
    "Skype:Jolongabr",
    "use tag 【ĴŁǤ】"
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
