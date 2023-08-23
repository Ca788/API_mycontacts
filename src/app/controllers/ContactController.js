const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(400).json({ error: "Not Found" });
    }

    response.json(contact);
  }

  store() {
    //Criar um novo registo
  }

  update() {
    //Editar um registro
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Not Found" });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
