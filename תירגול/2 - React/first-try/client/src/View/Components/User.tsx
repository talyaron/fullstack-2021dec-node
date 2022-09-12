interface UserProps {
  name: string;
  age: number;
}

const User = ({ name, age }: UserProps) => {
  return (
    <div className="user">
      <p>Name:{name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;
