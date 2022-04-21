import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default  function Logs({ navigation }) {
  // render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Overview screen</Text>
        <Button
        title="Log an Event"
        onPress={() => navigation.navigate('Log')}
      />
      </View>
    );
  }
// }

// export default Overview;