var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Merci|'+
                        'Mercy|'+
                        'Mrc|');
const pExp = new RegExp('👍');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'É mercé');
    textNode.nodeValue = textNode.nodeValue.replace(pExp, '🤙');
}

document.title = document.title.replace(rExp, 'É mercé');
document.title = document.title.replace(pExp, '🤙');
