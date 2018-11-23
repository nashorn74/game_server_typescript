import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_purchase")
export class UserPurchaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "integer"
	})
	user_id: number;

	@Column({
		type: "integer"
	})
	money: number;

	@Column({
		type: "text"
	})
	description: string;

	@Column({
		type: "text"
	})
	receipt_code: string;

	@CreateDateColumn()
	created_at: string;

	//foreign key (`user_id`) references `user` (`id`)
}