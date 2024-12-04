import { tblrx } from '@vlcn.io/crsqlite-wasm';

let db: any = null;

export async function getDb() {
  if (!db) {
    db = await tblrx.createDB();
    
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

export async function getAllTravels() {
  const db = await getDb();
  return db.execO("SELECT * FROM travels ORDER BY date DESC");
}

export async function addTravel(travel: {
  mode: string;
  origin: string;
  destination: string;
  duration: number;
  distance: number;
  date: string;
  cost?: number;
  notes?: string;
}) {
  const db = await getDb();
  const result = await db.exec(
    `INSERT INTO travels (mode, origin, destination, duration, distance, date, cost, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      travel.mode,
      travel.origin,
      travel.destination,
      travel.duration,
      travel.distance,
      travel.date,
      travel.cost || null,
      travel.notes || null
    ]
  );
  return result;
}

