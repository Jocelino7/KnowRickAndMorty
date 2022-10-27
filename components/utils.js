import NetInfo from '@react-native-community/netinfo';
function unsubscribe(setVisible){
    NetInfo.addEventListener(state => {
        if(!state.isConnected)
            return setVisible(true)
      });

};
export {unsubscribe}