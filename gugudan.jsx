const React = require('react');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null)

    const onChange = (ev) =>
        {
            setValue(ev.target.value)
        }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (value == first * second) {

            setResult('정답: ' + value)
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setValue('')
            inputRef.current.focus()
        }
        else {
            setResult('땡')
            inputRef.current.focus()
        }
    }

    return (
        <React.Fragment>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} type="number" value={value} onChange={onChange} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
    )
}

module.exports = GuGuDan

// class GuGuDan extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             first: Math.ceil(Math.random() * 9),
//             second: Math.ceil(Math.random() * 9),
//             value: '',
//             result: ''
//         };
//     }
//     onSubmit = (ev) => {
//         ev.preventDefault();
//         if (this.state.value == this.state.first * this.state.second) {
//             this.setState((prevState) => {
//                 return {
//                     first: Math.ceil(Math.random() * 9),
//                     second: Math.ceil(Math.random() * 9),
//                     value: '',
//                     result: prevState.value + " 정답!"
//                 }
//             }

//             )
//         }
//         else {
//             this.setState(
//                 {
//                     result: "땡!"
//                 }
//             )
//         }
//     }

//     onChange = (ev) => this.setState(
//         {
//             value: ev.target.value
//         }
//     )

//     render() {
//         return (
//             <div>
//                 <div>{this.state.first}곱하기{this.state.second}는?</div>
//                 <form onSubmit={this.onSubmit}>
//                     <input type="number" value={this.state.value} onChange={this.onChange} />
//                     <button>입력!</button>
//                 </form>
//                 <div>{this.state.result}</div>
//             </div>
//         );
//     }
// }

