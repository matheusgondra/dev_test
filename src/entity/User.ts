import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Post } from "./Post";

//TODO Crie a entidade de User
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	firstName: string;
	
	@Column({ length: 100 })
	lastName: string;
	
	@Column({ length: 100, unique: true })
	email: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Post, post => post.user)
	posts: Post[];
}
