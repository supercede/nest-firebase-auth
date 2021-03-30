import { Controller, Get, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get('')
  @UseGuards(FirebaseAuthGuard)
  getAll() {
    return this.resourcesService.getAll();
  }
}
