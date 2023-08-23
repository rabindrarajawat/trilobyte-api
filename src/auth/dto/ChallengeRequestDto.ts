
import { IsNotEmpty, IsOptional} from "class-validator";
import { IsStellarAccount,IsSep10Memo } from "../../decorators/validators.decorator";

export class ChallengeRequestDto {
    
    
    @IsStellarAccount("account", {
        message: "Stellar account is not valid!",
    })
    account: string;

    @IsNotEmpty()
    @IsOptional()
    @IsSep10Memo("memo", {
        message: "Invalid 'memo' value. Expected a 64-bit integer.",
    })
    memo: string;

    @IsNotEmpty()
    @IsOptional()
    home_domain?:string;

    @IsNotEmpty()
    @IsOptional()
    client_domain?:string;

}
