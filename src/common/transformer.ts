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
      return "Need Label - 不明";
    }
  }

  getLabelAccrodingToTimeDifference(timeDifference: number): string {
    // Determine if display detail days needed.
    return `${Math.round(timeDifference / DAY)}Need Label - 日`;
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
