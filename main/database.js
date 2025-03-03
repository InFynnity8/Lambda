import Database from 'better-sqlite3';
import { join } from 'path';

// Define database file path
const dbPath = join(__dirname, 'school.db');
const db = new Database(dbPath);

// Create tables
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT CHECK(role IN ('student', 'teacher')) NOT NULL,
    photo_path TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS pdfs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    file_path TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`).run();

console.log('Database initialized');

export default db;
