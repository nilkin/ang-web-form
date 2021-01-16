import { IPhoto } from "./Photo";

export interface IApartment {
    peopleCount: number
    totalArea: number
    roomCount: number
    hasDocument: boolean
    photos: IPhoto[]
  }