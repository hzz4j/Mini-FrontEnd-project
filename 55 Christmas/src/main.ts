import "./style.scss";

class Snowflake {
  public static flakes: Snowflake[] = [];
  public static flakesTotal = 250;
  public size: number;
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public div: HTMLDivElement;
  public hit: boolean;
  public melt: boolean;

  constructor(size: number, x: number, y: number, vx: number, vy: number) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.hit = false;
    this.melt = false;
    this.div = document.createElement("div");
    this.div.classList.add("snowflake");
    this.div.style.width = this.size + "px";
    this.div.style.height = this.size + "px";
  }

  public move() {
    this.x += this.vx + Math.min(Math.max(0, -10), 10);
    this.y += this.vy;
    // Wrap the snowflake to within the bounds of the page
    if (this.x > window.innerWidth + this.size) {
      this.x -= window.innerWidth + this.size;
    }

    if (this.x < -this.size) {
      this.x += window.innerWidth + this.size;
    }

    if (this.y > window.innerHeight + this.size) {
      this.x = Math.random() * window.innerWidth;
      this.y -= window.innerHeight + this.size * 2;
      this.melt = false;
    }
  }
  public draw() {
    this.div.style.transform =
      "translate3d(" + this.x + "px" + "," + this.y + "px,0)";
  }

  public static init(container: HTMLDivElement) {
    for (let i = this.flakesTotal; i--; i > 0) {
      let size = (Math.random() + 0.2) * 12 + 1;
      let flake = new Snowflake(
        size,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() - 0.5,
        size * 0.3
      );
      container.appendChild(flake.div);
      this.flakes.push(flake);
    }
    this.update();
    console.log("Over");
  }

  public static update() {
    for (let i = 250; i--; ) {
      let flake = this.flakes[i];
      flake.move();
      flake.draw();
    }
    requestAnimationFrame(this.update.bind(this));
  }
}

window.onload = () => {
  setTimeout(() => {
    // let snowflake = new Snowflake(0, 0, 0, 0, 0);
    Snowflake.init(document.getElementById("snow")! as HTMLDivElement);
  }, 100);
};
