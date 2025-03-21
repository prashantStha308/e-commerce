
const page = async({ params }) => {
    const {slog} = await params;

  return (
    <div> Category: {slog} </div>
  )
}

export default page