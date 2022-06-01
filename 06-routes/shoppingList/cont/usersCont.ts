import uid from "../helpers";

export interface User {
  name: string;
  userId: string;
}

let users: Array<User> = [
  { name: "Mario", userId: uid() },
  { name: "Rayu", userId: uid() },
];

export const handleDeleteUser = (req, res) => {
  try {
    const { userId } = req.body;
    console.log("userId", userId);

    const index: number = users.findIndex((user) => user.userId === userId);
    if (index === -1) throw new Error("user not found");

    users = users.filter((user) => user.userId !== userId);
    console.log("users", users);
    res.send(users);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const handleAddUser = (req, res) => {
  const { name } = req.body;
  // console.log(req.body);
  if (!name) throw new Error("name is required");

  const user: User = { name, userId: uid() };
  users.push(user);
  res.send(users);
};

export async function getAllUsers(req, res) {
  try {
    res.send({ users });
  } catch (error) {
    console.log("Users array not valid");
  }
}
export const updateUser = async (req, res) => {
  try {
    const { userId, newName } = req.body;
    // TODO: finish function
  } catch (error) {}
};
