
const Alert = (props) => {
  return (
    <div>
      <h3 className={"alert alert-" + props.loged.color}> {props.loged.msg} </h3>
    </div>
  )
}
export default Alert