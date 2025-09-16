CREATE DATABASE submundodb;

\c submundodb;

CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description TEXT
);

ALTER TABLE eventos ADD COLUMN photo TEXT;

INSERT INTO eventos (name, date, location, description) VALUES 
    ('Submundo808: Bass na Quebrada', '2025-09-10', 'Valinhos', 'Festa com DJs do Submundo808, bass pesado e vibes underground'),
    ('808 Rave Noturna', '2025-09-12', 'Campinas', 'Rave alternativa do Submundo808, neon, luzes e techno pesado'),
    ('Noite do Trap Submundo', '2025-09-15', 'Hortolandia', 'Trap e beats 808 na pista do Submundo'),
    ('Submundo808 Funk Party', '2025-09-18', 'Vinhedo', 'Pancadão de funk e batidas 808 com DJs secretos'),
    ('Underground Bass Session', '2025-09-20', 'Sao Paulo', 'Sessão de bass underground Submundo808, vibes noturnas e exclusivas'),
    ('Submundo808 Open Air', '2025-09-25', 'Valinhos', 'Festa ao ar livre do Submundo808 com DJs locais e vibes alternativas'),
    ('Night of 808', '2025-09-28', 'Campinas', 'Balada secreta Submundo808, techno e trap pesado'),
    ('Submundo808 Afterparty', '2025-10-02', 'Sao Paulo', 'Afterparty exclusiva Submundo808 com beats intensos');
