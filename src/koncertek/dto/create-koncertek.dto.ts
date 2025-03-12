import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsDefined, IsNumber, IsOptional, IsString, MinDate } from "class-validator";

export class CreateKoncertekDto {
    @IsString()
    @IsDefined()
    fellepo: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    @IsDefined()
    @MinDate(new Date(), { message: 'A kezdési idő nem lehet a múltban.' })
    kezdesiIdo: Date;

    @IsNumber()
    @IsDefined()
    idotartam: number;

    @IsOptional()
    @IsBoolean()
    elmarad?: boolean;
}