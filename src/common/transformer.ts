import AppContext from "./appContext";
import { Coordinate } from "../modal/deal";

const HOUR = 1000 * 60 * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export default class Transformer {
  constructor(private readonly _lables: any) {}
  timeDifferentCalcualtor(timestamp: number): string {
    if (timestamp) {
      let currentDate: Date = new Date();
      let dateCreated: Date = new Date(timestamp);
      let timeDifference: number =
        currentDate.getTime() - dateCreated.getTime();
      return this.getLabelAccrodingToTimeDifference(timeDifference);
    } else {
      console.warn("timestamp error: ", timestamp);
      return this._lables.date.unknown;
    }
  }

  getLabelAccrodingToTimeDifference(timeDifference: number): string {
    // Determine if display detail days needed.
    const dayDifferent = Math.round(timeDifference / DAY);
    return dayDifferent > 0
      ? `${dayDifferent}${this._lables.date.day}`
      : this._lables.date.today;
  }

  getCurrentLocation(callBack: any): void {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      let { latitude, longitude } = position.coords;
      let currentPosition: Coordinate = {
        latitude,
        longitude
      };
      callBack(currentPosition);
    });
  }
}
