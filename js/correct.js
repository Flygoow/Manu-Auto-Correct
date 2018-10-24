var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Merci|'+
                        'Mercy|'+
                        'Mrc|');
const zExp = new RegExp('merci|'+
                        'mercy|'+
                        'mrc|');
const eExp = new RegExp('MERCI|'
                        +'MERCY|'
                        +'MRC|');
const pExp = new RegExp('👍');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'É mercé');
    textNode.nodeValue = textNode.nodeValue.replace(zExp, 'é mercé');
    textNode.nodeValue = textNode.nodeValue.replace(eExp, 'É MERCÉ');
    textNode.nodeValue = textNode.nodeValue.replace(pExp, '🤙');
}

document.title = document.title.replace(rExp, 'É mercé');
document.title = document.title.replace(zExp, 'é mercé');
document.title = document.title.replace(eExp, 'É MERCÉ');
document.title = document.title.replace(pExp, '🤙');
