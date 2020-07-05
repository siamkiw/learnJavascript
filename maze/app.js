const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter

const cellsHorizontal = 4
const cellsVertical = 4
const width = window.innerWidth
const height = window.innerHeight

const unitLengthX = width / cellsHorizontal
const unitLengthY = height / cellsVertical

const engine = Engine.create()
engine.world.gravity.y = 0
const { world } = engine
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: width,
        height: height,
        wireframes: false
    }
})

Render.run(render)
Runner.run(Runner.create(), engine)

const walls = [
    Bodies.rectangle(width / 2, 0, width, 5, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 5, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 5, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 5, height, { isStatic: true })
]

World.add(world, walls)

const shuffle = (array) => {
    let counter = array.length;
    while (counter > 0) {
        randomIndex = Math.floor(Math.random() * counter)
        counter--

        const temp = array[counter]
        array[counter] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}

const grid = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHorizontal).fill(false))
const vertical = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHorizontal - 1).fill(false))
const horizontails = Array(cellsVertical - 1)
    .fill(null)
    .map(() => Array(cellsHorizontal).fill(false))

const startRow = Math.floor(Math.random() * cellsVertical)
const startColumn = Math.floor(Math.random() * cellsHorizontal)

const stepThroughCell = (row, column) => {
    // check if visted the cell at [row][column] then return 
    if (grid[row][column]) {
        return
    }
    // mark this cell as vsited 
    grid[row][column] = true
    // random  which  way to go  above, right, below, left, 
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ])

    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, dricrtion] = neighbor

        // if neighbors is not out of bounds (wall)
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue
        }
        // if we have visted that neighbor, continue to the next neighbor
        if (grid[nextRow][nextColumn]) {
            continue
        }
        // remove wall by update vertical and horizontails
        if (dricrtion === 'left') {
            vertical[row][column - 1] = true
        } else if (dricrtion === 'right') {
            vertical[row][column] = true
        } else if (dricrtion === 'up') {
            horizontails[row - 1][column] = true
        } else if (dricrtion === 'down') {
            horizontails[row][column] = true
        }

        stepThroughCell(nextRow, nextColumn)
    }

}

stepThroughCell(startRow, startColumn)

horizontails.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) return
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            1,
            {
                isStatic: true, label: 'wall',
                render: {
                    fillStyle: 'red'
                }
            }
        )
        World.add(world, wall)
    })

})

vertical.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) return
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            1,
            unitLengthY,
            {
                isStatic: true, label: 'wall',
                render: {
                    fillStyle: 'red'
                }
            }
        )
        World.add(world, wall)
    })
})

const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * 0.7,
    unitLengthY * 0.7,
    {
        isStatic: true,
        label: 'goal',
        render: {
            fillStyle: 'red'
        }
    }
)
World.add(world, goal)

const ballRadius = (Math.min(unitLengthX, unitLengthY) / 2) * 0.7
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    { label: 'ball' }
)
World.add(world, ball)

document.body.addEventListener('keydown', event => {
    const { x, y } = ball.velocity
    if (event.key === 'w') {
        Body.setVelocity(ball, { x, y: y - 3 })
    }
    if (event.key === 'a') {
        Body.setVelocity(ball, { x: x - 3, y: y })
    }
    if (event.key === 's') {
        Body.setVelocity(ball, { x: x, y: y + 3 })
    }
    if (event.key === 'd') {
        Body.setVelocity(ball, { x: x + 3, y: y })
    }
})

// win condition

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
        const labels = ['ball', 'goal']
        if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            console.log('user won')
            console.log(world.bodies)
            world.gravity.y = 1
            world.bodies.forEach(body => {
                if (body.label === 'wall')
                    Body.setStatic(body, false)
            })
            document.querySelector('.winner').classList.remove('hidden')
        }
    })
})