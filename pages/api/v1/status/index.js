function status(request, response) {
  response.status(200).json({ chave: "value é ç " });
}

export default status;
