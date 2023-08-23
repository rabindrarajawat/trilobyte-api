"use strict";

export class JWTPayloadDto {
    iss: string;
    sub: string;
    aud:string;
    iat: number;
    exp?: number;
    client_domain?:string // client domain used to associate JWT request with specific domains
}
