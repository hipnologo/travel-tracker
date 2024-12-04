import { Database } from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './travel.db',
      driver: Database
    });
    
    await db.exec(`
      CREATE TABLE IF NOT EXISTS travels (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mode TEXT NOT NULL,
        origin TEXT NOT NULL,
        destination TEXT NOT NULL,
        duration INTEGER NOT NULL,
        distance REAL NOT NULL,
        date TEXT NOT NULL,
        cost REAL,
        notes TEXT
      )
    `);
  }
  return db;
}
