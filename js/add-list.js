//This function will called on adding the list on the board
function addListtoDo(board) {
	return function () {
		let titleInput = document.getElementById('toDo-list-input')

		document.getElementById('toDo-list-title-submit').onclick = titleButtonClick
		board.titleFormNode.style.display = 'block'
		titleInput.focus()

		function titleButtonClick(evt) {
			debugger;
			evt.preventDefault()
			let title = titleInput.value.trim()
				, index = board.lists.length - 1
				, list

			board.titleFormNode.style.display = 'none'
			titleInput.value = ''
			if (!title) {
				return
			}

			list = new List(board, title, index)
			board.lists.splice(index, 0, list)
			board.listsNode.insertBefore(list.node,
				board.lists[index + 1].node)
			board.lists[index + 1].titleNode.setAttribute('list-index', index + 1)
		}
	}
}