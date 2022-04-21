export class Controller {
    constructor(game, view){
        this.game = game;
        this.view = view;        

        //this.view.init()
        //this.view.showArea(this.game.viewArea)
    }
    init(codeKey) {
        window.addEventListener('keydown', e => {
            if(e.code === codeKey){
                this.view.init();
                this.start();
            }
        });
    }


    start(){
        this.view.showArea(this.game.viewArea);

        setInterval(()=>{
            this.game.moveDown();
            this.view.showArea(this.game.viewArea);
        }, 1000);


        window.addEventListener('keydown', (e) => {
            const key = e.code;
            switch(key){
                case 'ArrowLeft':
                    this.game.moveLeft();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowRight':
                    this.game.moveRight();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowDown':
                    this.game.moveDown();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowUp':
                    this.game.rotateTetramino();
                    this.view.showArea(this.game.viewArea);
                    break;
            }
        });
    }
}