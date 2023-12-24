import { IAnimation, IScene } from '../interfaces';

export class Star implements IAnimation {
  private readonly _blinkSpeed: number;
  private readonly _radius: number;

  private _direction: number;
  private _opacity: number;
  private _x: number;
  private _y: number;

  readonly backgroundColor: string;

  constructor(private readonly _scene: IScene) {
    this._x = Math.random() * _scene.width;
    this._y = Math.random() * _scene.height;
    this._radius = Math.random() * 2 + 1;
    this._opacity = Math.random();
    this._blinkSpeed = Math.random() * 0.02 + 0.01;
    this._direction = Math.random() > 0.5 ? 1 : -1;

    this.backgroundColor = 'linear-gradient(to bottom, #001f3f, #003366)';
  }

  update() {
    this._opacity += this._blinkSpeed * this._direction;

    if (this._opacity > 1 || this._opacity < 0) {
      this._direction *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.update();

    ctx.beginPath();
    ctx.moveTo(this._x, this._y - this._radius - 5);
    ctx.lineTo(this._x + this._radius + 5, this._y);
    ctx.lineTo(this._x, this._y + this._radius + 5);
    ctx.lineTo(this._x - this._radius - 5, this._y);
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 255, 204, ${this._opacity * 0.2})`; // Light yellow color with reduced _opacity
    ctx.fill();

    // Draw the star
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 204, ${this._opacity})`; // Light yellow color
    ctx.fill();
  }

  animate(ctx: CanvasRenderingContext2D): void {
    const stars: Star[] = [];

    for (let i = 0; i < 50; i++) {
      stars.push(new Star(this._scene));
    }

    const _animate = () => {
      ctx.clearRect(0, 0, this._scene.width, this._scene.height);

      for (const star of stars) {
        star.draw(ctx);
      }

      requestAnimationFrame(_animate);
    };

    _animate();
  }
}
