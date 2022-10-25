import React, {Component} from "react";
import "./styles.scss";


class DropDowns extends Component {
  render() {
    const {
      color,
      tittle,
      options
  } = this.props
  return(
    <div className="dropdown">
  <button className={`button-${color}`}>{tittle}</button>
    <div >
      {options ? 
      <div className="dropdown-content">
      {
        options.map((data, idx) => (
        <a value={data.value}>
          {data.label}
        </a>))
      }</div>:<a>Insert Options</a>}
    </div>
</div>
  )
}
}

export default DropDowns;
