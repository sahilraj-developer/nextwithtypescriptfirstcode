const Page = ({ params }) => {
    console.log("params", params);
    const id = params.id;
  
    return (
      <div>page {id}</div>
    );
  };
  
  export default Page;
  