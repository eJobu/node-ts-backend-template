import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column()
  public age: number

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  public updatedAt: Date
}
