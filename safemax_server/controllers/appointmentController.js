const Appointment = require('../models/Appointment');

// Create new appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    res.status(500).json({ error: 'Error creating appointment' });
  }
};

// Get all appointments (for admin view)
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching appointments' });
  }
};

// Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: 'Appointment status updated', appointment });
  } catch (error) {
    res.status(500).json({ error: 'Error updating appointment status' });
  }
};
