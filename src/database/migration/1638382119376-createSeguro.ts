import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSeguro1638320679938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "seguro",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("seguro")
    }

}
