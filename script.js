
const resizeBtn = document.getElementById('resize')
resizeBtn.addEventListener('click', () => {
        let gridSize = prompt('Select new grid size (1-100):' );
        if (gridSize > 100 || gridSize < 1) {
                confirm('Grid size has to be in the range (1-100)!')
                return
        }
        resize(gridSize)
})

function resize(gridSize) {
        const container = document.querySelector('.container')
        container.innerHTML = ''
        for (let x = 0; x < gridSize; x++) {
                const row = document.createElement('div')
                row.classList.add('row')
                for (let y = 0; y < gridSize; y++) {
                        const cell = document.createElement('div')
                        cell.classList.add('cell')
                        cell.addEventListener('mouseover', () => {
                                cell.classList.add('hovered')
                        })
                        row.appendChild(cell)
                }
                container.appendChild(row)
        }
}

resize(16)
