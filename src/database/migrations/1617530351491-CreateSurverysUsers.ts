import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurverysUsers1617530351491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "surverys_users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "survery_id",
            type: "uuid",
          },
          {
            name: "value",
            type: "number",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "Date",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',  // The table name that is being referenced
            referencedColumnNames: ['id'], // The column name of the table Im referencing
            columnNames: ['user_id'],      // The column name of this table
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'FKSurvery',
            referencedTableName: 'surverys',  // The table name that is being referenced
            referencedColumnNames: ['id'], // The column name of the table Im referencing
            columnNames: ['survery_id'],      // The column name of this table
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('surverys_users')
  }
}
