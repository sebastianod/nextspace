import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className=" bg-slate-100 flex flex-col justify-center items-start w-fit p-2">
      <img
        alt={`${name}'s photo`}
        src={image ?? "/mememan.webp"}
        className=" w-48 mb-3"
      />
      <div>
        <h3 className="text-xl mb-3">
          <Link href={`/users/${id}`}>
            {name}
          </Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
