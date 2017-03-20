class Game {
  constructor() {
    this.setScene(IntroScene);
    this.initInput();
    this.startLoop();
  }
  initInput() {
    this.keys = {};
    document.addEventListener('keydown', e => { this.keys[e.which] = true; });
    document.addEventListener('keyup', e => { this.keys[e.which] = false; });
  }
  setScene(Scene) {
    this.activeScene = new Scene(this);
  }
  update(dt) {
    this.activeScene.update(dt);
  }
  render(dt) {
    this.activeScene.render(dt, this.ctx, this.canvas);
  }
}

var audio = new Audio()
audio.src = 'xzibit-019-xzibit-lax_(mp3.cc).mp3'

function Play() 
{
    audio.play()
}

function Stop() 
{
    audio.pause()
}