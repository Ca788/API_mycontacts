const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
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
