/*
 This function will add the Card in the list
 */

function addCardtoDo(list) {
	return function () {
		let titleTextarea = list.titleFormNode
			.getElementsByClassName('toDo-new-card-title-input')[0]
		let descTextarea = list.titleFormNode
			.getElementsByClassName('toDo-new-card-desc-input')[0]
		list.titleFormNode.getElementsByClassName('toDo-new-card-title-submit')[0]
			.onclick = titleSubmit
		list.titleFormNode.style.display = 'block';
		titleTextarea.focus();

		function titleSubmit(evt) {
			evt.preventDefault()
			let title = titleTextarea.value.trim(),
			desc = descTextarea.value.trim()
				, card;

			list.titleFormNode.style.display = 'none';
			titleTextarea.value = '';
			descTextarea.value = '';
			if (!title) {
				return
			}
			debugger;
				card = new Card(list, title, desc);
			list.board.registerCard(card, list.cards.length);
			list.cardsNode.insertBefore(card.node, list.cards[list.cards.length - 1].node);
			list.cards.push(card);
		}
	}
}