import React from 'react';

class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }
  displayInfo =() => {
      alert(`신상정보` +`\n ====================` +`\n 이름 : `+
      this.state.name + `\n 나이 : ` + this.state.age + 
      '\n 친구 : '+ this.state.friends)
  }
  
  render() {
    return (
    	<>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person;