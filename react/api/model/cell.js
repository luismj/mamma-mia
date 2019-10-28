
class Cell {
    constructor(x,y,value,impassableTypes){
        this.x = x;
        this.y = y;
        this.value = value;
        this.isWalkable = isWalkable(impassableTypes,value);
        
        function isWalkable(impassableTypes,value){ 
            return !impassableTypes.includes(value)
        }

        this.equals = function(anotherCell) {
            return (this.x === anotherCell.x && this.y === anotherCell.y)
        }
    }
}

module.exports.model = {};
module.exports.model.Cell = Cell;