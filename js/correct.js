var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Merci', 'gi');
const mExp = new RegExp('merci', 'gi');
const pExp = new RegExp('MERCI', 'gi');
const fExp = new RegExp('👍', 'gi');

while(textNode=walk.nextNode()) {
  textNode.nodeValue = textNode.nodeValue.replace(rExp, 'É mercé 🤙');
  textNode.nodeValue = textNode.nodeValue.replace(mExp, 'é mercé 🤙');
  textNode.nodeValue = textNode.nodeValue.replace(pExp, 'É MERCÉ 🤙');
  textNode.nodeValue = textNode.nodeValue.replace(fExp, '👍');
}

document.title = document.title.replace(rExp, 'É mercé 🤙');
document.title = document.title.replace(mExp, 'é mercé 🤙');
document.title = document.title.replace(pExp, 'É MERCÉ 🤙');
document.title = document.title.replace(fExp, '👍');
