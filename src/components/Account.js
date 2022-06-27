import '../css/Account.css';

function Account(props) {
  function updateAccount(event) {
    props.onChange(event.target.value);
  }

  const pushed = {
    float: "right",
    paddingRight: "20px"
  }

  return (
    <ul className="nav">
      <li><span>Account</span></li>
      <li>
        <select onChange={updateAccount}>
          <option value="Select">Select</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </li>
    
      <li style={pushed}>{props.account}</li>
    </ul>
  );
}

export default Account;
