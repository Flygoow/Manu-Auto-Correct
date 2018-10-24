var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Merci|'+
                        'Mercy|'+
                        'Mrc|');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, '🤙 É mercé hein 🤙');
}

document.title = document.title.replace(rExp, '🤙 É mercé hein 🤙');
