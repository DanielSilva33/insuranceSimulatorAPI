import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usersauth1639252513756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "usersauth",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "email",
                            type: "varchar",
                        },
                        {
                            name: "password",
                            type: "varchar",
                        }
                    ]   
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usersauth")
    }

}