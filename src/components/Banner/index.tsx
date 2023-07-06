import { SafeAreaView, View } from 'react-native';
import Logo from '../../assets/svgs/logo.svg';

import { styles } from './styles';

export function Banner() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Logo/>
      </SafeAreaView>
    </View>
  );
}