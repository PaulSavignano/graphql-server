import sqlite3 from 'sqlite3';
import * as tables from './tables';

export const db = new sqlite3.Database('./db.sqlite');

export const getSql = (query) => {
  return new Promise((resolve, reject) => {
    console.log(query.test);
    console.log(query.values);
    db.all(query.text, query.values, (error, rows) => {
      if (error) {
        reject(error)
      } else {
        resolve(rows)
      }
    });
  });
};
