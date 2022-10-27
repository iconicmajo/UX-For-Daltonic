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
    <button className={`button-${color}`}>
      {tittle}
      <span class="material-icons">arrow_drop_down</span>
    </button>
    <div>
      {options ? 
      <div className="dropdown-content">
      {
        options.map((data) => (
          // eslint-disable-next-line
        <a value={data.value}>
          {data.label}
        </a>))
      }</div>:
      <>Insert Options</>
      }
    </div>
</div>
  )
}
}

export default DropDowns;
