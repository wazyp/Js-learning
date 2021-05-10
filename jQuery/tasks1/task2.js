let $linkList = $('.link-list');
let $boxContainer = $('.box-container');

$('<div id="foo" class="box red"></div>').insertBefore($boxContainer.children()[1]);

let $temp = $linkList.prev($boxContainer);
$linkList.insertBefore($temp);

$linkList.append('<a href="#" class="link4">new link</a>');
