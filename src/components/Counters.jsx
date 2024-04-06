import Counter from "./Counter";

// export default class Counters extends Component {
  
//   render() {
//     return (
//       <div>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//           />
//         ))}
//       </div>
//     );
//   }
// }

import React from 'react'
import { Link } from "react-router-dom";

const Counters = (props,) => {
  return newFunction(props);
}

export default Counters

function newFunction(props) {
  const chunkedCounters = [];
  for (let i = 0; i < props.counters.length; i += 4) {
    chunkedCounters.push(props.counters.slice(i, i + 4));
  }
  return (
    <div className="container my-4">
     <Link to="/product/new" className="btn btn-primary">+ Add Products</Link>
      {chunkedCounters.map((row, rowIndex) => (
        <div key={rowIndex} className="row mb-4">
          {row.map((counter) => (
            <div key={counter.id} className="col-md-3">
              <Counter
                counter={counter}
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                handleClick={props.handleClick} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

