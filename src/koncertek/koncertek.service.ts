import { Injectable } from '@nestjs/common';
import { CreateKoncertekDto } from './dto/create-koncertek.dto';
import { UpdateKoncertekDto } from './dto/update-koncertek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertekService {
  constructor(private readonly db:PrismaService){}

  create(createKoncertekDto: CreateKoncertekDto) {
    return this.db.koncert.create({
      data:createKoncertekDto
    });
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  findOne(id: number) {
    return this.db.koncert.findUnique({
      where:{
        id: id
      }
    });
  }

  update(id: number, updateKoncertekDto: UpdateKoncertekDto) {
    return this.db.koncert.update({
      where:{
        id: id
      },
      data: updateKoncertekDto
    });
  }

  remove(id: number) {
    return this.db.koncert.delete({
      where:{
        id: id
      }
    });
  }
}
