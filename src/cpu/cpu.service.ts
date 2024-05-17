import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(x: number, y: number) {
    this.powerService.supplyPower(25);
    console.log('using 25 watts of power from Power Service');

    return x * y;
  }
}
