import Dropdown from 'react-bootstrap/Dropdown'
import {Icon} from "../../shared/icon.jsx"
function ProfileButton({user}) {
    return (
      <Dropdown size="lg" className={'profile-dropdown'}>
        <Dropdown.Toggle color={'white'} variant="warning" id="dropdown-basic">
        {user.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
            <Icon
            iconName="PersonCircle"
            color="#fff"
            size={24}
            className="align-start"/>
            )}

          {user.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Мої курси</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Профіль</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Налаштування</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Історія замовлень</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Вийти</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  export default ProfileButton;
