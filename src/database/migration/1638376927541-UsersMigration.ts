import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1638318940203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
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
                            name: "age",
                            type: "int",
                        },
                        {
                            name: "address",
                            type: "varchar",
                        },
                        {
                            name: "number",
                            type: "int",
                        },
                        {
                            name: "zipcode",
                            type: "int",
                        }
                    ]   
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}