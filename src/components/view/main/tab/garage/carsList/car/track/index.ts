import { animateTransition, drawElement } from 'utils';
import './carTrack.scss';

class CarTrack {
  public container = drawElement({ tag: 'div', classList: 'car-track' });

  private carImage = drawElement({ tag: 'div', classList: 'car-img' });

  private carAnimation: Animation | null = null;

  constructor(carColor: string) {
    this.setCarColor(carColor);
    this.container.append(this.carImage);
  }

  public setCarColor(color: string) {
    this.carImage.style.backgroundColor = color;
  }

  public async animateCar(velocity: number): Promise<number | void> {
    const trackLength = this.container.offsetWidth - this.carImage.offsetWidth;
    const sizeCoefficient = 1000 / this.container.offsetWidth;
    const speedCoefficient = 1000;
    const duration = (trackLength / velocity) * sizeCoefficient * speedCoefficient;
    const animationFrames = [
      {
        transform: 'translateX(0)',
      },
      {
        transform: `translateX(${trackLength}px)`,
      },
    ];

    this.carAnimation = this.carImage.animate(animationFrames, duration);

    return Promise.resolve(this.carAnimation.finished)
      .then(() => {
        this.carImage.style.transform = `translateX(${trackLength}px)`;

        if (this.carAnimation && this.carAnimation.currentTime) {
          const animationTime = +this.carAnimation.currentTime;
          return parseFloat((animationTime / 1000).toFixed(2));
        }
        return undefined;
      })
      .catch(() => undefined);
  }

  public stopCarAnimation(): void {
    this.carAnimation?.pause();
  }

  public reset(): void {
    animateTransition(this.carImage, () => {
      this.carAnimation?.cancel();
      this.carImage.style.transform = 'translateX(0)';
      this.carAnimation = null;
    });
  }
}

export default CarTrack;
