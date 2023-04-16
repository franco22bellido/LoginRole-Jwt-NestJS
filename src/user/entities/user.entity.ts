import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {Post} from 'src/post/entities';
import { hash } from "bcryptjs";

@Entity({name: "users"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column({nullable: false})
    email: string;
    @Column({nullable: false})
    password: string;
    @Column({default: true})
    status: boolean;
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.password){
            return
        }
        this.password = await hash(this.password, 10);
    }

}