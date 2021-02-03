import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Title.module.css";
import slide from "../transitions/slide.module.css";

class Title extends Component {
  state = { animate: false };
  
  componentDidMount() {
    this.setState({ animate: true });
  }

  render() {
    const { animate } = this.state;
    const {  text , children } = this.props;
    return (
      <>
        <CSSTransition 
          in={animate}
          timeout={500}
          classNames={slide}
          unmountOnExit
        >
          <h2 className={styles.title}>{text}</h2>
        </CSSTransition>
        {children}
      </>
    );
  }
}

export default Title;
