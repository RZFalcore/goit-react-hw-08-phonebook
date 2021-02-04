import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";

import styles from "./Contacts.module.css";
import quickSlide from "../transitions/quickSlide.module.css";

const Contacts = ({ contacts, animate }) => (
  <>
    <TransitionGroup component="ul" className={styles.contactsList}>
      {contacts.map(({ id }) => (
        <CSSTransition
          key={id}
          in={animate}
          timeout={250}
          classNames={quickSlide}
          unmountOnExit
        >
          <Contact key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(Contacts);
