'use strict;'

const SIZE_BLOCK = 30;

//engine
const game = {
    area: [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
        ['x', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'o', 'o',],
        ['x', 'x', 'o', 'x', 'x', 'o', 'x', 'x', 'x', 'o',],       
    ],
    activeTetramino: {
        x: 3,
        y: 0,
        block: [
            ['o', 'x', 'o'],
            ['o', 'x', 'o'],
            ['o', 'x', 'x'],
        ],
    },
    moveLeft(){
        this.activeTetramino.x -= 1;
    },
    moveRight(){
        this.activeTetramino.x += 1;
    },
    moveDown(){
        this.activeTetramino.y += 1;
    },
    rotateTetramino(){

    },
    get viewArea(){
        //копируем игровую область в массив
        const area = JSON.parse(JSON.stringify(this.area));
        const {x, y, block: tetramino} = this.activeTetramino;
        for (let i = 0; i < tetramino.length; i++ ){
            const row = tetramino[i];
            for (let j = 0;j < row.length; j++){
                if(row[j] === 'x'){
                    area[y + i][x + j] = tetramino[i][j];
                }
            }
        }
        return area;
    }
};

//game.viewArea();

//rendering
const container = document.querySelector('.container');

const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);

canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');

const showArea = (area) => {
    for (let y = 0; y < area.length; y++){
        const line = area[y];

        for (let x = 0; x < line.length; x++){
            const block = line[x];
            if(block ===  'x'){
                context.fillStyle = '#66ff66';
                context.strokeStyle = 'white';
                context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
                context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
                
            }
        } 
    }
    
};

showArea(game.viewArea);