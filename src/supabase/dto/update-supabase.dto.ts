import { PartialType } from '@nestjs/mapped-types';
import { CreateSupabaseDto } from './create-supabase.dto.js';

export class UpdateSupabaseDto extends PartialType(CreateSupabaseDto) {}
