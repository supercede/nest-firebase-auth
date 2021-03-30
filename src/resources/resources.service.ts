import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourcesService {
  private readonly resources: any[];

  constructor() {
    this.resources = [
      {
        quote: 'They taste like...burning.',
        character: 'Ralph Wiggum',
      },
      {
        quote: 'My eyes! The goggles do nothing!',
        character: 'Rainier Wolfcastle',
      },
      {
        quote:
          "Hello, Simpson. I'm riding the bus today becuase Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
        character: 'Principal Skinner',
      },
      {
        quote:
          'I live in a single room above a bowling alley...and below another bowling alley.',
        character: 'Frank Grimes',
      },
      {
        quote:
          "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
        character: 'Homer Simpson',
      },
      {
        quote: 'In theory, Communism works! In theory.',
        character: 'Homer Simpson',
      },
      {
        quote: "Oh, wow, windows. I don't think I could afford this place.",
        character: 'Otto',
      },
      {
        quote:
          'Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?',
        character: 'Milhouse Van Houten',
      },
      {
        quote:
          'Shoplifting is a victimless crime, like punching someone in the dark.',
        character: 'Nelson Muntz',
      },
      {
        quote:
          'Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.',
        character: 'Dr. Nick',
      },
    ];
  }

  getAll() {
    return this.resources;
  }
}
