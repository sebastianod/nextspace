"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //avoid page refresh

    const formData = new FormData(e.currentTarget); //e.currentTarfet is the form

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div className=" flex flex-col">
      <h2 className=" mb-3 text-xl font-semibold">Edit Your Profile</h2>
      <form onSubmit={updateUser} className="flex flex-col">
        <div className=" mb-3">
          <label htmlFor="name" className=" mr-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.name ?? ""}
            className=" border rounded"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            cols={30}
            rows={10}
            defaultValue={user?.bio ?? ""}
            className=" border rounded w-2/4"
          ></textarea>
        </div>

        <div className=" mb-3">
          <label htmlFor="age" className=" mr-2">Age</label>
          <input type="text" name="age" defaultValue={user?.age ?? 0} className=" rounded border w-10" />
        </div>

        <div className=" mb-3">
          <label htmlFor="image" className=" mr-2">Profile Image URL</label>
          <input type="text" name="image" defaultValue={user?.image ?? ""} className=" rounded border"/>
        </div>

        <button type="submit" className=" w-24 bg-blue-100 hover:bg-blue-600 hover:text-white text-black font-bold py-2 px-4 border border-slate-400 rounded">Save</button>
      </form>
    </div>
  );
}
