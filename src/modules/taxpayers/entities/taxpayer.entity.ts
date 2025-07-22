import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('taxpayers')
export class Taxpayer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column({ unique: true })
  ssn: string;

  @Column({ type: 'enum', enum: ['single', 'married', 'head_of_household'] })
  filing_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
