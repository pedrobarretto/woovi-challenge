import mongoose from 'mongoose';

const conn = mongoose.connection;

export function connect() {
  mongoose.connect('mongodb://localhost:27017/woovi-db');

  conn.on('connected', () => {
    console.log('database is connected successfully');
  });

  conn.on('disconnected', () => {
    console.log('database is disconnected successfully');
  });

  conn.on('error', console.error.bind(console, 'connection error:'));
}

export function disconnect() {
  if (!conn) return;

  mongoose.disconnect();
}
