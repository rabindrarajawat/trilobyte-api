import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from "class-validator";
import { StrKey} from 'stellar-sdk';
import { UnsignedHyper} from 'js-xdr';

export function IsStellarAccount(
    property: string,
    validationOptions?: ValidationOptions
): PropertyDecorator {
    return (object, propertyName: string) => {
        registerDecorator({
            propertyName,
            name: "isStellarAccount",
            target: object.constructor,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(account: string, _args: ValidationArguments) {
                    return StrKey.isValidEd25519PublicKey(account);
                },
            },
        });
    };
}

export function IsSep10Memo(
    property: string,
    validationOptions?: ValidationOptions
): PropertyDecorator {
    return (object, propertyName: string) => {
        registerDecorator({
            propertyName,
            name: "isSep10Memo",
            target: object.constructor,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(memo: string, _args: ValidationArguments) {
                    
                    if (!memo.match(/^[0-9]*$/g) || memo.length < 0){
                        return false
                    }
                    if ( memo !== UnsignedHyper.fromString(memo).toString()){
                        return false
                    }
                    return true
                },
            },
        });
    };
}