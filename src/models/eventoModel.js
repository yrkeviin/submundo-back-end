const pool = require("../config/database");

const getEventos = async () => {
    const result = await pool.query("SELECT * FROM eventos");
    return result.rows;
};

const getEventoById = async (id) => {
    const result = await pool.query("SELECT * FROM eventos WHERE id = $1", [id]);
    return result.rows[0];
};

const deleteEvento = async (id) => {
    const result = await pool.query("DELETE FROM eventos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Evento não encontrado." };
    }
    return { message: "Evento deletado com sucesso." };
};

const updateEvento = async (id, data) => {
    const { 
        name,
        date,
        location,
        description,
    } = data;
    
    const result = await pool.query(
        `UPDATE eventos SET 
            name = $1, 
            date = $2, 
            location = $3, 
            description = $4
        WHERE id = $5 RETURNING *`, 
        [name, date, location, description, id]
    );
    return result.rows[0];
};

const addEvento = async (nome, date, location, description) => {
    const result = await pool.query(
        `INSERT INTO eventos 
        (name, date, location, description) 
        VALUES ($1, $2, $3, $4) RETURNING *`, 
        [nome, date, location, description]
    );
    return result.rows[0];
};

module.exports = { getEventos, getEventoById, deleteEvento, updateEvento, addEvento };