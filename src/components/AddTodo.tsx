import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { addTodo, delayAdd } from "../redux/actions";

export type Props = {
  addTodo: any;
  delayAdd: any;
};

export type State = {
  input: string
};


class AddTodo extends React.Component<Props, State> {

  state = { input: "" };
  updateInput = (input: string) => {
    this.setState({ input });
  }
 
  handleAddTodo = () => {
    this.props.delayAdd(this.state.input);
    this.setState({ input: "" });
  }



  render(): any {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
          </InputGroupAddon>
          <Input placeholder="input"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <Button color="secondary" onClick={this.handleAddTodo}>Delay Add Todo</Button>{' '}
        </InputGroup>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo,delayAdd }
)(AddTodo);
