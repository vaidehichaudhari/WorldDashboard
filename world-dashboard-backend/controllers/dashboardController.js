import sequelize from "../config/db.js";  // assuming default export in db.js

export const getTotalPopulation = async (req, res) => {
  try {
    const [results] = await sequelize.query(`SELECT SUM(Population) AS TotalPopulation FROM country`);
    const totalPopulation = results[0].TotalPopulation;
    res.status(200).json({ totalPopulation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTop10PopulatedCountries = async (req, res) => {
  try {
    // Example query (you can implement real one)
    const [results] = await sequelize.query(`
      SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTop10LeastPopulatedCountries = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      SELECT Name, Population FROM country ORDER BY Population ASC LIMIT 10
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalCountries = async (req, res) => {
  try {
    const [results] = await sequelize.query(`SELECT COUNT(Code) AS totalCountry FROM country`);
    const totalCountries = results[0].totalCountry;
    res.status(200).json({ totalCountries });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAveragePopulation = async (req, res) => {
  try {
    const [results] = await sequelize.query(`SELECT AVG(Population) AS averagePopulation FROM country`);
    const avgPopulation = results[0].averagePopulation;
    res.status(200).json({ avgPopulation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalPopulationByContinent = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      SELECT Continent, SUM(Population) AS totalPopulation FROM country GROUP BY Continent
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalLanguages = async (req, res) => {
  try {
    // Example query (assuming a languages table exists)
    const [results] = await sequelize.query(`SELECT COUNT(DISTINCT Language) AS totalLanguages FROM countrylanguage`);
    const totalLanguages = results[0].totalLanguages;
    res.status(200).json({ totalLanguages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTop10Languages = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      SELECT Language, COUNT(*) AS numCountries 
      FROM countrylanguage 
      GROUP BY Language 
      ORDER BY numCountries DESC 
      LIMIT 10
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLargestCities = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      SELECT Name, Population 
      FROM city 
      ORDER BY Population DESC 
      LIMIT 10
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
