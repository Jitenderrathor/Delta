const mongoose = require("mongoose");
const Chat = require("./models/chat");


// to connect to dbs
main().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChat = [
  {
    "from": "John Doe",
    "to": "Jane Smith",
    "message": "Hey, how's it going?",
    "created_at": new Date()
  },
  {
    "from": "Alice Johnson",
    "to": "Bob Smith",
    "message": "Hi there! What's up?",
    "created_at": new Date()
  },
  {
    "from": "Charlie Brown",
    "to": "Eva Davis",
    "message": "Hello Eva, long time no see!",
    "created_at": new Date()
  },
  {
    "from": "Grace Taylor",
    "to": "Harry White",
    "message": "Hey Harry, how's your day going?",
    "created_at": new Date()
  },
  {
    "from": "Frank Miller",
    "to": "Isabel Martin",
    "message": "Hi Isabel, any plans for the weekend?",
    "created_at": new Date()
  },
  {
    "from": "Jack Robinson",
    "to": "Kelly Anderson",
    "message": "Hello Kelly, hope you're doing well!",
    "created_at": new Date()
  },
  {
    "from": "Leo Garcia",
    "to": "Mia Hernandez",
    "message": "Hi Mia, what's new with you?",
    "created_at": new Date()
  },
  {
    "from": "Nathan Perez",
    "to": "Olivia Wilson",
    "message": "Hey Olivia, let's catch up sometime!",
    "created_at": new Date()
  },
  {
    "from": "Peter Turner",
    "to": "Quinn Foster",
    "message": "Hello Quinn, how's work going?",
    "created_at": new Date()
  },
  {
    "from": "Rachel Lee",
    "to": "Samuel Brown",
    "message": "Hi Samuel, how's life treating you?",
    "created_at": new Date()
  },
  {
    "from": "Sophia Adams",
    "to": "Ethan Clark",
    "message": "Hey Ethan, long time no chat!",
    "created_at": new Date()
  },
  {
    "from": "Liam Turner",
    "to": "Ava Rodriguez",
    "message": "Hi Ava, hope you're having a great day!",
    "created_at": new Date()
  },
  {
    "from": "Emma Harris",
    "to": "Mason Evans",
    "message": "Hello Mason, how's everything going?",
    "created_at": new Date()
  },
  {
    "from": "Jackson Murphy",
    "to": "Sophie White",
    "message": "Hey Sophie, let's catch up soon!",
    "created_at": new Date()
  },
  {
    "from": "Aiden Scott",
    "to": "Aria Thompson",
    "message": "Hi Aria, any exciting plans for the weekend?",
    "created_at": new Date()
  },
  {
    "from": "Chloe Turner",
    "to": "Carter Nelson",
    "message": "Hello Carter, how's your week going?",
    "created_at": new Date()
  },
  {
    "from": "Zoe Martinez",
    "to": "Elijah Wright",
    "message": "Hey Elijah, hope you're doing well!",
    "created_at": new Date()
  },
  {
    "from": "Daniel Adams",
    "to": "Madison Green",
    "message": "Hi Madison, any interesting updates?",
    "created_at": new Date()
  },
  {
    "from": "Mila Rivera",
    "to": "Sebastian Reed",
    "message": "Hello Sebastian, long time no talk!",
    "created_at": new Date()
  },
  {
    "from": "Lucas Turner",
    "to": "Lily Carter",
    "message": "Hi Lily, how's everything on your end?",
    "created_at": new Date()
  }
]

Chat.insertMany(allChat).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })