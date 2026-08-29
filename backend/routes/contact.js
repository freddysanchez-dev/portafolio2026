const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// POST - Enviar mensaje de contacto
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const result = await pool.query(
      `INSERT INTO messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, subject, message]
    );
    
    res.status(201).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;