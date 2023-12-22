import { IAnimation, IScene } from '../interfaces';

export class Snowflake implements IAnimation {
  private readonly _ySpeed: number;
  private readonly _xSpeed: number;
  private readonly _opacity: number;
  private readonly _radius: number;

  private _x: number;
  private _y: number;

  constructor(private readonly _scene: IScene) {
    this._opacity = Math.random();
    this._ySpeed = Math.random() * 2 + 1;
    this._xSpeed = (Math.random() - 0.2) * 2;
    this._radius = Math.random() * 3 + 1;

    this._x = Math.random() * _scene.width;
    this._y = Math.random() * _scene.height;
  }

  update(): void {
    this._y += this._ySpeed;
    this._x += this._xSpeed;

    if (this._y > this._scene.height) {
      this._y = 0;
      this._x = Math.random() * this._scene.width;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this._opacity})`;
    ctx.fill();
  }

  animate(ctx: CanvasRenderingContext2D): void {
    const snowflakes: Snowflake[] = [];

    for (let i = 0; i < 100; i++) {
      snowflakes.push(new Snowflake(this._scene));
    }

    const _animate = () => {
      ctx.clearRect(0, 0, this._scene.width, this._scene.height);

      for (const snowflake of snowflakes) {
        snowflake.update();
        snowflake.draw(ctx);
      }

      requestAnimationFrame(_animate);
    };

    _animate();
  }
}
