import mysql from 'mysql2';

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Function to insert a new school record
const insertSchool = (schoolData, callback) => {
  const query = `
    INSERT INTO schools (name, address, city, state, contact, image, email_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      schoolData.name,
      schoolData.address,
      schoolData.city,
      schoolData.state,
      schoolData.contact,
      schoolData.image,
      schoolData.email_id,
    ],
    callback
  );
};

const getAllSchools = (callback) => {
  const query = 'SELECT * FROM schools';

  db.query(query, callback);
};

export { insertSchool, getAllSchools };
