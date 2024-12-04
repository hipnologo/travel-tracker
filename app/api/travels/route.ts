import { NextResponse } from 'next/server';
import { getDb } from '@/app/lib/db';

export async function GET() {
  const db = await getDb();
  const travels = await db.all('SELECT * FROM travels ORDER BY date DESC');
  return NextResponse.json(travels);
}

export async function POST(request: Request) {
  const db = await getDb();
  const data = await request.json();
  
  const result = await db.run(
    `INSERT INTO travels (mode, origin, destination, duration, distance, date)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [data.mode, data.origin, data.destination, data.duration, data.distance, data.date]
  );
  
  return NextResponse.json({ id: result.lastID });
}
