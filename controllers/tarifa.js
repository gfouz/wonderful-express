const { tarifas, finalidades } = require("./db.js");


let tarifasId = tarifas.length;

exports.getTarifas = (req, res) => {
	setTimeout(() => {
    const result = tarifas.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
}


exports.getTarifasByFinalidad = (req, res) => {

  const finalidadId = parseInt(req.params.id);

  const finalidad = finalidades.find( item => item?.id === parseInt(finalidadId) );
  const result = tarifas.filter( item => item.finalidadId === finalidad?.id );
  result && res.status(200).json({ message: "associated", result }) ;
}



exports.getTarifaById = (req, res) => {
  const { id } = req.params;
  const result = tarifas.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500)
  ;
}

exports.getTarifasEnabled = (req, res) => {
  const { enabled } = req.body; 
  
  const result = tarifas.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};


exports.createTarifa = (req, res) => {

    console.log("creating tarifas");
    console.log(req.body);

	  const time = parseInt(req.body.time);
    const price = parseFloat(req.body.price);
    const range = req.body.range;
    const finalidadId = parseInt(req.body.finalidadId);

    const result = {
    id: ++tarifasId, 
    time: time,
    price: price,
    range: range,
    finalidadId: finalidadId,
    enabled: true
  };
  tarifas.push(result);
  res.status(201).json({ message: "updated" });
}



exports.updateTarifa = (req, res) => {

	  const id = parseInt(req.params.id);
    const time = parseInt(req.body.time);
    const price = parseFloat(req.body.price);
    const range = req.body.range;
    const finalidadId = parseInt(req.body.finalidadId);
    const enabled = req.body.enabled;

    const result = {
    time: time,
    price: price,
    range: range,
    finalidadId: finalidadId,
    enabled: true
    };
    tarifas[id - 1] = result;
    res.status(201).json({ message: "updated" });
}



