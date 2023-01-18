import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			list : [
				{
					name : "naman",
					percent : 60.0000
				},
				{
					name : "ritesh",
					percent : 99.9431
				},
				{
					name : "hitesh",
					percent : 65.3365
				},
				{
					name : "shreya",
					percent : 80.6400
				},
				{
					name : "ankur",
					percent : 78.8970
				},
				{
					name : "vanshu",
					percent : 78.9876
				},
				{
					name : "krupal",
					percent : 85.3214
				},
			],
		}
	};
    render() {
    return (
      <div id="main">
        {

          this.state.list.map(function (item, index) {
            if (item.percent >= 90) {
              return (
               
                <div key={index} className={"bg-pink"}>
                  <div className="name">
                    <li>{item.name}</li>
                  </div>
                  <div className="percent">
					   					
                    <li>{item.percent.toFixed(2)}</li>
                  </div>
                </div>
              );
            }
            else if (item.percent > 75 && item.percent < 90) {
              return (
            
                <div key={index} className={""}>
                  <div className="name">
                    
                    <li>{item.name}</li>
                  </div>
                  <div className="percent">
                 
                    <li>{item.percent.toFixed(2)}</li>
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}


export default App;
