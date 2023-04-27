import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SvgXml, SvgUri, SvgFromXml } from "react-native-svg";
// import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";
import Sprite from "./src/icons/icons-sprite.svg";
import Icon, { LocalIcon } from "./Icon";

export default function App() {
  const backgroundSvg = require("./src/icons/icons-sprite.svg");
  const svgString = backgroundSvg.toString();
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   const getBarCodeScannerPermissions = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   };

  //   getBarCodeScannerPermissions();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <SvgXml xml={svgString} width="100%" height="100%" /> */}
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
      {/* <SvgFromXml  /> */}
      {/* <SvgUri uri={require('./src/icons/icons-sprite.svg')} height={'100%'} style={{}}/> */}
      {/* <Sprite style={{height:'10', width:'2'}}/> */}
      {/* <SvgUri
        uri={
          "https://devassets.fudr.in/brand/freddiestg/Freddies-Sprite-min.svg"
        }
        style={{
          position: "relative",
          // bottom: 50,
          // top: 50,
          maxHeight: 25,
          maxWidth:25,
        }}
      />
      <SvgUri
        uri={
          "https://devassets.fudr.in/brand/freddiestg/Freddies-Sprite-min.svg"
        }
        style={{
          position: "relative",
          // bottom: 50,
          // top: 50,
          // maxHeight: 25,
          // maxWidth:25,
          // left:25,
          // right: 2500
          // right: 0,
          // top: 0,
          maxHeight: 25,
          maxWidth: 25,
          left: 100
        }}
      /> */}
      <Icon/>
      <LocalIcon/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // height: 10,
    overflow: "hidden",
    // flexDirection:'row'
  },
});
