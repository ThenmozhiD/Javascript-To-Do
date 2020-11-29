/*
 This function is called to build the card form
 */
function buildCardTitleForm() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem-title-wrapper">' +
		'<textarea placeholder="Card Title" class="toDo-new-card-title-input" type="text"></textarea>' +
		'<textarea placeholder="Card Description" class="toDo-new-card-desc-input" type="text"></textarea>' +
		'<input class="toDo-new-card-title-submit" type="submit" value="Add">' +
		'</div>'
	node.style.display = 'none'
	return node
}