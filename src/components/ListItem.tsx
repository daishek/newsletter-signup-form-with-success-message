import Icon from "../assets/images/icon-list.svg";

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <figure className="w-[20px] h-[20px] mr-3">
        <img width="100%" height="100%" src={Icon} alt="icon" />
      </figure>
      <p className="flex-1 text-dx_CharcoalGrey">{text}</p>
    </li>
  );
};

export default ListItem;
