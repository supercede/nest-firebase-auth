// src/firebase/firebase-auth.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-firebase-jwt';
import firebaseApp from './firebase.service'; // Import the initialized Firebase app

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(token: string) {
    console.log(token);
    const firebaseUser: any = await firebaseApp
      .auth()
      .verifyIdToken(token, true)
      .catch((err) => {
        console.log(err);

        throw new UnauthorizedException(err.message);
      });

    if (!firebaseUser) {
      throw new UnauthorizedException('Invalid token');
    }

    return firebaseUser;
  }
}
