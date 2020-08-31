import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { addTodo, editTodo } from "../redux/actions";
import DataHolding from './DataHolding'
export type Props = {
  addTodo: any;
  editTodo:any;
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
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
    const eze = DataHolding.getData(this.state.input);
    this.setState({input:eze})
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
          <Button color="secondary" onClick={this.handleAddTodo}>Add Todo</Button>{' '}
        </InputGroup>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo, editTodo }
)(AddTodo);
// export default AddTodo;
