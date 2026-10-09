import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RigistrationSession {
    @PrimaryGeneratedColumn()
    id: number;
    
}