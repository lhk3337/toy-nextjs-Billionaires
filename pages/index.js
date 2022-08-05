import Person from "../components/Person";

export default function IndexPage({ persons }) {
  return (
    <div className="container">
      {persons?.map((person) => (
        <Person key={person.id} {...person} />
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          padding: 2rem 6rem;
          gap: 4rem;
        }

        @media (min-width: 612px) {
          .container {
            padding: 2rem 4rem;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 860px) {
          .container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (min-width: 1280px) {
          .container {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @media (min-width: 1536px) {
          .container {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }
        @media (min-width: 1792px) {
          .container {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }
        }
        @media (min-width: 2048px) {
          .container {
            grid-template-columns: repeat(7, minmax(0, 1fr));
          }
        }
        @media (min-width: 2548px) {
          .container {
            grid-template-columns: repeat(8, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const persons = await (await fetch(`http://localhost:3000/api/person`)).json();
  return {
    props: {
      persons,
    },
  };
}
