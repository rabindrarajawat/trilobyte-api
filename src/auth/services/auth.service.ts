import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, throwError } from 'rxjs';
import { ChallengeRequestDto } from '../dto/ChallengeRequestDto';
import { SignedChallengeDto } from '../dto/SignedChallengeDto';

@Injectable()
export class AuthService {
    constructor(@Inject('SEP10_SERVICE') private sep10Client: ClientProxy){

    }

    getSep10Challange(challengeDto:ChallengeRequestDto){
        const pattern = { cmd: 'get.challenge'};
        return this.sep10Client
        .send(pattern,challengeDto)
        .pipe(catchError(error=>throwError(()=>new RpcException(error))))
    }

    getSep10Token(signedChallengeDto: SignedChallengeDto){
        const pattern = { cmd: 'get.token'};
        return this.sep10Client
        .send(pattern,signedChallengeDto)
        .pipe(catchError(error=>throwError(()=>new RpcException(error))))
    }
}
