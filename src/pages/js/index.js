import { getBrowser } from '../../utils/utils'
var a = 0;
let b = 1;
console.log(getBrowser)
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    play() {
        console.log("Hello World");
    }
}
let yes = new point(1, 2)
yes.play()