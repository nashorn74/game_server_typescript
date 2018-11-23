import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "text"
	})
	name: string;

	@Column({
		type: "text"
	})
	email: string;

	@Column({
		type: "text"
	})
	password: string;

	@CreateDateColumn()
	created_at: string;
}