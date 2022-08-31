import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./profile";

interface SidebarProps {
  activeMenu: "overview" | "transaction" | "settings";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem
            title='Overview'
            icon='overview'
            active={activeMenu == "overview"}
            href='/member'
          />
          <MenuItem
            title='Transactions'
            icon='transaction'
            active={activeMenu == "transaction"}
            href='/member/transaction'
          />
          <MenuItem title='Messages' icon='message' href='/member' />
          <MenuItem title='Card' icon='card' href='/member' />
          <MenuItem title='Rewards' icon='reward' href='/member' />
          <MenuItem
            title='Setting'
            icon='setting'
            active={activeMenu == "settings"}
            href='/member/edit-profile'
          />
          <MenuItem title='Logout' icon='logout' href='/sign-in' />
        </div>
        <Footer />
      </div>
    </section>
  );
}
