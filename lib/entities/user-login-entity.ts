import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_login")
export class UserLoginEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "integer",
		unique: true
	})
	user_id: number;

	@Column({
		type: "text"
	})
	token: string;

	@CreateDateColumn()
	created_at: string;

	//foreign key (`user_id`) references `user` (`id`)
}