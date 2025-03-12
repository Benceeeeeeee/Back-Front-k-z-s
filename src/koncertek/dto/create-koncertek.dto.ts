import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsDefined, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateKoncertekDto {
    @IsString()
    @IsDefined()
    fellepo: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    @IsDefined()
    kezdesiIdo: Date;

    @IsNumber()
    @IsDefined()
    idotartam: number;

    @IsOptional()
    @IsBoolean()
    elmarad?: boolean;
}