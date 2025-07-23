import { Module } from '@nestjs/common';
import { K1FormService } from './services/k1-form/k1-form.service';
import { Form1065Service } from './services/form1065/form1065.service';



@Module({
  providers: [K1FormService, Form1065Service],
  exports: [K1FormService, Form1065Service], // ✅ THIS IS IMPORTANT
})
export class FormsModule {}
