const fs = require("fs");

function readData(err, data) {
    console.log(data);
}

 exports.getConditions = async (req, res) => {
  try {
    await fs.readFile("./conditions.txt", "utf8", (error, data) => {
      if (error) {
         res.status(400).json({ error });
      } else {
       res.status(200).json({data, message: "read-ok"});
      }
    });
  } catch (error) {
    console.log(error);
  }
};



exports.writeConditions = async (req, res) => {
  try {

    const conditions = req.body.conditions;
    // Delete conditions.txt
    fs.unlink("conditions.txt", (err) => {
      if (err) throw err;
      console.log("file has been deleted!");
    });
    // Create a new conditions.txt
    fs.appendFile("conditions.txt", conditions, (err) => {
      if (err) throw err;
    });
    return res.status(200).json({ message: "written-ok" });
  } catch (error) {
     console.log(error);
  }
};
