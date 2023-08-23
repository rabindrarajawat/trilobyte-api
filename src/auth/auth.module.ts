import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
    controllers: [AuthController],
    providers:[AuthService,
      {
        provide: 'SEP10_SERVICE',
        useFactory: (configService: ConfigService) => {
          return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [configService.get<string>('CLOUDAMQP_URL')],
              queue: 'sep10_queue',
              queueOptions: {
                durable: false,
              },
            },
          });
        },
        inject: [ConfigService],
      },
    ]
})
export class AuthModule {}
