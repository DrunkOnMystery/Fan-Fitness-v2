import React, { Component } from "react";

class Dropdown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Choose Exercise One
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div className="menu" ref={(element) => {
                                this.dropdownMenu = element;
                            }}>
                                <button>Menu Item 1</button>
                                <button>Menu Item 2</button>
                                <button>Menu Item 3</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Dropdown;