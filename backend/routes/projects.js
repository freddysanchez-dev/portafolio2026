const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET - Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener un proyecto por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear nuevo proyecto
router.post('/', async (req, res) => {
  try {
    const { title, description, image_url, technologies, github_url, live_url, category } = req.body;
    
    const result = await pool.query(
      `INSERT INTO projects (title, description, image_url, technologies, github_url, live_url, category)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, image_url, technologies, github_url, live_url, category]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;