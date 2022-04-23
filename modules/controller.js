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
       
        this.game.createUpdatePanels(this.view.createBlockScore(), this.view.createBlockNextTetramino());

        const tick = () => {
            const time = (1100 - 100 * this.game.level);
            if(this.game.gameOver) {
                const overlay = document.createElement('div');
                const container = document.querySelector('.container');
                const gameOverText = document.createElement('div');
                overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 999;
                background-color: #0000000F;
                display: flex;
                align-items: center;
                justify-content: center;
                `;
                gameOverText.style.cssText = `
                text-align: center;
                color: red; 
                font-size: 3em;
                font-weight: 700;
                `;
                gameOverText.textContent = 'GAME OVER';
                overlay.append(gameOverText);

                container.append(overlay);
                overlay.addEventListener('click', ()=>{
                    
                    //this.view.init();
                    this.view.preview();
                    this.game.restart();
                    overlay.remove();
                    
                });
                return;  
            }
            setTimeout(()=>{
                this.game.moveDown();
                this.view.showArea(this.game.viewArea);
                tick();
            }, time > 100 ? time: 100);
        };

        tick();

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
                    debugger;
                    this.game.rotateTetramino();
                    this.view.showArea(this.game.viewArea);
                    break;
            }
        });
    }
}