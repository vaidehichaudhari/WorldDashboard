import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port:  Number(process.env.DB_PORT) || 3306, // optionally from env or default 3309
    dialect: 'mysql',
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Connected to MySQL database: ${process.env.DATABASE}`);
  } catch (error) {
    console.error('❌ Unable to connect to the database:');
    console.error(error);
    process.exit(1);
  }
};

// Connect immediately (optional)
connectDB();

export default sequelize;
