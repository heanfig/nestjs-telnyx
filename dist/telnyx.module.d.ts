import { DynamicModule } from '@nestjs/common';
export declare class TelnyxModule {
    static forRoot(apiKey: string): Promise<DynamicModule>;
}
