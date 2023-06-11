const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  square.addEventListener('touchstart', () => setColor(square))
  square.addEventListener('touchmove', event => handleTouchMove(event, square))
  square.addEventListener('touchend', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function handleTouchMove(event, element) {
  event.preventDefault()
  const touch = event.touches[0]
  const rect = element.getBoundingClientRect()

  if (
    touch.clientX >= rect.left &&
    touch.clientX <= rect.right &&
    touch.clientY >= rect.top &&
    touch.clientY <= rect.bottom
  ) {
    setColor(element)
  } else {
    removeColor(element)
  }
}
