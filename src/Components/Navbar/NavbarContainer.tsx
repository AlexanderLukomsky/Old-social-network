import { StoreContext } from "../StoreContext"
import { Navbar } from "./Navbar"

export const NavbarContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) =>
          <Navbar dialogsData={store.getState().dialogsPage.dialogsData} />
      }
    </StoreContext.Consumer>
  )
}