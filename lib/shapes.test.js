const { Square, Circle, Triangle } = require('./shapes');

describe('Shapes', () => {
    describe('square', () => {
        it('should have the defined qualities of a square', () => {
            const square = new Square();
            square.fill = 'blue'
            expect(square.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue" />')
        })
    })

    describe('circle', () => {
        it('should have the defined qualities of a circle', () => {
            const circle = new Circle();
            circle.fill = 'blue'
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />')
        })
    })

    describe('triangle', () => {
        it('should have the defined qualities of a triangle', () => {
            const triangle = new Triangle();
            triangle.fill = 'blue'
            expect(triangle.render()).toEqual('<polygon points="150,20 280,180 20,180" fill="blue" />')
        })
    })
})
