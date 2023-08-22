class ContactController {
  index(request, response) {
    //Listar todos os contatdos
    response.send("Send from Contact Controller");
  }

  show() {
    //Obter um registros
  }

  store() {
    //Criar um novo registo
  }

  update() {
    //Editar um registro
  }

  delete() {
    //Deletear um registro
  }
}

module.exports = new ContactController();
