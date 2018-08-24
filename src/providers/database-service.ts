import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export interface Serializable {
    serialize(): { attribute: string, value: any }[];
}

@Injectable()
export class DatabaseService {

    private database: SQLiteObject;

    constructor(private sqlite: SQLite) {}

    private openDatabase() {
        return this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then((db: SQLiteObject) => this.database = db);
    }

    private tableName(model) {
        return model.name ? model.name.toLowerCase() : model.constructor.name.toLowerCase();
    }

    createTable(entity: Serializable) {
        var insertStatement = "CREATE TABLE IF NOT EXISTS " + this.tableName(entity) + " (";
        let attributes = entity.serialize();
        attributes.forEach(att => {
            insertStatement = insertStatement + att.attribute + ' TEXT';
            if (att != attributes[attributes.length - 1])
                insertStatement += ",";
        })
        insertStatement = insertStatement + ")";
        console.log(insertStatement);
        return this.runSql(insertStatement);
    }

    save(entity: Serializable) {
        return this.createTable(entity).then(() => {
            let insertStatement = "INSERT INTO " + this.tableName(entity) + " (";
            let attributes = entity.serialize();
            attributes.forEach(att => {
                insertStatement += att.attribute;
                if (att != attributes[attributes.length - 1])
                    insertStatement += ",";
            })
            insertStatement = insertStatement + ")" + " VALUES (";
            attributes.forEach(att => {
                insertStatement += "?";
                if (att != attributes[attributes.length - 1])
                    insertStatement += ",";
            })
            let params = [];
            attributes.forEach(att => {
                params.push(att.value);
            })
            insertStatement = insertStatement + ")";
            console.log(insertStatement);
            return this.runSql(insertStatement, params);
        });
    }

    private runSql(statement, params ? ) {
        return new Promise((resolve, reject) => {
            if (!( < any > window).cordova) {
                console.warn("no cordova..aborting");
                throw new Error();
            }
            this.openDatabase().then(() => {
                if (!this.database) {
                    console.error("no db found..aborting");
                    reject(new Error());
                    return;
                }
                this.database.executeSql(statement, params)
                    .then((res) => {
                        console.log("Executed SQL", statement, res);
                        resolve(res);
                    })
                    .catch(e => {
                        console.log("Error: " + JSON.stringify(e));
                        reject(e);
                    })

            }).catch(err => reject(err));
        })
    }

    fetch(entity): Promise < any[] > {
        var selectStatement = "SELECT * FROM " + this.tableName(entity);
        console.log(selectStatement);
        return new Promise((resolve, reject) => {
            this.runSql(selectStatement).then((data: any) => {
                let results = [];
                console.log(data.rows)
                for (var i = 0; i < data.rows.length; i++) {
                    results.push(data.rows.item(i));
                }
                resolve(results);
            }).catch(err => reject(err));
        });

    }

}