import { Holiday } from './index';

export interface Employee {
  id: number;
  imageUrl: string;
  name: string;
  username: string;
  daysOff: number;
  email: string;
  password: string;
  sex: string;
  position: string;
  phone: string;
  holiday: Holiday;
}
