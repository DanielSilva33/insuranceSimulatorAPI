import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCoberturas1638320858228 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "coberturas",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true
                        },
                        {
                            name: "seguro_id",
                            type: "int"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "fator",
                            type: "float"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coberturas")
    }

}
