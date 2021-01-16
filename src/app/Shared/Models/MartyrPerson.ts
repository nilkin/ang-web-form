import { IChildren } from "./Children";
import { IApartment } from "./IApartment";
import { IReward } from "./Reward";

export interface MartyrPerson {
    contactInfo: string
    name: string
    surname: string
    fathername: string
    birthdate: string
    fin: string
    familyAddress: string
    dateOfMartyrdomOrVeteran: string
    regionId: number
    identityPhotoId: string
    children: IChildren[]
    rewards: IReward[]
    apartments: IApartment[]
  }