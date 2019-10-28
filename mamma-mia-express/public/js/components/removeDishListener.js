function removeDish() {
    targetDiv = event.target.parentNode.parentNode
    container = targetDiv.parentNode
    container.remove(targetDiv)
}