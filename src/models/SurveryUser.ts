import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity('surverys_users')
class SurveryUser {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @Column()
  survery_id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4()
    }
  }
}

export default SurveryUser ;
