
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleId: 1,
  });

  //   useEffect(() => {
  //     axios.get('http://localhost:5000/api/users').then(res => setUsers(res.data))
  //   }, [])

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
      e.preventDefault()
      await axios.post('http://localhost:5000/api/users', form)
      const res = await axios.get('http://localhost:5000/api/users')
      setUsers(res.data)
      setForm({ firstName: '', lastName: '', email: '', password: '', roleId: 1 })
    }

//   const handleSubmit = () => {};

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-2 w-full"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border p-2 w-full"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Users List</h2>
      <ul className="space-y-1">
        {users.map((u) => (
          <li key={u.id} className="border p-2 rounded">
            {u.firstName} {u.lastName} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
