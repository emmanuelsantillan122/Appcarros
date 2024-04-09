const Car = require('../models/car');

exports.agregar = async (req, res) => {
  try {
    const { make, model, year, price_per_day } = req.body;
    if (!make || !model || !year || !price_per_day) {
      return res.status(400).json({ message: 'Faltan parámetros en la solicitud' });
    }
    const carro = new Car({
      make, model, year, price_per_day
    });
    await carro.save();
    res.status(201).json({ message: 'Carro guardado correctamente', carro });
  } catch (error) {
    console.error('Error al guardar los datos del carro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.mostrar = async (req, res) => {
  try {
    const datosCarros = await Car.find();
    if (datosCarros.length === 0) {
      return res.status(404).json({ message: "No se encontraron datos de carros" });
    }
    res.json(datosCarros); 
  } catch (error) {
    console.error("Error al obtener los valores:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};
