export const BasicTypes = () => {
  interface person {
    name: string;
    age: number;
    isActive?: boolean;
    email: string;
  }
  const user: person = {
    name: 'Johan',
    age: 20,
    email: 'johan@email.com',
  };

  const { name, age, isActive, email } = user;

  function showUserData() {
    const message = `Nombre: ${user.name}\nEdad: ${user.age}\nEmail: ${user.email}`;
    console.log(message);
    alert(message);
  }

  return (
    <>
      <h3>Basic Types</h3>
      <ul>
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
        <li>Activo: {isActive ? 'Sí' : 'No'}</li>
        <li>Email: {email}</li>

        <h2>Mostrar datos en consola:</h2>
        <button onClick={showUserData}>Mostrar datos</button>
      </ul>
    </>
  );
};
