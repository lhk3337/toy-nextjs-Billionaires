export default function Detail(data) {
  console.log(data);
  return "Detail";
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await (await fetch(`http://localhost:3000/api/person/${id}`)).json();
  return {
    props: data,
  };
}
