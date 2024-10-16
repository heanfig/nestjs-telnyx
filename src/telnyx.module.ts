import { Module, DynamicModule, Global } from '@nestjs/common';
import type Telnyx from 'telnyx';  // Importa los tipos de Telnyx

@Global()
@Module({})
export class TelnyxModule {
  static async forRoot(apiKey: string): Promise<DynamicModule> {
    const telnyxClient: Telnyx = await import('telnyx')
      .then(telnyx => new telnyx.default(apiKey))
      .catch(error => {
        throw new Error(`Failed to initialize Telnyx client: ${error.message}`);
      });

    return {
      module: TelnyxModule,
      providers: [
        {
          provide: 'TELNYX_CLIENT',
          useValue: telnyxClient,
        },
      ],
      exports: ['TELNYX_CLIENT'],
    };
  }
}