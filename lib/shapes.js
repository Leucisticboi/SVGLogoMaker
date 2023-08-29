class Shape {
    constructor(fill) {
        this.fill = fill;
    }
}

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.fill}" />`;
    }
}

class Triangle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.fill}" />`;
    }
}

class Square extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.fill}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
