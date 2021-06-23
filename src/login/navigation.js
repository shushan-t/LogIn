
const Navigation = (props) => {
  console.log(props);
  return (
    <div className ="div" style={{ color: props.bool === true ? "yellow" : "green" }}>
      Sign In
    </div>
     
  );
};

export default Navigation;
