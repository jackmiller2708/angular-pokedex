import { IAnimation, IScene } from '../interfaces';

const MIN_SPEED = 0.1;
const MAX_SPEED = 0.5;

export class Cloud implements IAnimation {
  private _opacity: number;
  private _speed: number;
  private _size: number;
  private _x: number;
  private _y: number;

  readonly backgroundColor: string;

  constructor(private readonly _scene: IScene) {
    this._opacity = Math.random();
    this._speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
    this._size = Math.random() * 100 + 50 * (_scene.height / 500);

    this._x = Math.random() * _scene.width;
    this._y = Math.random() * _scene.height;

    this.backgroundColor = '#87ceeb';
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(255, 255, 255, ${this._opacity})`;
    ctx.beginPath();

    ctx.arc(this._x, this._y, this._size / 2, 0, Math.PI * 2);

    ctx.arc(this._x - this._size * 0.35, this._y - this._size * 0.2, this._size * 0.4, 0, Math.PI * 2);
    ctx.arc(this._x + this._size * 0.2, this._y - this._size * 0.3, this._size * 0.3, 0, Math.PI * 2);
    ctx.arc(this._x + this._size * 0.3, this._y + this._size * 0.1, this._size * 0.4, 0, Math.PI * 2);

    ctx.closePath();
    ctx.fill();
  }

  update(): void {
    this._x += this._speed;

    if (this._x > this._scene.width) {
      this._x = -this._size;
      this._y = Math.random() * this._scene.height;
      this._size = Math.random() * 100 + 50 * (this._scene.height / 500);
      this._opacity = Math.random();
      this._speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
    }
  }

  animate(ctx: CanvasRenderingContext2D): void {
    const clouds = Array.from({ length: 10 }, () => new Cloud(this._scene));

    const _animate = () => {
      ctx.clearRect(0, 0, this._scene.width, this._scene.height);

      for (const cloud of clouds) {
        cloud.update();
        cloud.draw(ctx);
      }

      requestAnimationFrame(_animate);
    };

    _animate();
  }
}
