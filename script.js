const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

let isDragging = false

container.addEventListener('mouseenter', () => {
  isDragging = false
})

container.addEventListener('mouseleave', () => {
  isDragging = false
})

container.addEventListener('mousedown', () => {
  isDragging = true
})

container.addEventListener('mouseup', () => {
  isDragging = false
})

container.addEventListener('mousemove', event => {
  if (isDragging) {
    const square = event.target
    if (square && square.classList.contains('square')) {
      setColor(square)
    }
  }
})

container.addEventListener('touchstart', () => {
  isDragging = true
})

container.addEventListener('touchend', () => {
  isDragging = false
})

container.addEventListener('touchmove', event => {
  if (isDragging) {
    const touch = event.touches[0]
    const square = document.elementFromPoint(touch.clientX, touch.clientY)
    if (square && square.classList.contains('square')) {
      setColor(square)
    }
  }
})

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseenter', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

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
