import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TruyenNgan from './TruyenNgan';
import TruyenCuoi from './TruyenCuoi';
import DangNhap from './DangNhap';
const AppNavigatorTab = createBottomTabNavigator({
  TruyenCuoi: {
    screen: TruyenCuoi,
    navigationOptions:{
      title:'Truyện cười'
    }
  },
  TruyenNgan: {
    screen: TruyenNgan,
    navigationOptions:{
      title:'Truyện ngắn'
    }
  },
  DangNhap: {
    screen: DangNhap,
    navigationOptions:{
      title:'Đăng Nhập'
    }
  },
},
);
export default createAppContainer(AppNavigatorTab);