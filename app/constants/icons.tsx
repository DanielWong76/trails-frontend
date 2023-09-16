import React from "react";
import Text from "react-native-svg";

import AddImage from '../assets/svg/addImage.svg'
import PostFilled from '../assets/svg/postFilled.svg'
import Post from '../assets/svg/post.svg'
import SettingFilled from '../assets/svg/settingFilled.svg'
import Trail from '../assets/svg/trail.svg'
import TrailFilled from '../assets/svg/trailFilled.svg'
import Map from '../assets/svg/map.svg'
import MapFilled from '../assets/svg/mapFilled.svg'
import AccountFilled from '../assets/svg/accountFilled.svg'
import Account from '../assets/svg/account.svg'
import CarFilled from '../assets/svg/carFilled.svg'
import MountainFilled from '../assets/svg/mountainFilled.svg'
import StarFilled from '../assets/svg/starFilled.svg'




type Props = {
  styles?,
  name: string,
  fill?: string,
  color?: string,
  width?: number,
  height?: number,
}

const SvgIcon: React.FC<Props> = (props: Props) => {

  const { name, fill = '#000', color = '#000', width = 25, height = 25 } = props;


  switch (name) {
    case 'add-image':
      return <AddImage width={width} height={height} fill={fill} color={color} />
    case 'post-filled':
      return <PostFilled width={width} height={height} fill={fill} color={color} />
    case 'post':
      return <Post width={width} height={height} fill={fill} color={color} />
    case 'setting-filled':
      return <SettingFilled width={width} height={height} fill={fill} color={color} />
    case 'trail-filled':
      return <TrailFilled width={width} height={height} fill={fill} color={color} />
    case 'trail':
      return <Trail width={width} height={height} fill={fill} color={color} />
    case 'map-filled':
      return <MapFilled width={width} height={height} fill={fill} color={color} />
    case 'map':
      return <Map width={width} height={height} fill={fill} color={color} />
    case 'account-filled':
      return <AccountFilled width={width} height={height} fill={fill} color={color} />
    case 'account':
      return <Account width={width} height={height} fill={fill} color={color} />
    case 'car-filled':
      return <CarFilled width={width} height={height} fill={fill} color={color} />
    case 'mountain-filled':
      return <MountainFilled width={width} height={height} fill={fill} color={color} />
    case 'star-filled':
      return <StarFilled width={width} height={height} fill={fill} color={color} />
    default:
      return <Text></Text>
  }

}


export default SvgIcon