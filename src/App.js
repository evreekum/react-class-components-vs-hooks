import React from 'react';
import './App.css';

// function App() {
//     return (
//         <div>
//             {/*// functie om state te creeren*/}
//             class App extends React.Component {
//             // constructor geeft properties props mee en creeren we de state variabele (state key)
//             constructor(props) {
//             super(props);
//             // state key = isLightOn. True = initiële waarde
//             this.state = {
//             isLightOn: true
//         };
//             // functie voor handleClick button/event listener
//             this.handleClick = this.handleClick.bind(this);
//         }
//             // state setter functie = this.setState. in event listener handleClick
//             handleClick() {
//             this.setState({
//             isLightOn: !this.state.isLightOn,
//         });
//         }
//             // wat renderd/returned (weergegeven op pagina) wordt
//             render() {
//             return (
//
//             <button
//             type="button"
//             // onChange={handleClick}
//             onClick={this.handleClick}
//             >
//         /*/!*conditioneel renderen met ternary operator (conditie ? TRUE : FALSE)*!/*/
//         {this.state.isLightOn ? 'AAN' : 'UIT'}
//             </button>
//             );
//         }
//         }
//
//             export default App;
//         </div>
//     );
// }
//
// export default App;
