import * as React from "react";
import { computed } from "mobx";

interface IToggleProps {
  toggled: boolean;
  onToggle: (t: boolean) => void;
}
//@observer
export class Toggle extends React.Component<IToggleProps> {
  constructor(props: IToggleProps) {
    super(props);
  }
  @computed
  get value() {
    return this.props.toggled;
  }
  set value(v) {
    const { onToggle } = this.props;
    onToggle(v);
  }

  render() {
    return (
      <div
        className={`toggle ${this.value ? "active" : ""}`}
        onClick={e => {
          this.value = !this.value;
        }}
      />
    );
  }
}
