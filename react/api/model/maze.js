let Cell = require('./cell').model.Cell;

class Maze {
    constructor(structure){
        let cells = createCells(structure.cells,structure.impassableTypes);
        let impassableTypes = structure.impassableTypes;

        cells.getWidth = function(){
            return this.length
        }

        cells.getHeight = function(){
            return this.getFirstElement().length;
        }

        cells.getCell = function(x,y) {
            return this[x][y];
        }

        cells.transpose = function(){
            if (this.getHeight() === 0 || this.getWidth() === 0) { return []; }
    
            let transposedMatrix = [];
            for(let i = 0; i < this.getHeight(); i++) {
                transposedMatrix[i] = [];
                for(let j = 0; j < this.getWidth(); j++) {
                    transposedMatrix[i][j] = this[j][i];
                }
            }
            return transposedMatrix;    
        }

        cells.outOfBoundaries = function(x,y) {
            return (x < 0 || y < 0 || x >= this.getWidth() || y >= this.getHeight())
        }

        cells.getValueOfCell = function(x, y,impassableTypes) {
            if (this.outOfBoundaries(x,y)) return impassableTypes.getFirstElement();
            return this[x][y].value;
        }

        cells.getAllWalkableCells = function() {
            let walkableCells = [];
            this.flat().forEach(function(cell) {
                if (cell.isWalkable) walkableCells.push(cell);  
            });
            return walkableCells;
        }

        function createCells(matrix,impassableTypes){
            let cells = [];
            for(let i = 0; i < matrix.length; i++){
                let row = [];
                for(let j = 0; j < matrix[i].length; j++){
                    row.push(new Cell(i,j,matrix[i][j],impassableTypes));
                }
                cells.push(row);
            }
            return cells;
        }

        function doValidate() {
            let errors = [];
            
            if (!allBordersAreNonWalkable(cells)) 
                errors.push("Hay por lo menos una celda no caminable en los bordes del laberinto");

            if (!allRowsHaveTheSameWidth(cells))
                errors.push("Hay por lo menos una fila con diferente ancho");

            if (!twoAdjacentCellsAreConnected(cells,impassableTypes))
                errors.push("Al menos un par de celdas adyacentes entre sí no están conectadas");

            if (!mazeHasAtLeastTwoWalkableCells(cells))
                errors.push("El laberinto tiene menos de dos celdas caminables");

            if (!allWalkableCellsHaveAtLeastTwoConnectionsToOtherCells(cells,impassableTypes))
                errors.push("Existen menos de dos conexiones entre dos celdas caminables");

            if (!thereIsAnExistingPathBetweenEveryPairOfWalkableCells(cells,impassableTypes))
                errors.push("No existe un camino entre un par de celdas caminables");

            if (!cannotReturnToCellInLessThanFourMoves(cells,impassableTypes))
                errors.push("No se puede volver a la misma celda en menos de cuatro movimientos");

            if (errors.isEmpty()) return "Valid maze";
            else return errors;
        }
        
        function allRowsHaveTheSameWidth(rows){
            return rows.every(hasSameWidth)
        }
    
        function hasSameWidth(array){
            return array.length == cells.getHeight()
        }
    
        function twoAdjacentCellsAreConnected(cells,impassableTypes) {
            let walkableCells = cells.getAllWalkableCells();
            return walkableCells.every(cell => hasAnAdjacentWalkableCell(cell,cells,impassableTypes))
        }
    
        function hasAnAdjacentWalkableCell(cell,cells,impassableTypes){
            return getNeighbors(cell.x,cell.y,cells,impassableTypes).some(cellIsWalkable);
        }
    
        function cellIsWalkable(cell){
            return cell.isWalkable;
        }
    
        function mazeHasAtLeastTwoWalkableCells(cells) {
            return cells.getAllWalkableCells().length > 1
        }

        function cannotReturnToCellInLessThanFourMoves(cells,impassableTypes) {
            let walkableCells = cells.getAllWalkableCells();
            return walkableCells.every(cell => !hasThreeAdjacentWalkableCells(cell,cells,impassableTypes));          
        }
        
        function hasThreeAdjacentWalkableCells(cell,cells,impassableTypes) {
            return getThreeAdjacents(cell,cells,impassableTypes).every(adjacent => adjacent.isWalkable)
        }

        function getThreeAdjacents(cell,cells,impassableTypes){
            return [new Cell(cell.x,cell.y+1,cells.getValueOfCell(cell.x,cell.y+1,impassableTypes),impassableTypes),
                    new Cell(cell.x,cell.y+1,cells.getValueOfCell(cell.x,cell.y+1,impassableTypes),impassableTypes),
                    new Cell(cell.x+1,cell.y+1,cells.getValueOfCell(cell.x+1,cell.y+1,impassableTypes),impassableTypes),
                    new Cell(cell.x+1,cell.y,cells.getValueOfCell(cell.x+1,cell.y,impassableTypes),impassableTypes)];
        }

        function allWalkableCellsHaveAtLeastTwoConnectionsToOtherCells(cells,impassableTypes) {
            let walkableCells = cells.getAllWalkableCells();
            return walkableCells.every(cell => hasAtLeastTwoConnections(cell,cells,impassableTypes))
        }

        function hasAtLeastTwoConnections(cell,cells,impassableTypes){
            return getNeighbors(cell.x,cell.y,cells,impassableTypes).filter(cellIsWalkable).length > 1
        }
    
        function thereIsAnExistingPathBetweenEveryPairOfWalkableCells(cells,impassableTypes) {
            let walkableCells = cells.getAllWalkableCells();
            
            if (!mazeHasAtLeastTwoWalkableCells(cells)) return false;

            for(let i = 0; i < walkableCells.length; i++){
                for(let j = 0; j < walkableCells.length; j++){
                    let visited = [];
                    if (!hasPath(walkableCells[i],walkableCells[j],cells,visited)) return false;
                }
            }
            return true;
        }

        function hasPath(currentCell,endCell,cells,visited) {
            if(!allBordersAreNonWalkable(cells)) return false;
            if(currentCell.equals(endCell)) return true;
            if(!currentCell.isWalkable || visited.hasElement(currentCell)) return false;

            visited.push(currentCell);
        
            if(currentCell.x > 0 && hasPath(cells.getCell(currentCell.x-1,currentCell.y),endCell,cells,visited)) return true
            if(currentCell.x < cells.getWidth() && hasPath(cells.getCell(currentCell.x+1,currentCell.y),endCell,cells,visited)) return true
            if(currentCell.y > 0 && hasPath(cells.getCell(currentCell.x,currentCell.y-1),endCell,cells,visited)) return true
            if(currentCell.y < cells.getHeight() && hasPath(cells.getCell(currentCell.x,currentCell.y+1),endCell,cells,visited)) return true
        
            return false;
        }

        function getNeighbors(x,y,cells,impassableTypes){
            return [new Cell(x,y-1,cells.getValueOfCell(x,y-1,impassableTypes),impassableTypes), 
                    new Cell(x,y+1,cells.getValueOfCell(x,y+1,impassableTypes),impassableTypes), 
                    new Cell(x-1,y,cells.getValueOfCell(x-1,y,impassableTypes),impassableTypes), 
                    new Cell(x+1,y,cells.getValueOfCell(x+1,y,impassableTypes),impassableTypes)];
        }
    
        function allBordersAreNonWalkable(cells){
            return !(cells.getFirstElement().some(cellIsWalkable) ||
                    cells.getLastElement().some(cellIsWalkable) ||
                    cells.transpose().getFirstElement().some(cellIsWalkable) ||
                    cells.transpose().getLastElement().some(cellIsWalkable));
        }
    
        let publicAPI = {
            validate: doValidate
        };
    
        return publicAPI;

    }
}

Array.prototype.isEmpty = function() {
    return this.length == 0
}

Array.prototype.isNotEmpty = function() {
    return this.length > 0 
};

Array.prototype.flat = function() {
    return [].concat.apply([], this);
}

Array.prototype.getFirstElement = function() {
    return this[0];
}

Array.prototype.getLastElement = function() {
    return this[this.length-1];
}

Array.prototype.hasElement = function(elementToFind) {
    return this.some(element => element.equals(elementToFind));
}

module.exports.model = {};
module.exports.model.Maze = Maze;