const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET - Obtener todos los servicios
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;