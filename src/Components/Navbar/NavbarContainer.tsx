import { connect } from "react-redux"
import { RootStateType } from "../../Data/oldStore/store"

import { Navbar } from "./Navbar"

const mapStateToProps = (state: RootStateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData
  }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)