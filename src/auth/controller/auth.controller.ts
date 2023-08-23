import { Body, Controller, Get, HttpCode,HttpException,HttpStatus,Post,Query, UseFilters } from '@nestjs/common';
import { ChallengeRequestDto } from '../dto/ChallengeRequestDto';
import { SignedChallengeDto } from '../dto/SignedChallengeDto';
import { AuthService } from '../services/auth.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Get()
    @HttpCode(200)
    async getChallenge(@Query() challengedto: ChallengeRequestDto) {

      return this.authService.getSep10Challange(challengedto);

    }

    @Post()
    @HttpCode(200)
    async getToken(@Body() signedChallengeDto: SignedChallengeDto){

        return this.authService.getSep10Token(signedChallengeDto)
    
    }

}
