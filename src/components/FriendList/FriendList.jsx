import PropTypes from 'prop-types';
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList =({friends})=>{
return(<ul className={css.friendlist}>
{friends.map(({id, isOnline, name, avatar}) => < FriendListItem key = {id} isOnline = {isOnline} avatar ={avatar} name={name}  />)}
</ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,

    },),),
};