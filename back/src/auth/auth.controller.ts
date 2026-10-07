import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {}



/*
injectable tells nest that this class is can be created and managed by nest 
the constructor tells nest what this class needs 

without nest letś say we have tow class authService and EmailService 
auth needs email
so the code would be 
const EmailService = new EmailService()
const AuthService = new AuthService(EmailService);


with nest

@injectable()
export class Authservice {
    constructor(private emailService : EmailService )
    {}
}
nest sees that authservice needs emailservice , so it will created and provide it and pass it to the constructor
Nest creates AuthService
        |
        | sees constructor
        v
AuthService needs EmailService
        |
        v
Nest finds EmailService
        |
        v
Nest gives EmailService to AuthService

One important distinction
@Injectable() does not mean "inject something here."

"This class is allowed to participate in Nest's dependency injection system."

*/