var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Merci');
const mExp = new RegExp('merci');
const pExp = new RegExp('MERCI');

while(textNode=walk.nextNode()) {
  textNode.nodeValue = textNode.nodeValue.replace(rExp, '🤙 É mercé hein 🤙');
  textNode.nodeValue = textNode.nodeValue.replace(mExp, '🤙 é mercé hein 🤙');
  textNode.nodeValue = textNode.nodeValue.replace(pExp, '🤙 É MERCÉ HEIN 🤙');
}

document.title = document.title.replace(rExp, '🤙 É mercé hein 🤙');
document.title = document.title.replace(mExp, '🤙 é mercé hein 🤙');
document.title = document.title.replace(pExp, '🤙 É MERCÉ HEIN 🤙');
