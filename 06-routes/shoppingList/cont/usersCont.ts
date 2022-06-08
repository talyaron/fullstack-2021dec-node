import uid from "../helpers";

export interface User {
  name: string;
  userId: string;
}

let users: Array<User> = [
  { name: "Mario", userId: "abc" },
  { name: "Rayu", userId: "abcd" },
];

export const handleDeleteUser = (req, res) => {
  try {
    const { userId } = req.body;
    console.log("userId", userId);

    const index: number = users.findIndex((user) => user.userId === userId);
    if (index === -1) throw new Error("user not found");

    users = users.filter((user) => user.userId !== userId);
    console.log("users", users);
    res.send({ users });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const handleAddUser = (req, res) => {
  try {
    const { name } = req.body;
    // console.log(req.body);
    if (!name) throw new Error("name is required");

    const user: User = { name, userId: uid() };
    users.push(user);
    res.send(users);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export async function getAllUsers(req, res) {
  try {
    res.send({ users });
  } catch (error) {
    console.log("Users array not valid");
    res.send({ error: error.message });
  }
}
export const updateUser = async (req, res) => {
  try {
    const { userId, newName } = req.body;
    // TODO: finish function
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export function getUser(req, res) {
  try {
    const { userId } = req.body;
    if (!userId) throw new Error("userId is missing");
    const user = users.find((user) => user.userId === userId);
    console.log(user);
    if (!user) throw new Error("couldnt find user");
    res.send({user});

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
