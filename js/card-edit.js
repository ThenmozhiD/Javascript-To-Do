let cardEdit =
{
	node: document.getElementById('card-edit')
	, windowOverlay: document.getElementById('container-main')
	, titleNode: document.getElementById('card-edit-title')
	, descNode: document.getElementById('card-edit-Desc')
	, card: undefined
}

cardEdit.clearInputs = function () {
	cardEdit.titleNode.value = '';
	cardEdit.descNode.value = '';
}

//This will called on the close button
cardEdit.close = function () {
	cardEdit.card = undefined
	cardEdit.clearInputs()
	cardEdit.node.style.display = 'none'
	cardEdit.windowOverlay.style.display = 'none'
}

//This function will show the edited text on the card on submit
cardEdit.show = function () {
	cardEdit.windowOverlay.style.display = 'block'
	cardEdit.node.style.display = 'block'
}

//This function will submit the edited text
cardEdit.submit = function (evt) {
	evt.preventDefault()
	let title = cardEdit.titleNode.value.trim();
	let desc = cardEdit.descNode.value.trim();
	if (title) {
		cardEdit.card.title = title;
		cardEdit.card.titleNode.replaceChild(document.createTextNode(title),
			cardEdit.card.titleNode.childNodes[0])
	}
	if (desc) {
		cardEdit.card.desc = desc;
	}
	cardEdit.close()
}