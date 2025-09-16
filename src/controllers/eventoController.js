const eventoModel = require('../models/eventoModel');

const getAllEventos = async (req, res) => {
    try {
        const eventos = await eventoModel.getEventos();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar eventos." });
    }
};

const getEventoById = async (req, res) => {
    const { id } = req.params;
    try {
        const evento = await eventoModel.getEventoById(id);
        if (!evento) {
            return res.status(404).json({ error: 'Evento não encontrado.' });
        }
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar evento.' });
    }
}

const deleteEvento = async (req, res) => {
    try {
        const result = await eventoModel.deleteEvento(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);

    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        res.status(500).json({ error: 'Erro ao deletar evento.' });
    }
}

const updateEvento = async (req, res) => {
    try {
        const evento = await eventoModel.updateEvento(req.params.id, req.body);
        if (!evento) {
            return res.status(404).json({ message: "Evento não encontrado." });
        }
        res.json(evento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o evento." });
    }
}

const addEvento = async (req, res) => {
    try {
        const { 
            name,
            date,
            location,
            description
        } = req.body;
        const evento = await eventoModel.createEvento(
            name,
            date,
            location,
            description
        );
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o evento." });
    }
}

module.exports = {getAllEventos, getEventoById, deleteEvento, updateEvento, addEvento};