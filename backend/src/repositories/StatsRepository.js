const dbPromise = require("../database/database");

const getDashboardStats = async () => {
  const db = await dbPromise;

  const missing = await db.get(
    "SELECT COUNT(*) as count FROM Persons WHERE status = 'DESAPARECIDO'"
  );
  const rescued = await db.get(
    "SELECT COUNT(*) as count FROM Persons WHERE status = 'RESGATADO'"
  );
  const locations = await db.get("SELECT COUNT(*) as count FROM Locations");

  return {
    missing: missing.count,
    rescued: rescued.count,
    totalLocations: locations.count,
  };
};

module.exports = { getDashboardStats };
