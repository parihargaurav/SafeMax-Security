// routes/appointments.js
const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments, updateAppointmentStatus } = require('../controllers/appointmentController');

// Route to create a new appointment
router.post('/', createAppointment);

// Route to fetch all appointments (for admin CMS)
router.get('/', getAppointments);

// Route to update appointment status
router.patch('/:id', updateAppointmentStatus);

module.exports = router;
