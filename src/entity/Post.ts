import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity("post")
export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	title: string;

	@Column({ length: 100 })
	description: string;

	@Column()
	userId: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, user => user.posts, { onDelete: "CASCADE" })
	user: User;
}