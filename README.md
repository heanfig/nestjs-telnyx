
# nestjs-telnyx

A NestJS module for integrating with Telnyx. This package provides a convenient wrapper around the Telnyx API, making it easy to send SMS messages and interact with other Telnyx services within a NestJS application.

## Installation

To install this package, use npm or yarn:

```bash
npm install nestjs-telnyx
```

Or, if you prefer Yarn:

```bash
yarn add nestjs-telnyx
```

## Usage

### 1. Import `TelnyxModule` into Your Application Module

In your `AppModule` (or any other module where you need Telnyx functionality), import the `TelnyxModule` and configure it with your Telnyx API key.

```typescript
import { Module } from '@nestjs/common';
import { TelnyxModule } from 'nestjs-telnyx';

@Module({
  imports: [
    TelnyxModule.forRoot(process.env.TELNYX_API_KEY),  // Use environment variables for security
  ],
})
export class AppModule {}
```

### 2. Inject `Telnyx` into a Service

You can now inject the Telnyx client in any service. Here’s an example of a service that sends an SMS:

```typescript
import { Injectable, Inject } from '@nestjs/common';
import { Telnyx } from 'nestjs-telnyx';

@Injectable()
export class SmsService {
  constructor(
    @Inject('TELNYX_CLIENT') private readonly telnyxClient: Telnyx,
  ) {}

  async sendMessage(to: string, text: string) {
    try {
      const response = await this.telnyxClient.messages.create({ to, text });
      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}
```

### 3. Use the Service in a Controller

Once you've set up your service, you can use it in a controller to handle HTTP requests. Here’s a simple example:

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Get('send')
  async sendSms(@Query('to') to: string, @Query('text') text: string) {
    return this.smsService.sendMessage(to, text);
  }
}
```

Now, you can send a request to `GET /sms/send?to=+1234567890&text=Hello%20World!` to send an SMS using the Telnyx API.

## Environment Variables

Make sure to set your Telnyx API key in your environment variables:

```bash
TELNYX_API_KEY=your_telnyx_api_key_here
```

You can add this line to a `.env` file if you're using a tool like `dotenv` to load environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests for any features, bug fixes, or improvements!
