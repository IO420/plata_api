import { IsDate, IsNumber, IsString } from 'class-validator';

export class storageDto{
  @IsString()
  type: string;

  @IsNumber()
  id_user: number;

  @IsDate()
  date_update: Date;
}
