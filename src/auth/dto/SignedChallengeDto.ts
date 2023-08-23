import { IsString } from "class-validator";

export class SignedChallengeDto {
 
    @IsString()
    transaction: string;
}
