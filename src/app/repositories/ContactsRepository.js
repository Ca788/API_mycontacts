const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Carlos",
    email: "carlos@gmail.com",
    phone: "12345678910",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
