import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div>
      <img alt={`${name}'s photo`} src={image ?? "/mememan.webp"} />
      <div>
        <h3>
          <Link href={`/users/${id}`}><span>{name}</span></Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
