const FacultySection = () => {
    const facultyMembers = [
      { id: 1, name: 'Prof. Carlos Estevão', expertise: 'Programação pra internet' },
      { id: 2, name: 'Prof. Eutino', expertise: 'Projeto integrador' },
    ];
  
    return (
      <section>
        <h2>Corpo Docente</h2>
        <ul>
          {facultyMembers.map((professor) => (
            <li key={professor.id}>
              <strong>{professor.name}</strong> - {professor.expertise}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default FacultySection;
  