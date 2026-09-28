import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service.js';
import { SupabaseController } from './supabase.controller.js';

@Module({
  controllers: [SupabaseController],
  providers: [SupabaseService],
})
export class SupabaseModule {}
